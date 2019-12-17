const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const clientsSchema = new Schema({

    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },

    nome: { type: String, required: true },

    obra: { type: String, required: true },

    email: { type: String, required: true },

    telefone: { type: Number, required: true },

    endereco: { type: String, required: true }

})


const clientsCollection = mongoose.model('clients', clientsSchema)
module.exports = clientsCollection

//"nome" : ""
//"obra": ""
//"email": ""
//"telefone": 
//"endereco" : ""