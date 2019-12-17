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
    const projectClient = req.body.cliente;
    const projectLocation = req.body.localizacao;
    const projectDescription = req.body.descricao;
    const projectStart = req.body.data_inicio;
    const projectDeadline = req.body.data_conclusao;
    const projectSiteArea = req.body.area_terreno;
    const projectArea = req.body.area_construida;
    const projectAuthor = req.body.responsavel_tecnico;
    const projectStatus = req.body.situacao;
    const projectNotes = req.body.observacoes;

    const project = new projectsCollection({
        obra: projectName,
        cliente: projectClient,
        localizacao: projectLocation,
        descricao: projectDescription,
        data_inicio: projectStart,
        data_conclusao: projectDeadline,
        area_terreno: projectSiteArea,
        area_construida: projectArea,
        responsavel_tecnico: projectAuthor,
        situacao: projectStatus,
        observacoes: projectNotes
    })

    project.save((error) => {
        if (error) {
            return res.status(400).send(error)
        } else {
            return res.status(201).send(project)
        }

    })
}

module.exports = {
    getAllProjects,
    createNewProject
}

    // json pro postman
    // "obra": "",
    // "cliente":"",
    // "localizacao": "",
    // "descricao": "",
    // "data_inicio": "",
    // "data_conclusao": "",
    // "area_terreno": "",
    // "area_construida": "",
    // "situacao": "",
    // "responsavel_tecnico": "",
    // "observacoes": ""

//PRA-MAIS-TARDE:   
//criar um id especifico pro projeto && 
//chamar id clientes e usuarios no projectSchema