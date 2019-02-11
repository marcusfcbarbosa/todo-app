import React from 'react'
import ReactDOM from 'react-dom'

import { createStore , applyMiddleware } from  'redux' //applyMiddleware para trabalhar com requisições assincronas dentro do Action Creator
import { Provider } from 'react-redux'

import  promise from 'redux-promise'//promise para trabalhar com requisições assincronas dentro do Action Creator
import multi from 'redux-multi'//Essa lib é usada para que a partir de um unico ActionCreator, seja disparada mais de uma Action
import thunk from 'redux-thunk'

import App from './main/app'
import reducers from   './main/reducers'

//dessa forma você consegue debugar os arquivos de reducers
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()

//agora o store contem o midleware para aplicaççoes promisses dentro da Action
//promise é o midleware necessario para se trabalhar com request assincronos dentro da store
//multi retorna um array de actions
const store = applyMiddleware(thunk,multi,promise)(createStore)(reducers,devTools)

ReactDOM.render(
    <Provider store={store}>
            <App />
    </Provider>
    , document.getElementById('app'))