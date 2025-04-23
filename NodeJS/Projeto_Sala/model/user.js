const mongoose = require('mongoose'); // Importação do Mongoose
mongoose.Promise = global.Promise; // COloquei global 

const modelSchema = new mongoose.Schema({ // Definição do Schema
    name:String,
    estado:String,
    token:Number,
    email:String,
    password:String,
    telefone:Number,
    datanascimento:Date,
    cpf:Number,
    bairro:String,
    cep:String,
});

const modelUsers = 'Users' // dando nome ao modelname  

if(mongoose.connection && mongoose.connection.models[modelUsers]){ //Conectou ao banco e executa. Caso não existe erro.
    module.exports = mongoose.connection.models[modelUsers];
}else {
    module.exports = mongoose.model(modelUsers, modelSchema);
}