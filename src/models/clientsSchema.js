const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const { projectsSchema } = require ('./projectsSchema');

const clientsSchema = new Schema({

    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },

    nome: { type: String, required: true },

    obra: [projectsSchema],

    email: { type: String, required: true },

    telefone: { type: Number, required: true },

    endereco: { type: String, required: true }

});


const clientsCollection = mongoose.model('clients', clientsSchema)
module.exports = {clientsCollection, clientsSchema};

//"nome" : ""
//"obra": ""
//"email": ""
//"telefone": 
//"endereco" : ""