import React ,  { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
//necessita fazer um binding de changeDescription com TodoForm
//Após o binding o evento changeDescription, aparece dentro das props do Componente
import { changeDescription, search } from './todoActions'

class TodoForm extends Component {
    constructor(props){
        super(props)

        //Ao colocar o this, você garante que ele sempre vai apontar para a referencia da classe        
        this.keyHandler = this.keyHandler.bind(this)
        
    }

    //esse é o equivalente a document.ready do react
    componentWillMount(){
        this.props.search()
    }

    keyHandler(e){
        if (e.key === 'Enter') {
            e.shiftKey ? this.props.handleSearch() : this.props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }

   render(){
       return(
        <div role='form' className='todoForm'>
                    <Grid cols='12 9 10'>
                        <input id='description' className='form-control'
                            placeholder='Adicione uma tarefa'
                            onChange={ this.props.changeDescription}//Esse método foi criado la na Action Creator
                            onKeyUp={ this.keyHandler}
                            value= { this.props.description } ></input>
                    </Grid>
                    <Grid cols='12 3 2'>
                            <IconButton style='primary' icon='plus'
                            onClick={this.props.handleAdd}></IconButton>
                        <IconButton style='info' icon='search'
                            onClick={this.props.handleSearch}></IconButton>
                        <IconButton style='default' icon='close'
                            onClick={ this.props.handleClear}></IconButton>
                    </Grid>
        </div>

       )
        
    }
}


//1- criar o método que vai mapear o estado do Redux, com as propriedades do meu componente
const mapStateToProps = state =>({
    description: state.todo.description
})

// 2- darum binding com o Action Creator changeDescription
//dispatch = é quem dispara as ações
const mapDispatchToPropos = dispatch => bindActionCreators(
    { changeDescription, search },
    dispatch)
export default connect(mapStateToProps,mapDispatchToPropos)(TodoForm)