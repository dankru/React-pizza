import React from 'react';
//axios needed for more complex requests
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Header } from './components';
import { Home, Cart, NotFoundBlock } from './pages';
import setPizzas from './redux/actions/pizzas';

function App() {
  //const [pizzas, setPizzas] = React.useState([]);
  const dispatch = useDispatch();
  const { items } = useSelector(({ pizzas, filters }) => {
    return {
      items: pizzas.items,
      sortBy: filters.sortBy,
    };
  });
  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      dispatch(setPizzas(data.pizzas));
    });
  }, []);

  return (
    <div className="wrapper">
      <Header></Header>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home items={items} />} />
          <Route path="/not-found" element={<NotFoundBlock />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
