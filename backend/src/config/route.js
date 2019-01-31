//express é singleton
const express = require('express')


module.exports = function(server){
    //Api Routes
    const router = express.Router()
    server.use('/api',router)//Middleware, especifico para para url´s que começam com /api

    //Rotas de TODO
    const todoService = require('../api/todo/todoService')
    todoService.register(router,'/todos')

}