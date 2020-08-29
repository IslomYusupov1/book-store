// import { createStore, compose, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
//
//
// import { combineReducers } from 'redux';
// import {reducer as formReducer} from 'redux-form'
//
// import booksReducer from './reducers/books-reducer';
//
// const rootReducer = combineReducers({
//     form: formReducer,
//     booksReducer,
//
// });
//
//
//
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//
// const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
//
// export default store;

import {createStore} from 'redux';
// import {combineReducers} from "redux";
// import {reducer as formReducer} from 'redux-form'
import {booksReducer} from './reducers/books-reducer'
//
// const rootReducer = combineReducers({
//     form: formReducer,
//     booksReducer
// });


const store = createStore(booksReducer);

export default store;


