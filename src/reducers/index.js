import comparer from '../utils/helperfunctions';
import { ADD_TODO, REMOVE_TODO, CLEAR_ALL_TODOS, REORDER_TODO } from '../utils/app.constants'
const initialState = [
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
        i: 5,
        title: "Finish work",
        completed: false
    }
];

export function todosReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return [action.type.payload, ...state];
        case REMOVE_TODO:
            return state.filter((todo) => todo.id !== action.type.payload.id);
        // return {};
        case CLEAR_ALL_TODOS:
            return state = [];
        case REORDER_TODO:
            return state.sort(comparer);
        default:
            return state;
    }

}