const express = require('express');
const router = express.Router();

const controller = require("../controllers/projectsController")
 

router.get("/projetos", controller.getAllProjects)
router.post("/novo-projeto", controller.createNewProject)
router.patch("/atualizar-projeto/:id", controller.updateProjectById)
router.delete("/apagar-projeto/:id", controller.removeProjectById)

module.exports = router