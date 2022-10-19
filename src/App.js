import React from 'react';
//axios needed for more complex requests
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Header } from './components';
import { Home, Cart, NotFoundBlock } from './pages';
import setPizzas from './redux/actions/pizzas';

function App() {
  //const [pizzas, setPizzas] = React.useState([]);
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      dispatch(setPizzas(data.pizzas));
    });
  }
  render() {
    console.log('пропсы= ', this.props);

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

//mapStateToProps means "pick up a state and make it props"
const mapStateToProps = (state) => {
  console.log('mapStateToProps');
  return {
    items: state.pizzas.items,
  };
};

const mapDispatchToProps = {
  setPizzas,  
};
//firstly connect gets two functions:
//first function returns actions and state (mapStateToProps)
//second function tels react what should it take from the store (mapDispatchToProps).
//secondly we choose the app to connect to redux
//In this example it connects App.js to the store

export default connect(mapStateToProps, mapDispatchToProps)(App);
