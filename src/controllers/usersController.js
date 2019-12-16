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
    const user = new usersCollection({
        nome: userName,
        cau_cre: userLicense,
        responsavel_tecnico: userManagement,
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
}

module.exports = {
    getAllUsers,
    createNewUser
}

//json pro postman
// "nome": "",
// "cau_cre": "",
// "responsavel_tecnico": "",
// "projetos_ativos": "",
// "email": "",
// "telefone": ""