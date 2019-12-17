const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const { clientsSchema } = require ('./clientsSchema');

//const 

const usersSchema = new Schema({

    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },

    responsavel_tecnico: { type: String, required: true },

    cau_cre: { type: String, required: true, unique: true },

    projetos_ativos: [clientsSchema],

    email: { type: String, required: true },

    telefone: { type: Number, required: true }

});

const usersCollection = mongoose.model('users', usersSchema)
module.exports = { usersCollection, usersSchema };

//json pro postman
// "nome": "",
// "cau_cre": "",
// "responsavel_tecnico": "",
// "projetos_ativos": "",
// "email": "",
// "telefone": ""