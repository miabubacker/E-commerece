import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore ,applyMiddleware} from 'redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
 import {rootReducer,defaultReducers} from './reducers/index'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import { makeStore, useStore } from "statery"
import reducers from './reducers/index';
const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(rootReducer,applyMiddleware(thunk));
const history = createBrowserHistory();

root.render(

    <Provider store={store} >
{/* <ConnectedRouter history={history}> */}
<App />
{/* </ConnectedRouter> */}
</Provider>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
