import comparer from '../utils/helperfunctions';
import { ADD_TODO, DELETE_TODO, CLEAR_ALL_TODOS, REORDER_TODO, TOGGLE_TODO } from '../utils/app.constants'
const initialState = {
    todos: [
        {
            id: 1,
            title: "Go workout",
            completed: true
        },
        {
            id: 2,
            title: "Do laundry",
            completed: false
        },
        {
            id: 3,
            title: "Cook food",
            completed: false
        },
        {
            id: 4,
            title: "Clean up room",
            completed: true
        },
        {
            id: 5,
            title: "Finish work",
            completed: false
        }
    ]
};

export function todosReducer(state = initialState, action) {
    console.log(state.todos);
    switch (action.type) {
        case ADD_TODO:
            return { todos: [...state.todos, action.payload] };
        case TOGGLE_TODO:
            // eslint-disable-next-line no-case-declarations
            const newTodos = state.todos.map(todo => {
                if (todo.id === action.payload.id) {
                    const newTodo = { ...todo };
                    newTodo.completed = !newTodo.completed;
                    return newTodo;
                }
                return todo;
            });
            return { todos: newTodos };
        case DELETE_TODO:
            return { todos: state.todos.filter(todo => todo.id !== action.payload.id) };
        case CLEAR_ALL_TODOS:
            return { todos: [] };
        case REORDER_TODO:
            return state.todos.sort(comparer);
        default:
            return state;
    }

}