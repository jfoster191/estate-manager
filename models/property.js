const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const unitSchema = require('./unit');

const addressSchema = new Schema({
  street: {type: String, required: true},
  city: {type: String, required: true},
  state: {
    type: String, 
    enum: [
      'Alabama',
      'Alaska',
      'Arizona',
      'Arkansas',
      'California',
      'Colorado',
      'Connecticut',
      'Delaware',
      'Florida',
      'Georgia',
      'Hawaii',
      'Idaho',
      'Illinois',
      'Indiana',
      'Iowa',
      'Kansas',
      'Kentucky',
      'Louisiana',
      'Maine',
      'Maryland',
      'Massachusetts',
      'Michigan',
      'Minnesota',
      'Mississippi',
      'Missouri',
      'Montana',
      'Nebraska',
      'Nevada',
      'New Hampshire',
      'New Jersey',
      'New Mexico',
      'New York',
      'North Carolina',
      'North Dakota',
      'Ohio',
      'Oklahoma',
      'Oregon',
      'Pennsylvania',
      'Rhode Island',
      'South Carolina',
      'South Dakota',
      'Tennessee',
      'Texas',
      'Utah',
      'Vermont',
      'Virginia',
      'Washington',
      'West Virginia',
      'Wisconsin',
      'Wyoming',
    ],
    required: true
  },
  zip: {type: Number, required: true},
}, {
  timestamps: true
})

const maintenanceSchema = new Schema({
  title: {type: String, required: true},
  repairStatus: {
    type: String,
    enum: ['New', 'In Progress', 'Resolved'],
    default: 'New',
  },
  dateResolved: {type: Date, required: true},
  repairCost: {type: Number, match: [/^\d+(\.\d{2})?$/]},
  comment: {type: String}
}, {
  timestamps: true
})

const propertySchema = new Schema({
  mortgage: {type: Number, match: [/^\d+(\.\d{2})?$/]},
  address: addressSchema,
  units: [unitSchema],
  maintenanceRequests: [maintenanceSchema],
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
}, {
  timestamps: true
})

module.exports = mongoose.model('Property', propertySchema)