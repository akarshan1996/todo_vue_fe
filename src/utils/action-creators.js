import {
  backend_url,
  ADD_TODO,
  DELETE_TODO,
  CLEAR_ALL_TODOS,
  TOGGLE_TODO,
  GET_TODOS,
} from "./app.constants";
import axios from "axios";

export function getTodos() {
  return (dispatch, ) => {
    return axios
      .get(`${backend_url}/todos`)
      .then(({ data }) => {
        dispatch({ type: GET_TODOS, payload: data });
      })
      .catch((err) =>
        console.error(`Network Error Occured while getting todos: ${err}`)
      );
  };
}

export function toggleTodo(id) {
  return (dispatch, ) => {
    return axios
      .put(`${backend_url}/todo/${id}/completed`)
      .then(() => {
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
  return async (dispatch, ) => {
    return axios
      .post(`${backend_url}/todo/new`, { todo: data })
      .then(({ data: { todo } }) => {
        console.log('inside add todo', todo)
        dispatch({ type: ADD_TODO, payload: todo });
        return data;
      })
      .catch((err) => {
        console.error(`Network Error Occured while adding todo: ${err}`)
        return err;
      })
  }
}

export function deleteTodo(id) {
  return (dispatch, ) => {
    return axios
      .delete(`${backend_url}/todo/${id}`)
      .then(() => {
        dispatch({ type: DELETE_TODO, payload: { id } });
      })
      .catch((err) =>
        console.error(`Network Error Occured while deleting todo: ${err}`)
      );
  };
}

export function clearAllTodos() {
  return (dispatch, ) => {
    return axios
      .delete(`${backend_url}/delete/all`)
      .then(() => {
        dispatch({ type: CLEAR_ALL_TODOS });
      })
      .catch((err) =>
        console.error(`Network Error Occured while clearing all todos: ${err}`)
      );
  };
}
