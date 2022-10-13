const initialState = {
  items: [],
  isLoaded: false,
};

const setPizzas = (items = initialState) => ({
  type: 'SET_PIZZAS',
  payload: items,
});

export default setPizzas;
