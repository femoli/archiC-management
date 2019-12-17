const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//criar a const com os tipos enum
const projectsSchema = new Schema({

    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },
    obra: String, // String is shorthand for {type: String}
    //cliente: String, chamaria o cliente 
    localizacao: String,
    descricao: String,
    //observacoes: [{ body: String, date: Date }],
    prazo: { type: Date, default: Date.now },
    area_terreno: Number,
    area_construida: Number,
    //situacao: [{ em andamento, parado, concluido, interrompido }] //opcoes pra escolher
    //responsavel_tecnico: chamaria o arquiteto/user

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