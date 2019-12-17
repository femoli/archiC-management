const express = require("express");
const router = express.Router();
const controller = require("../controllers/usersController.js");
 
//USER
router.get("/usuarios", controller.getAllUsers);
router.post("/novo-usuario", controller.createNewUser);

//CLIENT
router.get("/logado/clientes", controller.getAllClients);
router.post("/logado/:id/novo-cliente", controller.createNewClient);

//PROJECT
router.get("/logado/projetos", controller.getAllProjects);
router.post("/logado/novo-projeto", controller.createNewProject);
router.patch("/logado/atualizar-projeto/:id", controller.updateProjectById);
router.delete("/logado/apagar-projeto/:id", controller.removeProjectById);

module.exports = router