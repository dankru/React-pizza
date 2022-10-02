import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

function Button({ onClick, children, className, outline }) {
  return (
    <button
      onClick={onClick}
      className={classNames('button', className, {
        'button--outline': outline,
      })}>
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
