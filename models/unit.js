const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const unitSchema = new Schema({
  leaseStart: {type: Date, required: true},
  leaseEnd: {type: Date, required: true},
  leaseFile: String,
  unitNum: {type: String, required: true},
  tenants: {type: String, required: true},
})

module.exports = mongoose.model('Unit', unitSchema)