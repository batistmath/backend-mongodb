const mongoose = require('mongoose'); // Importação do Mongoose
mongoose.Promise = global.Promise; // COloquei global 

const modelSchema = new mongoose.Schema({ // Definição do Schema
    name:String,
});

const modelName = 'States' // dando nome ao modelname  

if(mongoose.connection && mongoose.connection.models[modelName]){ //Conectou ao banco e executa. Caso não existe erro.
    module.exports = mongoose.connection.models[modelName];
}else {
    module.exports = mongoose.model(modelName, modelSchema);
}