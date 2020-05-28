import {
  ADD_TODO,
  DELETE_TODO,
  CLEAR_ALL_TODOS,
  REORDER_TODO,
  TOGGLE_TODO,
  GET_TODOS,
} from "../utils/app.constants";
const initialState = {
  todos: [
    {
      id: 1,
      title: "Go workout",
      completed: true,
    },
    {
      id: 2,
      title: "Do laundry",
      completed: false,
    },
    {
      id: 3,
      title: "Cook food",
      completed: false,
    },
    {
      id: 4,
      title: "Clean up room",
      completed: true,
    },
    {
      id: 5,
      title: "Finish work",
      completed: false,
    },
  ],
};

export function todosReducer(state = { todos: [] }, action) {
  console.log(action.payload);
  switch (action.type) {
    case GET_TODOS:
      return { todos: [...action.payload] };
    case ADD_TODO:
      return { todos: [...state.todos, action.payload] };
    case TOGGLE_TODO:
      // eslint-disable-next-line no-case-declarations
      const newTodos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          const newTodo = { ...todo };
          newTodo.completed = !newTodo.completed;
          return newTodo;
        }
        return todo;
      });
      return { todos: newTodos };
    case DELETE_TODO:
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    case CLEAR_ALL_TODOS:
      return { todos: [] };
    default:
      return state;
  }
}
