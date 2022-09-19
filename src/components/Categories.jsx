import React from 'react';
import classNames from 'classnames';
import { useState } from 'react';

function Categories({ items }) {
  const [activeItem, setActiveItem] = useState(null);
  const onCategoryClick = (index) => {
    setActiveItem(index);
  };

  console.log(onCategoryClick);

  return (
    <div className="categories">
      <ul>
        <li>Все</li>
        {items.map((name, index) => (
          <li
            className={activeItem === index ? 'active' : ''}
            onClick={() => onCategoryClick(index)}
            key={`${name}_${index}`}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

// class Categories extends React.Component {
//   state = {
//     activeItem: null,
//     someThingCool: 123,
//   };

//   onSelectItem = (index) => {
//     this.setState({
//       activeItem: index,
//     });
//   };
//   render() {
//     console.log(this.state);
//     const { items, onCategoryClick } = this.props;
//     return (
//       <div className="categories">
//         <ul>
//           <li>Все</li>
//           {items.map((name, index) => (
//             <li
//               className={this.state.activeItem === index ? 'active' : ''}
//               onClick={() => this.onSelectItem(index)}
//               key={`${name}_${index}`}>
//               {name}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

export default Categories;
