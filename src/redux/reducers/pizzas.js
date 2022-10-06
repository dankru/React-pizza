const initialState = {
  items: [],
  isLoaded: 
};

const pizzas = (state = initialState, action) => {
  if (action.type === 'SET_PIZZAS') {
    return {
      ...state,
      items: action.payload,
    };
  }
  return state;
};
