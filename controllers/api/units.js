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
  try {
    const unit = await Unit.create({
      leaseStart: req.body.dates.startDate,
      leaseEnd: req.body.dates.endDate,
      unitNum: req.body.unitNum,
      occupied: req.body.occupied,
      amount: req.body.amount,
      dueDay: req.body.dueDay,
    })
    if(unit.leaseStart){
      calcAndSetRent(unit.leaseStart, unit.leaseEnd, unit.dueDay, unit)
      await unit.save()
    }
    const property = await Property.findById(req.body.currentProperty)
    property.units.push(unit._id)
    property.save()
    res.json(unit)
  } catch (error) {
    res.status(400).json(error)
  }
}

/*------ Helper Functions ------*/

async function addFile(req, propID){
  const inputFile = req.file
  if(inputFile){
    const s3 =  new aws.S3Client({region: "us-east-1"})
    const command = new aws.PutObjectCommand({
      Bucket: process.env.S3_BUCKET,
      Key: `${Date.now()}-${inputFile.originalname}`,
      Body: inputFile.buffer,
    })
    try {
      const response = await s3.send(command)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
return `${process.env.S3_BASE_URL}${process.env.S3_BUCKET}/${command.key}`
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