import React , {Component} from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

//Componente por classe
export default class Todo extends Component{

    constructor(props){
        super(props)
            this.state = { description:'', list:[] }

            this.handleAdd = this.handleAdd.bind(this)//Dessa forma o this, irá esta vinculado ao contexto de quem o chama
            this.handleChange = this.handleChange.bind(this)
    }
    
    //a principio o this esta null
    handleAdd(){
        console.log(this.state.description);
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