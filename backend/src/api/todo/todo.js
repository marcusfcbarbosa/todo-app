//mapeamento do objeto para documento do mongo

const restful = require('node-restful')
const mongoose = restful.mongose //para trabalhar em cima de api´s restfull

//ODM = ORM mapeamento de objeto relacional, mapeamento de documento mongo
//Dessa que é o dominio do mongodb
const todoSchema = new mongoose.Schema({
    description :{type: String , required:true},
    done: {type:Boolean, required:true, default:false },
    createAt : {type:Date , default:Date.now}
})


module.exports = restful.model('Todo',todoSchema)