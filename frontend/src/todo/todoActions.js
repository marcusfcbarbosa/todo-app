//lib para requisições http
import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'


//evento do TodoForm
export const changeDescription = event => ({
    type:'DESCRIPTION_CHANGED',
    payload: event.target.value
})

// O axios, é uma função assincrona, dessa forma necessita do .then
// axios.get(`${URL}?sort=-createdAt`)
//             .then(resp => this.setState({...this.state, description, list: resp.data}))
// A Action é uma função sincrona, entao para que ele tenha acesso ao ".data" necessita de um middleware

export const search = () =>{
    const request = axios.get(`${URL}?sort=-createdAt`)
    return{
        type:'TODO_SEARCH',
        payload:request
    }
}


//essa Action retorna um array com duas actions usando a Lib "multi"
export const add =(description) =>{
    const request = axios.post(URL,{ description })
    return [
        {type:'TODO_ADDED',payload:request},
        search()
    ]
}

//A lib redux-thunk, faz a actionCreator retornar um método, que recebe como parametro um dispatch
//Dessa froma, foram duas lib, multi(redux-multi) e promisse(redux-promisse)
export const addComThunk =(description) =>{
    return dispatch =>{
        axios.post(URL,{ description })
            .then(resp => dispatch({type:'TODO_ADDED', payload : resp.data }))
            .then(resp => dispatch(search()))
    }
}