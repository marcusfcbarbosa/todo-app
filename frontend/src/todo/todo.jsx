import React , {Component} from 'react'
import axios from 'axios'//usado para requisições HTTP
//axios é baseado em promisses, ou seja, é assíncrono

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

//Componente por classe
export default class Todo extends Component{

    constructor(props){
        super(props)
            this.state = { description:'', list:[] }

            this.handleAdd = this.handleAdd.bind(this)//Dessa forma o this, irá esta vinculado ao contexto de quem o chama
            this.handleChange = this.handleChange.bind(this)
    }
    
    
    handleAdd(){
        const description = this.state.description
        axios.post(URL,{description})
            .then(resp => console.log('Funcionou!!'))
    }

    handleChange(event){//evento
            this.setState({ ...this.state, description: event.target.value })
            //pega, clona o estado (que contém a description e a list e atribui a description ao event.taget.value)
    }

    render(){
        return(
            <div>
                <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
                <TodoForm
                    description = { this.state.description }
                    handleAdd ={this.handleAdd}
                    handleChange={this.handleChange}
                />
                <TodoList />
            </div>
        )
    }
}