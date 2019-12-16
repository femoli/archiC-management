const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const projectsSchema = new Schema({

    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },

    obra: { type: String, unique: true, required: true },

    cliente: { type: String, required: true }

})

/* responsavel: {
    type: String,
    required: true
},

localizacao: {
    type: String,
    required: true
},

areaTerreno: {
    type: String,
},

areaConstruida: {
    type: String,
},

]}
})
*/


const projectsCollection = mongoose.model('project', projectsSchema)
module.exports = projectsCollection