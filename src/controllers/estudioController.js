const mongoose = require('mongoose')
const Estudio = require('../models/estudio')

const getAll = async (req, res) => {
    const estudios = await Estudio.find()
    res.json(estudios)
  }

const createStudio = async (req, res) => {
    const estudio = new Estudio({
     _id: new mongoose.Types.ObjectId(),
     nome: req.body.nome,
     criadoEm: req.body.criadoEm,
   })
   const estudioJaExiste = await Estudio.findOne({nome: req.body.nome})
   if (estudioJaExiste) {
     return res.status(409).json({error: 'Estudio ja cadastrado.'})
   }
   try{
     const novoEstudio = await estudio.save()
     res.status(201).json(novoEstudio)
   } catch(err) {
     res.status(400).json({ message: err.message})
   }
 }

 const updateOne = async (req, res) => {
   try {
     //tenta encontrar um estudio pelo id
    const estudio = await Estudio.findById(req.params.id)
    //se não tiver nada no corpo da requisição retorne erro
    if (estudio == null){
      return res.status(404).json({message: "Estúdio não encontrado"})
    }
    //se no corpo da requisição tem algo digitado, considere o que tiver digitado como alteração
    if (req.body.nome != null){
      estudio.nome = req.body.nome
    }
    const estudioAtualizado = await estudio.save()
    //retorne o status ok e o documento salvo
    res.status(200).json(estudioAtualizado)
    //se tiver qualquer erro acima, mostre qual foi o erro
   } catch (err){
    res.status(500).json({ message: err.message})
   }
 }

 const deleteById = async (req, res) => {
  const estudio = await Estudio.findById(req.params.id)
      if (estudio == null){
          return res.status(404).json({message: "Estudio não encontrado."})
  }
  try{
        await estudio.remove()
          res.status(200).json({message:"Estudio deletedo com sucesso."})
      } catch (err){
          res.status(500).json({message: err.message})
    }
}

module.exports = {
    getAll,
    createStudio,
    updateOne,
    deleteById
    
}