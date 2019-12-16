const express = require('express');
const router = express.Router();

const controller = require("../controllers/usersController.js")
 

router.get("/usuarios", controller.getAllUsers)
router.post("/novo-usuario", controller.createNewUser)
// router.patch("/atualizar/:id", controller.updateFilme)
// router.patch("/exibicao/:id", controller.patchFilme)
// router.delete("/remover/:id", controller.deleteFilme)

module.exports = router