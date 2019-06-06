import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import axios from 'axios';
import { axiosMiddleware } from 'redux-axios-middleware';
import { routerMiddleware, routerReducer as routing } from 'react-router-redux';
import resume from './resume';

const client = axios.create({
  baseURL:'http://localhost:8080',
  responseType: 'json'
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line


const middlewares = history => [
  routerMiddleware(history),
  axiosMiddleware(client),
];

const storeProvider = history => createStore(
  combineReducers({resume, routing}), //custom reducers
  composeEnhancers(applyMiddleware(
    ...middlewares(history)
  ))
);

export default storeProvider;
