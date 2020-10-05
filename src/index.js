import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer from './store/reducer';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { watchAgeUp } from './sagas/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchAgeUp);

// Like watchAgeUp we can create many other generator functions in root saga only thing required is to run them
// inside sagaMiddleware.run() at root index.js file

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

 