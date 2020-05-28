import { createSelector } from 'reselect';
import { comparer } from './helperfunctions';

const todosSelector = state => state.todos;

export const getSortedTodosSelector = createSelector([todosSelector], todos => todos.sort(comparer));