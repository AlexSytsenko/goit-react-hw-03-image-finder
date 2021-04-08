import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const Button = ({ onClick }) => {
  const handleClick = () => {
    onClick();
  };
  return (
    <button type="button" className={styles.button} onClick={handleClick}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
