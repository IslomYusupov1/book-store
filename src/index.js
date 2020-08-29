import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app";
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import ErrorBoundry from "./components/error-boundry";
import BookstoreService from "./services/bookstore-service";
import {BookstoreServiceProvider} from "./components/bookstore-service-context";

import store from "./store";


// import { configureFakeBackend } from './helpers/fake-backand';
// configureFakeBackend();
//
const bookstoreService = new BookstoreService();


// const saveState = (state) => {
//     if(state.favorites.length !== 0){
//         localStorage.setItem("state", JSON.stringify(state));
//     }
// };
//
// const getState = () => {
//     console.log("get unitial state!!!");
//     try{
//         const s = localStorage.getItem("state");
//
//         console.log("Getting state, ",s);
//         if (s  === null) return undefined;
//         return JSON.parse(s);
//     }catch(e){
//         return undefined;
//     }
// };
//
// const initialState = getState();
// const store = createStore(rootReducer,initialState, applyMiddleware(thunk));
// store.dispatch(fetchData());
//
// store.subscribe(()=>{
//     saveState({
//         favorites: store.getState().favorites
//     })
// })

ReactDOM.render (
  <Provider store={store}>
      <ErrorBoundry>
          <BookstoreServiceProvider value={bookstoreService}>
              <Router>
                  <App/>
              </Router>
          </BookstoreServiceProvider>
      </ErrorBoundry>
  </Provider>,
    document.getElementById('root')
);