'use strict'

const mongoose = require("mongoose")
const BankAgency = mongoose.model('BankAgency')

exports.get = (req, res) => {
    BankAgency.find({active:true}, 'bank agency address')
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
    let bankAgency = new BankAgency(req.body)
    bankAgency.save()
    .then(response => {
        res.status(200).json({message:"Banco cadastrado com sucesso!"})
    })
    .catch(error => {
        res.status(400).json({
            message: "Erro ao cadatrar banco!",
            erro: error
        })
    })
}

exports.put = (req, res, next) => {
    BankAgency
        .findByIdAndUpdate(req.params.id, {
            $set: {
                "bank": req.body.bank,
                "agency": req.body.agency,
                "address": req.body.address
            }
        })
        .then(response => {
            res.status(201).send({ message: 'Banco atualizado com sucesso!' })
        })
        .catch(error => {
            res.status(400).send({ message: 'Erro ao atualizar o banco', erro: error })
        })
}

exports.delete = (req, res, next) => {
    BankAgency
        .findOneAndRemove(req.params.id)
        .then(response => {
            res.status(201).send({ message: 'Banco removido com sucesso!' })
        })
        .catch(error => {
            res.status(400).send({ message: 'Erro ao remover o banco', erro: error })
        })
}