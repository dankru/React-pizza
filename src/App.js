import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from './components';
import { Home, Cart, NotFoundBlock } from './pages';

function App() {
  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:3000/db.json')
      .then((responce) => responce.json())
      .then((json) => {
        setPizzas(json.pizzas);
      });
  }, []);

  console.log(pizzas);

  return (
    <div className="wrapper">
      <Header></Header>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/not-found" element={<NotFoundBlock />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
