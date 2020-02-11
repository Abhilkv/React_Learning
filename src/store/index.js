import {createStore, combineReducers } from 'redux';
import gameReducer from '../reducers/gameReducer';
import nameReducer from '../reducers/nameReducer';


const AllReducers = combineReducers({game: gameReducer, name: nameReducer})

const InitialState = {
    game: {name: 'Football'},
    name: {name: 'Abhil'}
}

const store = createStore(AllReducers, InitialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() ) 


export default store; 