const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//criar a const com os tipos enum
const projectsSchema = new Schema({

    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },

    obra: String,
    //cliente: id, chamaria o cliente 
    localizacao: String,
    descricao: String,
    observacoes: [{ body: String, date: Date }],
    prazo: Date,
    area_terreno: Number,
    area_construida: Number,
    //situacao: [{ em andamento, parado, concluido, interrompido }] //opcoes pra escolher
    //responsavel_tecnico: id arquiteto/user

});

const projectsCollection = mongoose.model('project', projectsSchema)
module.exports = projectsCollection

//json pro postman
// "obra": "",
// "localizacao": "",
// "descricao": "",
// "observacoes": "",
// "prazo": "",
// "area_terreno": "",
// "area_construida": ""