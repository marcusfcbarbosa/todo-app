import React , {Component} from 'react'
//axios é baseado em promisses, ou seja, é assíncrono

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default props =>(
<div>
                <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
                
                <TodoForm/>

                <TodoList/>
</div>

)


