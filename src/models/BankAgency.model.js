'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    bank: {type: String, required: true, trim: true},
    agency: {type: Number, required: true, trim: true},
    address: {type: String, required: true, trim: true},
    active: {type: Boolean, required:true, default: true}
})

module.exports = mongoose.model('BankAgency', schema);