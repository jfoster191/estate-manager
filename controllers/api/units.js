const aws = require('@aws-sdk/client-s3')
const fs = require('fs')
const uuid = require('uuid')
const {resolve} = require('path')
const {replace} = require('path')

const Unit = require('../../models/unit')
const Property = require('../../models/property')

module.exports = {
  index,
  detail,
  create,
  addServiceRequest,
  addFile,
  updateUnit,
  addTenant
}

async function index(req, res){
  const units = await Unit.find({})
  res.json(units)
}

async function detail (req, res){
  const unit = await Unit.findById(req.params.id)
  res.json(unit)
}

async function addServiceRequest(req, res){
  try {
    const unit = await Unit.findById(req.body.unit)
    unit.service.push({
      title: req.body.title,
      dateReport: req.body.dateReported.startDate,
      comment: req.body.comment
    })
    unit.save()
    res.json(unit)
  } catch (error) {
    res.status(400).json(error)
  }
}

async function create (req, res){
  console.log(req.body, req.file)
  try {
    const unit = await Unit.create({
      leaseStart: req.body.leaseStart,
      leaseEnd: req.body.leaseEnd,
      unitNum: req.body.unitNum,
      numOfRooms: req.body.numOfRooms,
      occupied: req.body.occupied,
      amount: req.body.amount,
      dueDay: req.body.dueDay,
      leaseFile: []
    })
    if(unit.leaseStart){
      calcAndSetRent(unit.leaseStart, unit.leaseEnd, unit.dueDay, unit)
      await unit.save()
    }
    if(req.file){
      const inputFile = req.file
      if(inputFile){
        const s3 =  new aws.S3Client({region: "us-east-1"})
        const command = new aws.PutObjectCommand({
          Bucket: process.env.S3_BUCKET,
          Key: `${req.body.unitNum}-${inputFile.originalname.replace(" ", "")}`,
          Body: inputFile.buffer,
          ContentType: inputFile.mimetype,
        })
        const filePath = `https://${process.env.S3_BUCKET}.s3.amazonaws.com/${req.body.unitNum}-${inputFile.originalname.replace(" ", "")}`
        console.log(filePath)
        try {
          const response = await s3.send(command)
          console.log(response)
        } catch (error) {
          console.log(error)
        }
        unit.leaseFile.push(filePath)
        await unit.save()
      }
    }
    const property = await Property.findById(req.body.currentProperty)
    property.units.push(unit._id)
    property.save()
    res.json(unit)
  } catch (error) {
    res.status(400).json(error)
  }
}

async function updateUnit(req, res){
  const updates = {}
  if(req.body.occupied) updates.occupied = req.body.occupied
  if(req.body.dates.endDate) updates.leaseEnd = req.body.dates.endDate
  if(req.body.dates.startDate) updates.leaseStart = req.body.dates.startDate
  if(req.body.amount) updates.amount = req.body.amount
  if(req.body.dueDay) updates.dueDay = req.body.dueDay
  console.log(updates)
  try {
    const unit = await Unit.findByIdAndUpdate(req.body.unit, updates)
    if(unit.leaseStart){
      calcAndSetRent(unit.leaseStart, unit.leaseEnd, unit.dueDay, unit)
      await unit.save()
    }
    res.json(unit)
  } catch (error) {
    res.status(400).json(error)
  }
}

async function addTenant(req, res){
  console.log(req.body)
  try {
    const unit = await Unit.findById(req.body.unit)
    unit.tenants.push({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone
    })
    unit.save()
    res.json(unit)
  } catch (error) {
    res.status(400).json(error)
  }
}

/*------ Helper Functions ------*/

async function addFile(req){
  const inputFile = req.file
  if(inputFile){
    const s3 =  new aws.S3Client({region: "us-east-1"})
    const command = new aws.PutObjectCommand({
      Bucket: process.env.S3_BUCKET,
      Key: `${req.body.unitNum}-${inputFile.originalname.replace(" ", "")}`,
      Body: inputFile.buffer,
    })
    const filePath = `https://${process.env.S3_BUCKET}.s3.amazonaws.com/${req.body.unitNum}-${inputFile.originalname.replace(" ", "")}`
    console.log(filePath)
    try {
      const response = await s3.send(command)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
  return filePath
}

function calcAndSetRent(d1, d2, dueDay, unit){
  const d1Y = d1.getFullYear()
  const d2Y = d2.getFullYear()
  const d1M = d1.getMonth()
  const d2M = d2.getMonth()
  console.log(d1M, d2M)
  let year = d1Y
  let month = d1M+1
  const monthsDiff = (d2M+12*d2Y)-(d1M+12*d1Y)
  for(let i=0; i < monthsDiff+1; i++){
    const dueDate = new Date(year, month, dueDay)
    month += 1
    if(month > 11){
      year += 1
      if(d1M === 11){
        month = 1
      } else{
        month = 0
      }
    }
    unit.rent.push({
      amount: unit.amount,
      dueDate: dueDate,
    })
  }
  if(d1M === 11 && d2M === 11){
    unit.rent.pop()
  }
}