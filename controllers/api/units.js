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
  console.log(req.body)
  try {
    const unit = await Unit.create({
      leaseStart: req.body.dates.startDate,
      leaseEnd: req.body.dates.endDate,
      unitNum: req.body.unitNum,
      occupied: req.body.occupied
    })
    const property = await Property.findById(req.body.currentProperty)
    property.units.push(unit._id)
    property.save()
    res.json(unit)
  } catch (error) {
    res.status(400).json(error)
  }
}