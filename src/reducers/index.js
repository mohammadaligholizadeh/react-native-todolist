import { combineReducers } from 'redux';
import todo from './reducer';
import nav from './nav';

const combine = combineReducers({
    todo,
    nav,
});

export default combine;