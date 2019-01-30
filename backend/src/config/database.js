//iremos configurar a conexão com mongodb
const mongoose = require('mongoose')//serve para mapeamentos de objetos em javascript , e abrir uma conexão com o mongodb CRUD
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/todo')//nome do banco será todo