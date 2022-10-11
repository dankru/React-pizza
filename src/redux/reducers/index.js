import { createStore, combineReducers } from 'redux';
import filtersReducer from './filters';
import pizzasReducer from './pizzas';

const rootReducer = combineReducers({
  fitlers: filtersReducer,
  pizzas: pizzasReducer,
});

export default rootReducer;
