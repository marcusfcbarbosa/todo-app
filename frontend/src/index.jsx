import React from 'react'
import ReactDOM from 'react-dom'

import { createStore } from  'redux'
import { Provider } from 'react-redux'

import App from './main/app'
import reducers from   './main/reducers'

//dessa forma você consegue debugar os arquivos de reducers
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(reducers,devTools)//esse é o objeto estado da aplicação

ReactDOM.render(
    <Provider store={store}>
            <App />
    </Provider>
    , document.getElementById('app'))
