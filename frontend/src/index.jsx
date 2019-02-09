import React from 'react'
import ReactDOM from 'react-dom'

import { createStore , applyMiddleware } from  'redux' //applyMiddleware para trabalhar com requisições assincronas dentro do Action Creator
import { Provider } from 'react-redux'

import  promise from 'redux-promise'//promise para trabalhar com requisições assincronas dentro do Action Creator

import App from './main/app'
import reducers from   './main/reducers'

//dessa forma você consegue debugar os arquivos de reducers
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()

//agora o store contem o midleware para aplicaççoes promisses dentro da Action
const store = applyMiddleware(promise)(createStore)(reducers,devTools)

ReactDOM.render(
    <Provider store={store}>
            <App />
    </Provider>
    , document.getElementById('app'))
