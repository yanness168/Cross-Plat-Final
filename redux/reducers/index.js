import { combineReducers, createStore } from 'redux';
import workingList from './workingList'

export const rootReducer = combineReducers({
    changeList: workingList,
});

export const store = createStore(rootReducer);