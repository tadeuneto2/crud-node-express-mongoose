'use strict'

const mongoose = require("mongoose")
const Users = mongoose.model('Users')

exports.get = (req, res) => {
    Users.find({active:true}, 'name email cep bank')
    .populate('bank', "bank agency address")
    .then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        res.status(400).json({
            message: "Erro ao retornar requisição!",
            erro: error
        })
    })
}

exports.post = (req, res) =>{
    let users = new Users(req.body)
    users.save()
    .then(response => {
        res.status(200).json({message:"Usuário cadastrado com sucesso!"})
    })
    .catch(error => {
        res.status(400).json({
            message: "Erro ao cadatrar usuário!",
            erro: error
        })
    })
}

exports.put = (req, res, next) => {
    Users
        .findByIdAndUpdate(req.params.id, {
            $set: {
                "name": req.body.name,
                "email": req.body.email,
                "cep": req.body.cep,
                "bank": req.body.bank,
            }
        })
        .then(response => {
            res.status(201).send({ message: 'Usuário atualizado com sucesso!' })
        })
        .catch(error => {
            res.status(400).send({ message: 'Erro ao atualizar o usuário', erro: error })
        })
}

exports.delete = (req, res, next) => {
    Users
        .findOneAndRemove(req.params.id)
        .then(response => {
            res.status(201).send({ message: 'Usuário removido com sucesso!' })
        })
        .catch(error => {
            res.status(400).send({ message: 'Erro ao remover o Usuário', erro: error })
        })
}