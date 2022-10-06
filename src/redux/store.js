import { createStore } from 'redux';
import filtersReducer from './reducers/filters';

function counter(state = 0, action) {
  // if (action.type === 'INCREMENT') {
  //   return state + 1;y
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

const store = createStore(counter);

export default store;
