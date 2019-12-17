const mongoose = require('mongoose');

//ProjectsEnum 
//const Enum = require('enum');
// const categoriesEnum = new Enum ({
//     'Residencial': 1, 
//     'Comercial': 2, 
//     'Institucional' : 3, 
//     'Corporativo': 4
// });

//ProjectsSchema
const Schema = mongoose.Schema;
const projectsSchema = new Schema({

    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },

    obra: {
        type: String,
        required: true
    },

    cliente: {
        type: String,
        required: true
    },

    localizacao: {
        type: String,
        required: true
    },

    descricao: {
        type: String,
        required: true
    },

    data_inicio: {
        type: String,
        required: true
    },

    data_conclusao: {
        type: String,
        required: true
    },

    area_terreno: {
        type: String,
        required: true
    },

    area_construida: {
        type: String,
        required: true
    },

    situacao: {
        type: String,
        required: true
    },

    responsavel_tecnico: {
        type: String,
        required: true
    },

    observacoes: {
        type: String,
        required: true
    },
});

const projectsCollection = mongoose.model('project', projectsSchema)
module.exports = projectsCollection

 // json pro postman
    // "obra": "",
    // "cliente":"",
    // "localizacao": "",
    // "descricao": "",
    // "data_inicio": "",
    // "data_conclusao": "",
    // "area_terreno": "",
    // "area_construida": "",
    // "situacao": "",
    // "responsavel_tecnico": "",
    // "observacoes": ""