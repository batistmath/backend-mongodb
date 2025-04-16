const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const modelSchema = new mongoose.Schema({
  name: String,
  email: String,
  celular: Number,
  cpf: Number,
  cidade: String,
  endereco: String,
  estado: String,
  token: String,
});

const modelName = "user";

if (mongoose.connection && mongoose.connection.models[modelName]) {
  module.exports = mongoose.connection.models[modelName];
} else {
  module.exports = mongoose.model(modelName, modelSchema);
}
