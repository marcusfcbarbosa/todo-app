import React , {Component} from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

//Componente por classe
export default class Todo extends Component{

    constructor(props){
        super(props)
            this.handleAdd = this.handleAdd.bind(this)//Dessa forma o this, irá esta vinculado ao contexto de quem o chama
    }
    
    //a principio o this esta null
    handleAdd(){
        console.log(this);
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