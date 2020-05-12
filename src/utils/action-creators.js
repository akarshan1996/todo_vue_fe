import { ADD_TODO, REMOVE_TODO, CLEAR_ALL_TODOS, REORDER_TODO } from './app.constants'

export function addTodo(payload) {
    return { type: ADD_TODO, payload };
}
export function removeTodo(payload) {
    return { type: REMOVE_TODO, payload };
}
export function clearTodos() {
    return { type: CLEAR_ALL_TODOS };
}
export function reorderTodos() {
    return { type: REORDER_TODO };
}