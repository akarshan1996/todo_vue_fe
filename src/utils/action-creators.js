import { ADD_TODO, DELETE_TODO, CLEAR_ALL_TODOS, REORDER_TODO, TOGGLE_TODO } from './app.constants'

export function addTodo(payload) {
    return { type: ADD_TODO, payload };
}
export function deleteTodo(payload) {
    return { type: DELETE_TODO, payload: { id: payload } };
}
export function toggleTodo(payload) {
    return { type: TOGGLE_TODO, payload: { id: payload } };
}
export function clearAllTodos() {
    return { type: CLEAR_ALL_TODOS };
}
export function reorderTodos() {
    return { type: REORDER_TODO };
}