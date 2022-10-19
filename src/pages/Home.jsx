import React from 'react';
import { Categories, SortPopup, PizzaBlock } from '../components';
import { useSelector } from 'react-redux';

function Home() {
  const { items } = useSelector(({ pizzas, filters }) => {
    return {
      items: pizzas.items,
      sortBy: filters.sortBy,
    };
  });
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onCategoryClick={(name) => console.log('name = ', name)}
          // items={[
          //   { name: 'Мясные' },
          //   { name: 'Вегетарианская' },
          //   { name: 'Сырная' },
          //   { name: 'Закрытая' },
          // ]}
          // items={['сыр', '123']}
        />
        <SortPopup
          items={[
            { name: 'популярности', type: 'popularity' },
            { name: 'цене', type: 'price' },
            { name: 'алфавиту', type: 'alphabet' },
          ]}>
          {/* items={['сыр', '123']} */}
        </SortPopup>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items && items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
}

export default Home;
