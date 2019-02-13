import React , {Component} from 'react'
import axios from 'axios'//usado para requisições HTTP
//axios é baseado em promisses, ou seja, é assíncrono

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

//Componente por classe
export default class Todo extends Component {
    


    render(){
        return(
            <div>
                <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
                
                <TodoForm/>

                <TodoList/>
            </div>
        )
    }
}
//Como foi conectado o reducer no componente TodoList, nao preciso mais passar o estado para dentro do
//componente  (TodoList) list={this.state.list}
//TodoForm description = { this.state.description }