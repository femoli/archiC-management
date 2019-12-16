const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const usersSchema = new Schema({

    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },

    nome: { type: String, required: true },

    cau_cre: { type: String, required: true },

    responsavel_tecnico: { type: String, unique: true, required: true },

    projetos_ativos: { type: String, unique: true, required: true },

    email: { type: String, required: true },

    telefone: { type: Number, required: true }

})

const usersCollection = mongoose.model('users', usersSchema)
module.exports = usersCollection

//json pro postman
// "nome": "",
// "cau_cre": "",
// "responsavel_tecnico": "",
// "projetos_ativos": "",
// "email": "",
// "telefone": ""