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

const getProjectById = (req, res) => {
    projectsCollection.findById((error, projects) => {
        if (error) {
            return res.status(500).send(error)
        } else {
            return res.status(200).send(projects)
        }
    })
};

//postRoutes

const createNewProject = (req, res) => {

    const projectName = req.body.obra;
    const projectClient = req.body.cliente;
    const projectLocation = req.body.localizacao;
    const projectDescription = req.body.descricao;
    const projectCategory = req.body.categoria;
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
        categoria: projectCategory,
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
};

//updateRoute

const updateProjectById = (req, res) => {
    const idParam = req.params.id
    const updateProject = req.body
    const options = { new: true }
    projectsCollection.findByIdAndUpdate(
        idParam,
        updateProject,
        options,
        (error, project) => {
            if (error) {
                return res.status(500).send(error)
            } else {
                if (project) {
                    return res.status(200).send(project)
                } else {
                    return res.sendStatus(404)
                }
            }
        })
};


//deleteRoute

const removeProjectById = (req, res) => {
    const id = req.params.id
    projectsCollection.findByIdAndRemove(id, (error, project) => {
        if (error) {
            return res.status(500).send(error)
        } else if (project) {
            return res.status(200).send("Projeto deletado")
        }
        else {
            return res.sendStatus(404)
        }
    })
};


module.exports = {
    getAllProjects,
    getProjectById,
    createNewProject,
    updateProjectById,
    removeProjectById
}

// json pro postman
// {   
//     "obra": "",
//     "cliente":"",
//     "localizacao": "",
//     "categoria": "",
//     "descricao": "",
//     "data_inicio": "",
//     "data_conclusao": "",
//     "area_terreno": "",
//     "area_construida": "",
//     "situacao": "",
//     "responsavel_tecnico": "",
//     "observacoes": ""
// }

//PRA-MAIS-TARDE:   
//criar um id especifico pro projeto && 
//chamar id clientes e usuarios no projectSchema