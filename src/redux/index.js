import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import resume from './resume';
import invariant from 'redux-immutable-state-invariant';

const client = axios.create({
  baseURL:'http://localhost:8080',
  responseType: 'json'
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

export default history => createStore(
  combineReducers({resume, router: connectRouter(history)}),
  composeEnhancers(applyMiddleware(
    routerMiddleware(history),
    axiosMiddleware(client),
    invariant()
  ))
);
