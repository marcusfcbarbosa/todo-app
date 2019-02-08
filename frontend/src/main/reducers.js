import { combineReducers } from  'redux'

//A principio o estado que esta no Reducer se encontra fixo
const RootReducer = combineReducers({
    todo: ()=>({
        description:'Lendo o que esta dentro do Reducer',
        list:[{
            _id:1,
            description:'Teste 1.1',
            done:true
        },{
            _id:2,
            description:'Teste 1.2',
            done:false
        },{
            _id:3,
            description:'Teste 1.3',
            done:true
        },
    ]
    })
})

export default RootReducer