const mongoose = require("mongoose");
const Titulo = require('../models/titulo'); //importando a classe Titulo

const getAll = async (req, res) => {
    const titulos = await Titulo.find().populate('estudio')
    res.status(200).json(titulos)
}

const getAllPixar = async (req, res) => {
    const titulos = await Titulo.find().populate('estudio')
    const titulosFiltrados = titulos.filter(titulo => titulo.estudio.nome == "Pixar")
    res.json(titulosFiltrados)
}

const getAllMarvel = async (req, res) => {
    const titulos = await Titulo.find().populate('estudio')
    const titulosFiltrados = titulos.filter(titulo => titulo.estudio.nome == "Marvel")
    res.json(titulosFiltrados)
}

const getAllGhibli = async (req, res) => {
    const titulos = await Titulo.find().populate('estudio')
    const titulosFiltrados = titulos.filter(titulo => titulo.estudio.nome == "Ghibli")
    res.json(titulosFiltrados)
}

const getAllDisney = async (req, res) => {
    const titulos = await Titulo.find().populate('estudio')
    const titulosFiltrados = titulos.filter(titulo => titulo.estudio.nome == "Disney")
    res.json(titulosFiltrados)
}

const createTitle = async (req, res)=>{
    const titulo = new Titulo({
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome, 
        genero: req.body.genero,
        descricao: req.body.descricao,
        estudio: req.body.estudio,
        criadoEm: req.body.criadoEm

    })
    const tituloJaExiste = await Titulo.findOne({nome: req.body.nome})
   if (tituloJaExiste) {
     return res.status(409).json({error: 'Estudio ja cadastrado.'})
   }
    try{
        const novoTitulo = await titulo.save()
        res.status(201).json(novoTitulo)
    }catch (err){
        res.status(400).json({message: err.message})
    }
}

const updateOne = async (req, res) => {
    try {
      //tenta encontrar um titulo pelo id
     const titulo = await Titulo.findById(req.params.id)
     //se não tiver nada no corpo da requisição retorne erro
     if (titulo == null){
       return res.status(404).json({message: "Título não encontrado"})
     }
     //se no corpo da requisição tem algo digitado, considere o que tiver digitado como alteração
     if (req.body.nome != null){
       titulo.nome = req.body.nome
     }
     const tituloAtualizado = await titulo.save()
     //retorne o status ok e o documento salvo
     res.status(200).json(tituloAtualizado)
     //se tiver qualquer erro acima, mostre qual foi o erro
    } catch (err){
     res.status(500).json({ message: err.message})
    }
  }

  const deleteById = async (req, res) => {
    const titulo = await Titulo.findById(req.params.id)
        if (titulo == null){
            return res.status(404).json({message: "Título não encontrado."})
    }
    try{
          await titulo.remove()
            res.status(200).json({message:"Título deletedo com sucesso."})
        } catch (err){
            res.status(500).json({message: err.message})
      }
  }

module.exports = {
    getAll,
    getAllPixar,
    getAllMarvel,
    getAllGhibli,
    getAllDisney,
    createTitle,
    updateOne,
    deleteById
}

