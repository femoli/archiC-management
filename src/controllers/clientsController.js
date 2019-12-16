const clientsCollection = require('../models/clientsSchema')


//getRoutes

const getAllClients = (req, res) => {
    clientsCollection.find((error, clients) => {
        if (error) {
            return res.status(500).send(error)
        } else {
            return res.status(200).send(clients)
        }
    })
};

//postRoutes

const createNewClient = (req, res) => {
    const clientName = req.body.nome;
    const clientProject = req.body.obra;
    const clientEmail = req.body.email;
    const clientNumber = req.body.telefone;
    const clientAddress = req.body.endereco;
    const client = new clientsCollection({ 
        nome: clientName, 
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