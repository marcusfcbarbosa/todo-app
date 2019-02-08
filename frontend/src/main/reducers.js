import { combineReducers } from  'redux'
import  todoReducer from  '../todo/todoReducer' 

//A principio o estado que esta no Reducer se encontra fixo
const RootReducer = combineReducers({
    todo: todoReducer
})

export default RootReducer