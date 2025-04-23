const {checkSchema} = require('express-validator')

module.exports = {
    editAction: checkSchema({
        name: {
            notEmpty:true,
            trim:true,
            isLength:{
                options:{min:1}
            },
            errorMessage: 'Nome precisa de pelo menos 2 caracteres'
        },
        email: {
            isEmail:true,
            normalizeEmail:true,
            errorMessage:'Email Invalido',
        },
        password: {
            isLength:{
                options:{min:8}
            },
            errorMessage: 'A senha precisa de pelo menos 8 caracteres'
        },
        state:{
            notEmpty:true,
            errorMessage: 'Estado é obrigatório'
        },
        token: {
            notEmpty:true,
            errorMessage: 'Token obrigatório'
        }
    })
}