const usersCollection = require('../models/usersSchema')


//getRoutes

const getAllUsers = (req, res) => {
    usersCollection.find((error, users) => {
        if (error) {
            return res.status(500).send(error)
        } else {
            return res.status(200).send(users)
        }
    })
};

//postRoutes

const createNewUser = (req, res) => {
    const userName = req.body.nome;
    const userLicense = req.body.cau_cre;
    const userManagement = req.body.responsavel_tecnico;
    const userProjects = req.body.projetos_ativos;
    const userNumber = req.body.telefone;
    const userEmail = req.body.email;
    const client = new clientsCollection({ 
        nome: userName, 
        obra: clientProject, 
        email: clientEmail, 
        telefone: clientNumber, 
        endereco: clientAddress })
    client.save((error) => {
        if (error) {
            return res.status(400).send(error)
        } else {
            return res.status(201).send(client)
        }

    })
}

module.exports = {
    getAllClients,
    createNewClient
}