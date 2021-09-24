import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

function Button(props) {
  const { text, onClick } = props;
  return (
    <button className={styles['button']} onClick={onClick}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
