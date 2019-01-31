//start o servidor e aloca uma porta
const port =3003

const bodyParser = require('body-parser')//Parser do corpo da requisição, sumbit, json
const express = require('express')//servidor que roda em cima do node.js
const server = express()//baseado em um padrao chain of responsability

server.use(bodyParser.urlencoded({extended: true }))//middleware para requisições submit
server.use(bodyParser.json())//para requisições com corpo serializados em json
server.listen(port, function(){
    console.log(`BACKEND is running on port ${port}`)
})


module.exports = server