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

//postRoutes

const createNewProject = (req, res) => {
    const projectName = req.body.obra;
    const projectClient = req.body.cliente;
    const project = new projectsCollection({ obra: projectName, cliente: projectClient })
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