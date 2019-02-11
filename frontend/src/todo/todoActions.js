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

export const add =(description) =>{
    const request = axios.post(URL,{ description })
    return{
        type:'TODO_ADDED',
        payload:request
    }
}