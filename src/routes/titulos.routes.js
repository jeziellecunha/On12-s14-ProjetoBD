const express = require("express");
const router = express.Router();
const controller = require('../controllers/tituloController');


//listar todos os titulos/get/find
router.get('/', controller.getAll)

//listar todos os títulos da Pixar, Marvel, Ghibli e Disney
router.get('/pixar', controller.getAllPixar)

router.get('/marvel', controller.getAllMarvel)

router.get('/ghibli', controller.getAllGhibli)

router.get('/disney', controller.getAllDisney)

//criar um novo titulo/post/save
router.post('/', controller.createTitle)

//atualizar uma informacao especifica num titulo/patch/findById/save
router.patch('/:id', controller.updateOne)

//deletar um titulo por id
router.delete('/:id', controller.deleteById)

module.exports = router