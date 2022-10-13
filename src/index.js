import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './scss/app.scss';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
import setPizzas from './redux/actions/pizzas';

store.subscribe(() => {
  console.log('Хранилище изменилось', store.getState());
});

store.dispatch({
  type: 'SET_CATEGORY',
  payload: 2,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
