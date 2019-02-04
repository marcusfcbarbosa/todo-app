import React , {Component} from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'


//Componente por classe
export default class Todo extends Component{

    handleAdd(){
        console.log('ok');
    }

    render(){
        return(
            <div>
                <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
                <TodoForm handleAdd ={this.handleAdd}/>
                <TodoList />
            </div>
        )
    }
}