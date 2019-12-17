const { usersCollection } = require('../models/usersSchema');
const { clientsCollection } = require('../models/clientsSchema');
const { projectsCollection } = require('../models/projectsSchema');

//USERS ROUTES
//GET
const getAllUsers = (req, res) => {
    usersCollection.find((error, users) => {
        if (error) {
            return res.status(500).send(error)
        } else {
            return res.status(200).send(users)
        }
    })
};

//const getProjectByID = (req, res) => {
    
//     projectsCollection.findById((error, projects) => {
//         if (error) {
//             return res.status(500).send(error)
//         } else {
//             return res.status(200).send(projects)
//         }
//     })
// };

//POST
const createNewUser = (req, res) => {
    const userManagement = req.body.responsavel_tecnico;
    const userLicense = req.body.cau_cre;
    const userProjects = req.body.projetos_ativos;
    const userNumber = req.body.telefone;
    const userEmail = req.body.email;
    const user = new usersCollection({
        responsavel_tecnico: userManagement,
        cau_cre: userLicense,
        projetos_ativos: userProjects,
        email: userEmail,
        telefone: userNumber
    })


    
    user.save((error) => {
        if (error) {
            return res.status(400).send(error)
        } else {
            return res.status(201).send(user)
        }

    })
};

//CLIENTS ROUTES
//GET

const getAllClients = (req, res) => {
    clientsCollection.find((error, clients) => {
        if (error) {
            return res.status(500).send(error)
        } else {
            return res.status(200).send(clients)
        }
    })
};

//POST
const createNewClient = async (req, res) => {
    const userId = req.params.id;
    const client = req.body;

    const newClient = new clientsCollection(client)
    const user = await usersCollection.findById(userId)
        user.projetos_ativos.push(newClient)
        user.save((error) => {
            if (error) {
                return res.status(500).send(error)
            }
    
            return res.status(201).send(user)
        })
    }

//PROJECTS ROUTES
//GET
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

//POST

// const createNewProject = async (req, res) => {
//     const clientd = req.params.id;
//     const client = req.body;

//     const newClient = new clientsCollection(client)
//     const user = await usersCollection.findById(userId)
//         user.projetos_ativos.push(newClient)
//         user.save((error) => {
//             if (error) {
//                 return res.status(500).send(error)
//             }
    
//             return res.status(201).send(user)
//         })
//     }

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

//UPDATE
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


//DELETE
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
    getAllUsers,
    createNewUser,

    getAllClients,
    createNewClient,

    getAllProjects,
    getProjectById,
    createNewProject,
    updateProjectById,
    removeProjectById
}

//JSON

//newUser
// {
// "nome": "",
// "cau_cre": "",
// "responsavel_tecnico": "",
// "projetos_ativos": "",
// "email": "",
// "telefone": ""
// }

//newClient
// {
// "nome" : "",
// "obra": "",
// "email": "",
// "telefone": 
// "endereco" : "",
// }

//newProject
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