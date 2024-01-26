const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tenantSchema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  phone: {
    type: String, 
    match: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/
  },
  email: {
    type: String, 
    lowercase: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
}, {
  timestamps: true
})

const rentSchema = new Schema({
  amount: {type: Number, required: true, match: [/^\d+(\.\d{2})?$/]},
  dueDate: {type: Date, required: true},
  datePaid: {type: Date, required: true},
  isPaid: {type: Boolean, default: false},
}, {
  timestamps: true
})

const serviceSchema = new Schema({
  title: {type: String, required: true},
  repairStatus: {
    type: String,
    enum: ['New', 'In Progress', 'Resolved'],
    default: 'New',
  },
  dateReport: {type: Date, required: true},
  dateResolved: {type: Date, required: true},
  repairCost: {type: Number, match: [/^\d+(\.\d{2})?$/]},
  comment: {type: String}
}, {
  timestamps: true
})

const unitSchema = new Schema({
  leaseStart: Date,
  leaseEnd: Date,
  leaseFile: String,
  unitNum: {type: String, required: true},
  occupied: {type: Boolean, required: true, default: false},
  tenants: [tenantSchema],
  service: [serviceSchema],
  rent: [rentSchema],
}, {
  timestamps: true
})

module.exports = mongoose.model('Unit', unitSchema)