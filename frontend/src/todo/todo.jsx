import React , {Component} from 'react'
import axios from 'axios'//usado para requisições HTTP
//axios é baseado em promisses, ou seja, é assíncrono

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

//Componente por classe
export default class Todo extends Component {
    constructor(props){
        super(props)
            this.state = { description:'', list:[] }

            this.handleAdd = this.handleAdd.bind(this)//Dessa forma o this, irá esta vinculado ao contexto de quem o chama
            this.handleChange = this.handleChange.bind(this)
            this.handleRemove = this.handleRemove.bind(this)
            this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
            this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
            this.handleSearch = this.handleSearch.bind(this)
            this.handleClear = this.handleClear.bind(this)
            this.refresh()
    }
    
    refresh(description = '') {
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => this.setState({...this.state, description, list: resp.data}))
    }

    handleMarkAsDone(todo){
        axios.put(`${URL}/${todo._id}`, { ...todo, done:true })
        .then(resp => this.refresh(this.state.description))
    }


    handleMarkAsPending(todo){
        axios.put(`${URL}/${todo._id}`, { ...todo, done:false })
        .then(resp => this.refresh(this.state.description))
    }

    handleSearch(){
        this.refresh(this.state.description)
    }
    handleClear(){
        this.refresh()
    }
    handleRemove(todo){
            axios.delete(`${URL}/${todo._id}`)
                .then(resp => this.refresh(this.state.description))
    }

    handleAdd(){
        const description = this.state.description
        axios.post(URL,{description})
            .then(resp => this.refresh())
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
                    
                    handleAdd = {this.handleAdd}
                    handleChange= {this.handleChange}
                    handleSearch = {this.handleSearch}
                    handleClear = {this.handleClear}
                />

                <TodoList
                    
                    handleRemove= {this.handleRemove}
                    handleMarkAsDone = {this.handleMarkAsDone}
                    handleMarkAsPending = {this.handleMarkAsPending}
                />
            </div>
        )
    }
}
//Como foi conectado o reducer no componente TodoList, nao preciso mais passar o estado para dentro do
//componente  (TodoList) list={this.state.list}
//TodoForm description = { this.state.description }