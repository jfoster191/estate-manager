const Property = require('../../models/property')

module.exports = {
  index,
  create
}

async function index (req, res){
  const properties = await Property.find({owner: req.user._id})
  res.json(properties)
}

async function create (req, res){
  console.log(req.body)
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