import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { createStore } from "redux";
import appReducer from "./redux/reducers";


//O Provider é o responsável
// por dizer qual vai ser a nossa store dentro do código reactjs.

const store = createStore(appReducer);

//store.dispatch({type:"SET_TEXT"});
//console.log(store.getState());

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, document.getElementById('root'));