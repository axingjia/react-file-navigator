import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {Root} from './tree.js';
import { Reducer, initialState } from './reducer';


export const ConfigureStore = () => {
    const store = createStore(
       //  Reducer, // reducer
       // initialState, // our initialState
        // combineReducers({
        //     root:Root
        // }),
        Root,
         applyMiddleware(thunk, logger)
    );

    return store;
}