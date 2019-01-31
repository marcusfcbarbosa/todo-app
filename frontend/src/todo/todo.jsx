import React , {Component} from 'react'
import PageHeader from '../template/pageHeader'

//Componente por classe
export default class Todo extends Component{
    render(){
        return(
            <div>
                <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
            </div>
        )
    }
}