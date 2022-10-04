import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import './scss/app.scss';
import App from './App';

//console.log(createStore);
//added redux lib

function counter(state = 0, action) {
  // if (action.type === 'INCREMENT') {
  //   return state + 1;
  // }
  // return state;
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}
let store = createStore(counter);

console.log('store', store);
store.subscribe(() => console.log('store state changed', store.getState()));
console.log(store.state);
store.dispatch({ type: 'INCREMENT' });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    ,
  </React.StrictMode>,
);
