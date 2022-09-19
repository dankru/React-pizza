import React from 'react';

function Test({ className, onCategoryClick, children }) {
  console.log(onCategoryClick);
  return <div>{children}</div>;
}

export default Test;
