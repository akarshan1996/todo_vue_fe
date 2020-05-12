import { createStore } from 'redux'
import { todosReducer } from '../reducers/index'

export default createStore(todosReducer);
