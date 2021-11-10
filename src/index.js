import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import callRootreducer from './Reducers/index';
import { createStore,applyMiddleware } from 'redux';
import reduxthunk from 'redux-thunk';
import react from 'react';
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
export const StoreContext = createContext();
class Provider extends react.Component{
  render()
  {
    const stores = this.props.store;
   return (<StoreContext.Provider value = {stores}>
    {this.props.children}
    </StoreContext.Provider>
  )
  }
}
ReactDOM.render(
    <Provider store = {store}>
    <App/>
    </Provider>
  ,document.getElementById('root')
);
