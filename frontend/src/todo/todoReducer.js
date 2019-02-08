const INITIAL_STATE = {
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
}
//Um reducer sempre recebe o estado atual e uma action
export default (state = INITIAL_STATE, action ) =>{
    switch(action.type){
        case 'DESCRIPTION_CHANGED':
            return { ...state , description: action.payload }
        default:
            return state
    }
}