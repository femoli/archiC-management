const express = require('express');
const router = express.Router();

const controller = require("../controllers/projectsController")
 

router.get("/projetos", controller.getAllProjects)
router.post("/novo-projeto", controller.createNewProject)
// router.patch("/atualizar/:id", controller.updateFilme)
// router.patch("/exibicao/:id", controller.patchFilme)
// router.delete("/remover/:id", controller.deleteFilme)

module.exports = router