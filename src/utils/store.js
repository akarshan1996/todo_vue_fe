import { createStore, applyMiddleware } from 'redux'
import { todosReducer } from '../reducers/index'
import { createLogger } from 'redux-logger'
const composeEnhancers = (process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__);

let middlewares = [];

const logger = createLogger({

});
// const middleware = [thunk, routerMiddleware(history)];
if (process.env.NODE_ENV === 'development') {
    console.log('In development mode')
    middlewares.push(logger);
}
const store = createStore(todosReducer, composeEnhancers(applyMiddleware(...middlewares)));

export default store