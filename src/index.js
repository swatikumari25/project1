import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import Reducer from './Reducers/Index';
import App from './App';
import thunk from 'redux-thunk'
import registerServiceWorker from './registerServiceWorker';
const middleware = [ thunk ];

let store = createStore(Reducer, applyMiddleware(...middleware))

ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
