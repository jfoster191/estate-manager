const bcrypt = require('bcrypt')
const User = require('../../models/user')
const jwt = require('jsonwebtoken')

const SALT_ROUNDS = 6

module.exports = {
  create,
  login,
  checkToken
}

async function create(req, res){
  try {
    const user =  await User.create(req.body);
    const token = createJWT(user);
    res.json(token);
  } catch(err) {
    res.status(400).json(err);
  }
}

async function login(req, res){
  try {
    const user = await User.findOne({email: req.body.email})
    if (!user) throw new Error('Invalid Credentials')
    const confirmed = await bcrypt.compare(req.body.password, user.password)
    if (!confirmed) throw new Error('Invalid Credentials')
    const token = createJWT(user);
    res.json(token);
  } catch (err) {
    res.status(400).json(err)
  }
}

function checkToken(req, res){
  console.log('req.user', req.user)
  res.json(req.exp)
}

/*------ Helper Functions -------*/
function createJWT(user){
  return jwt.sign(
    {user},
    process.env.SECRET,
    {expiresIn: '24h'}
    )
}