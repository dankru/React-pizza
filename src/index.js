import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import './scss/app.scss';
import App from './App';

//imported react-redux
//console.log(createStore);
console.log(store.getState());
store.subscribe(() => {
  console.log('store state has changed', store.getState());
});
const inc = () => {
  store.dispatch({
    type: 'INCREMENT',
  });
};

store.dispatch({
  type: 'SET_SORT_BY',
  payload: 'price',
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <button onClick={inc}>+1</button>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
