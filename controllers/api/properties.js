const Property = require('../../models/property')

module.exports = {
  index,
  detail,
  create,
  addMaintenanceRequest,
  deleteProperty
}

async function index (req, res){
  const properties = await Property.find({owner: req.user._id}).populate('units')
  res.json(properties)
}

async function detail(req, res){
  const property = await Property.findById(req.params.id).populate('units')
  res.json(property)
}

async function create (req, res){
  try {
    const property = await Property.create({
      mortgage: req.body.mortgage,
      address: {
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip
      },
      owner: req.user._id
    })
    res.json(property)
  } catch (error) {
    res.status(400).json(error)
  }
}

async function addMaintenanceRequest(req, res){
  try {
    const property = await Property.findById(req.body.property)
    property.maintenanceRequests.push({
      title: req.body.title,
      comment: req.body.comment
    })
    property.save()
    res.json(property)
  } catch (error) {
    res.status(400).json(error)
  }
}

async function deleteProperty(req, res){
  try {
    await Property.deleteOne({_id: req.body._id})
  } catch (error) {
    res.status(400).json(error)
  }
  const properties = await Property.find({ owner: req.user._id })
  res.json(properties)
}