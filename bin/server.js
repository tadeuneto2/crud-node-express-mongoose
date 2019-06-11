'use strict';
const http = require('http');
const mongoose = require('mongoose');
const app = require('../src/App');

mongoose.connect("conexao",{useNewUrlParser: true})

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

server.listen(PORT,()=>{
    console.log(`SERVER RUN IN ${PORT}`)
})