const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    require: false,
  },
  cpfCnpj: {
    type: String,
    require: false,
  },
  telephone: {
    type: String,
    require: false,
  },
  cep: {
    type: String,
    require: false,
  },
  publicPlace: {
    type: String,
    require: false,
  },
  number: {
    type: String,
    require: false,
  },
  neighborhood: {
    type: String,
    require: false,
  },
  city: {
    type: String,
    require: true,
  },
  state: {
    type: String,
    require: false,
  },
});

const User = mongoose.model('user',UserSchema);

module.exports = User;