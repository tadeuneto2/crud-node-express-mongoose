'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {type: String, required: true, trim: true},
    email: {type: String, unique: true, required: true, trim: true},
    cep: {type: Number, required: true, trim: true},
    bank: {type: mongoose.Schema.Types.ObjectId, ref:'BankAgency'},
    active: {type: Boolean, required:true, default: true}
})

module.exports = mongoose.model('Users', schema);