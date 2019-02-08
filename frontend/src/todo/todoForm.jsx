import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import Grid from '../template/grid'
import IconButton from '../template/iconButton'
//necessita fazer um binding de changeDescription com TodoForm
//Após o binding o evento changeDescription, aparece dentro das props do Componente
import { changeDescription } from './todoActions'

const TodoForm = props => {
    const keyHandler = (e) => {
        if (e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }

    return (
        <div role='form' className='todoForm'>
            <Grid cols='12 9 10'>
                <input id='description' className='form-control'
                    placeholder='Adicione uma tarefa'
                    onChange={ props.changeDescription}//Esse método foi criado la na Action Creator
                    onKeyUp={ keyHandler}
                    value= { props.description } ></input>
            </Grid>
            <Grid cols='12 3 2'>
                <IconButton style='primary' icon='plus'
                    onClick={props.handleAdd}></IconButton>
                <IconButton style='info' icon='search'
                    onClick={props.handleSearch}></IconButton>
                <IconButton style='default' icon='close'
                    onClick={props.handleClear}></IconButton>
            </Grid>
        </div>
    )
}
//1- criar o método que vai mapear o estado do Redux, com as propriedades do meu componente
const mapStateToProps = state =>({
    description: state.todo.description
})

// 2- darum binding com o Action Creator changeDescription
//dispatch = é quem dispara as ações
const mapDispatchToPropos = dispatch => bindActionCreators(
    { changeDescription },
    dispatch)
export default connect(mapStateToProps,mapDispatchToPropos)(TodoForm)