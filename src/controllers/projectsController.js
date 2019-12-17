const projectsCollection = require('../models/projectsSchema')

//getRoutes

const getAllProjects = (req, res) => {
    projectsCollection.find((error, projects) => {
        if (error) {
            return res.status(500).send(error)
        } else {
            return res.status(200).send(projects)
        }
    })
};

const createNewProject = (req, res) => {
    const projectName = req.body.obra;
    //const projectClient = req.body.cliente;
    const projectLocation = req.body.localizacao;
    const projectDescription = req.body.descricao;
    const projectNotes = req.body.observacoes;
    const projectDeadline = req.body.prazo;
    const projectSiteArea = req.body.area_terreno;
    const projectArea = req.body.area_construida;
    const project = new projectsCollection({ 
        
        obra: projectName,
        localizacao : projectLocation,
        descricao : projectDescription, 
        observacao : projectNotes,
        prazo : projectDeadline,
        area_terreno : projectSiteArea,
        area_construida : projectArea          
    })
    project.save((error) => {
        if (error) {
            return res.status(400).send(error)
        } else {
            return res.status(201).send(project)
        }

    })
}

//criar um id especifico
//chamar os clientes na rota do 
module.exports = {
    getAllProjects,
    createNewProject
}

//json pro postman
// "obra": "",
// "localizacao": "",
// "descricao": "",
// "observacoes": "",
// "prazo": "",
// "area_terreno": "",
// "area_construida": ""