import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import callRootreducer from './Reducers/index';
import { createStore,applyMiddleware } from 'redux';
import reduxthunk from 'redux-thunk';
const logger = ({dispatch,getState})=>(next)=>(action)=>{
  console.log('ACTION TYPE :',action.type);
  next(action);
}
const thunk = ({dispatch,getState})=>(next)=>(action)=>{
  if(typeof action ==='function'){
    action(dispatch);
    return;
  }
  next(action);
}
const store = createStore(callRootreducer,applyMiddleware(logger,thunk));
ReactDOM.render(
  <React.StrictMode>
    <App store = {store} />
  </React.StrictMode>,
  document.getElementById('root')
);
