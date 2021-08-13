const mongoose = require("mongoose");

const tituloSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nome: {
        type: String,
        requered: true // requesito o brigatório
    },
    genero:{
        type: String,
        requered: true
    },
    descricao:{
            type: String,
            requered: true
    },
    estudio:{
        type: mongoose.Schema.Types.ObjectId, //irá receber o id do estudio
        requered: true,
        ref: 'estudio' // nome que foi exportado em estudio.js
    },
    criadoEem:{
        type: Date,
        required: true,
        default: new Date
  }
})

module.exports = mongoose.model('titulo', tituloSchema)