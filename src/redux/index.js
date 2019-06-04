import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import resume from './resume';

const client = axios.create({
  baseURL:'http://localhost:8080',
  responseType: 'json'
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

const store = createStore(
  combineReducers({resume}), //custom reducers
  composeEnhancers(applyMiddleware(
    axiosMiddleware(client)
  ))
);

export default store;
