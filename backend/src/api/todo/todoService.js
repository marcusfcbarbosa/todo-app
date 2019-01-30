//Estou configurando os tipos de requisições
const Todo = require('./todo')


Todo.methods(['get','post','put','delete'])

//em operações de atualização, na resposta do mongodb, ele retorne ja o registro atualizado
//nodeRestfull por padrao nao valida as atualizações, deve-se forçar essas validações runValidators: true
Todo.updateOptions({new: true, runValidators: true})


module.exports = Todo