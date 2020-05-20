import {
  backend_url,
  ADD_TODO,
  DELETE_TODO,
  CLEAR_ALL_TODOS,
  REORDER_TODO,
  TOGGLE_TODO,
  GET_TODOS,
} from "./app.constants";

import axios from "axios";

export const getTodos = () => {
  return (dispatch) => {
    axios
      .get(`${backend_url}/todos`)
      .then(({ data }) => {
        dispatch({ type: "GET_TODOS", payload: data });
      })
      .catch((err) =>
        console.error(`Network Error Occured while getting todos: ${err}`)
      );
  };
};

export function toggleTodo(id) {
  return (dispatch) => {
    axios
      .put(`${backend_url}/todo/${id}/completed`)
      .then((res) => {
        dispatch({ type: TOGGLE_TODO, payload: { id } });
      })
      .catch((err) =>
        console.error(
          `Network Error Occured while toggling status of the todo: ${err}`
        )
      );
  };
}

export function addTodo(data) {
  return (dispatch) => {
    axios
      .post(`${backend_url}/todo/new`, { todo: data })
      .then(({ data: { todo } }) => {
        dispatch({ type: ADD_TODO, payload: todo });
      })
      .catch((err) =>
        console.error(`Network Error Occured while adding todo: ${err}`)
      );
  };
}

export function deleteTodo(id) {
  return (dispatch) => {
    axios
      .delete(`${backend_url}/todo/${id}`)
      .then((res) => {
        dispatch({ type: DELETE_TODO, payload: id });
      })
      .catch((err) =>
        console.error(`Network Error Occured while deleting todo: ${err}`)
      );
  };
}

export function clearAllTodos() {
  return (dispatch) => {
    axios
      .delete(`${backend_url}/delete/all`)
      .then((res) => {
        dispatch({ type: CLEAR_ALL_TODOS });
      })
      .catch((err) =>
        console.error(`Network Error Occured while clearing all todos: ${err}`)
      );
  };
}

export function reorderTodos() {
  return { type: REORDER_TODO };
}
