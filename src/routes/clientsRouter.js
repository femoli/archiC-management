const express = require('express');
const router = express.Router();

const controller = require("../controllers/clientsController.js")
 

router.get("/clientes", controller.getAllClients)
router.post("/novo-cliente", controller.createNewClient)
// router.patch("/atualizar/:id", controller.updateFilme)
// router.patch("/exibicao/:id", controller.patchFilme)
// router.delete("/remover/:id", controller.deleteFilme)

module.exports = router