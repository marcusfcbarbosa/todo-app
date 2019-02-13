import React  from 'react'

import { connect } from 'react-redux'//conecta esse componente com a Store e com as Actions
import { bindActionCreators } from 'redux'

import IconButton from '../template/iconButton'
import { markAsDone,markAsPending,remove } from './todoActions'


const TodoList = props =>{

    const renderRows =() =>{
        const list = props.list || []
        //foreach de uma lista
        return list.map(todo =>(
                <tr key={todo._id}>
                    <td className={ todo.done ? 'markedAsDone': '' }> {todo.description}</td>
                    <td> 
                        
                        <IconButton style='success' icon='check' hide={todo.done}
                                onClick={()=>props.markAsDone(todo)}
                            />
                        
                        <IconButton style='warning' icon='undo' hide={!todo.done}
                                onClick={()=>props.markAsPending(todo)}
                            />
                        
                        <IconButton style='danger' icon='trash-o' hide={!todo.done}
                            onClick={()=>props.remove(todo)}
                        />
                    </td>
                </tr>
        ))
    }
    return (
        <table className="table">
            <thead>
                <tr>
                    <th> Descrição</th>
                    <th className="tableActions"> Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>   
    )
}

// 1- criar um método que vai mapear o estado do Redux, com as propriedades do meu objeto
//do estado, somente pego a lista, pois nesse componente só me interessa ela
const mapStateToProps = state =>({
    list: state.todo.list
})

const mapDispatchToPropos = dispatch => bindActionCreators(
    { markAsDone,markAsPending ,remove},
    dispatch)
export default connect(mapStateToProps,mapDispatchToPropos)(TodoList)