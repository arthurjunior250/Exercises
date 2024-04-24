const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const registerSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, {
  timestamps: true,
});

const Register = mongoose.model('Register', registerSchema);

module.exports = Register;
