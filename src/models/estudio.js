const mongoose = require("mongoose");

const estudioSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId, //  poder usar o id depois
    nome: {
        type: String,
        required: true
    },
    criadoEm: {
        type: Date,
        required: true,
        default: new Date
    }
},{versionkey: false //retirar a visualização da versão
})

module.exports = mongoose.model("estudio", estudioSchema)