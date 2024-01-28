const Unit = require('../../models/unit')
const Property = require('../../models/property')

module.exports = {
  create
}

// async function index (req, res){
//   const units = await Unit.find({owner: req.user._id})
//   res.json(units)
// }

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
    console.log(unit)
    const property = await Property.findById(req.body.currentProperty)
    property.units.push(unit._id)
    property.save()
    res.json(unit)
  } catch (error) {
    res.status(400).json(error)
  }
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