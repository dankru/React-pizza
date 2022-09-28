import React from 'react';
import { Categories, SortPopup, PizzaBlock } from '../components';

function Home() {
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onCategoryClick={(name) => console.log('name = ', name)}
          items={['Мясные', 'Вегетарианская', 'Сырная', 'Закрытая']}
        />
        <SortPopup items={['популярности', 'цене', 'алфавиту']}></SortPopup>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        <PizzaBlock></PizzaBlock>
        <PizzaBlock></PizzaBlock>
        <PizzaBlock></PizzaBlock>
        <PizzaBlock></PizzaBlock>
      </div>
    </div>
  );
}

export default Home;
