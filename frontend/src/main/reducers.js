import { combineReducers } from  'redux'




const RootReducer = combineReducers({
    todo: ()=>({
        description:'Teste 1',
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