import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import { actionsToStateSnapshot } from 'redux-state-snapshot'
import * as Actions from '../utils/action-creators';
import * as Constants from '../utils/app.constants';
import { todosReducer } from '../reducers/index';
jest.unmock('axios');
import axios from 'axios'

import MockAdapter from 'axios-mock-adapter';

// jest.mock('axios');


const middlewares = [thunk]
const mockStore = configureStore(middlewares);
const store = mockStore({ todos: [] });

describe('async actions', () => {
    beforeEach(() => {
        // store.clearActions();
    })
    afterEach(() => {
        // fetchMock.restore();
    })

    // const mockServiceCreator = (body, succeeds = true) => () =>
    //     new Promise((resolve, reject) => {
    //         setTimeout(() => (succeeds ? resolve(body) : reject(body)), 10);
    //     });

    test('Dispatches the correct action and payload of adding todo item', async () => {
        // console.log(axios)
        const singleTodo = {
            id: 10010,
            title: 'Do something',
            completed: false
        };

        var mock = new MockAdapter(axios);

        // fetchMock.postOnce(`${Constants.backend_url}/todo/new`, {
        //     body: { todo: singleTodo }
        // })

        // axios.get.mockImplementationOnce(() => Promise.resolve(data));
        // mock.post.mockImplementationOnce(() =>
        //     Promise.resolve({ data: mockData }),
        // )

        mock.onPost(`${Constants.backend_url}/todo/new`, {
            id: '10010',
            completed: false,
            title: 'Do something'
        }).reply(200, {
            message: "Todo saved",
            todo: {
                id: "10010",
                title: "Do something",
                completed: false
            }
        });

        const expectedActions = [
            {
                type: Constants.ADD_TODO,
                payload: singleTodo
            },
        ];

        const result = await store.dispatch(Actions.addTodo({ id: 10010, title: 'Do something', completed: false }))
        // .then(() => {})
        const actionss = store.getActions()
        console.log(actionss);
        expect(actionss).toEqual(expectedActions);
    })

    /*const actionStateSnapshot = actionsToStateSnapshot([thunk], { todos: [{ id: 1, completed: false, title: 'ABC' }, { id: 2, completed: false, title: 'DEF' }] })

    test('to snapshot upon adding todo', () => {
        actionStateSnapshot(() => Actions.addTodo({ id: 1, title: 'XYZ', completed: false }), todosReducer)
    })

    test('to snapshot upon getting todo', () => {
        actionStateSnapshot(() => Actions.getTodos(), todosReducer)
    })

    test(('to snapshot upon toggling todo'), () => {
        actionStateSnapshot(() => Actions.toggleTodo(1), todosReducer)
    })

    test(('to snapshot upon delete todo'), () => {
        actionStateSnapshot(() => Actions.deleteTodo(1), todosReducer)
    })

    test(('to snapshot upon clearing all todo'), () => {
        actionStateSnapshot(() => Actions.clearAllTodos(1), todosReducer)
        // console.log(actionStateSnapshot.getState())
    })*/

})