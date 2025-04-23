const mongoose = require('mongoose'); // Importação do Mongoose
mongoose.Promise = global.Promise; // COloquei global 

const modelSchema = new mongoose.Schema({ // Definição do Schema
    name: String,
    tipo:String,
    valor:float,
    frete:Number
});

const modelProduct = 'Product' // dando nome ao modelname  

if(mongoose.connection && mongoose.connection.model[modelProduct]){ //Conectou ao banco e executa. Caso não existe erro.
    module.export = mongoose.connection.model[modelProduct];
}else {
    modue.export = mongoose.model[modelProduct], modelSchema;
}