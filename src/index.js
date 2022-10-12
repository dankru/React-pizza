import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './scss/app.scss';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';

//imported react-redux
//console.log(createStore);
const inc = () => {
  store.dispatch({
    type: 'INCREMENT',
  });
};
store.subscribe(() => {
  console.log('Хранилище изменилось', store.getState());
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
