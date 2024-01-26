const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')

const SALT_ROUNDS = 6

const userSchema = new Schema({
  name: {type: String, required: true},
  phone: {
    type: String, 
    match: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    required: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  password: {
    type: String,
    trim: true,
    minLength: 3,
    required: true
  }
}, {
  timestamps: true,
  toJSON: {
    transform: function(doc, ret){
      delete ret.password;
      return ret;
    }
  }
})

userSchema.pre('save', async function(next){
  if(!this.isModified('password')) return next()
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS)
  return next()
})

module.exports = mongoose.model('User', userSchema)