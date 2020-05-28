import { todosReducer } from '../reducers/index';
import * as Constants from '../utils/app.constants';

describe('Reducers', () => {
    const initialState = { todos: [] };

    const initialStateTodos = {
        todos: [{
            id: 1,
            title: 'ABC',
            completed: false
        }, {
            id: 2,
            title: 'DEF',
            completed: false
        }, {
            id: 3,
            title: 'GHI',
            completed: false
        }]
    };
    test('Initial state is correct', () => {
        const action = { type: 'RANDOM_ACTION' };

        expect(todosReducer(undefined, action)).toEqual(initialState);
    });

    test('Adding todo state is correct', () => {
        const singleTodo = {
            id: 4,
            title: 'XYZ',
            completed: false
        };
        const action = { type: Constants.ADD_TODO, payload: singleTodo };
        expect(todosReducer(initialStateTodos, action)).toEqual({ todos: [...initialStateTodos.todos, singleTodo] });
    });

    test('Getting todos state is correct', () => {
        const action = { type: Constants.GET_TODOS, payload: initialStateTodos.todos };
        expect(todosReducer(initialState, action)).toEqual(initialStateTodos);
    });

    test('Toggle todo state is correct', () => {
        const id = { id: 1 };
        const afterTogglingState = {
            todos: [{
                id: 1,
                title: 'ABC',
                completed: true
            }, {
                id: 2,
                title: 'DEF',
                completed: false
            }, {
                id: 3,
                title: 'GHI',
                completed: false
            }]
        };
        const action = { type: Constants.TOGGLE_TODO, payload: id };

        expect(todosReducer(initialStateTodos, action)).toEqual(afterTogglingState);
    });

    test('Deleting todos state is correct', () => {
        const id = { id: 1 }
        const afterDeletingState = {
            todos: [{
                id: 2,
                title: 'DEF',
                completed: false
            }, {
                id: 3,
                title: 'GHI',
                completed: false
            }]
        };
        const action = { type: Constants.DELETE_TODO, payload: id };

        expect(todosReducer(initialStateTodos, action)).toEqual(afterDeletingState);
    });

    test('Clearing all todos state is correct', () => {
        const action = { type: Constants.CLEAR_ALL_TODOS };
        expect(todosReducer(initialStateTodos, action)).toEqual(initialState);
    });

});