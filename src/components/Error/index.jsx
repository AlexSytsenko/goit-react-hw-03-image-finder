import PropTypes from 'prop-types';

import styles from './Error.module.scss';

const Error = ({ text }) => {
  return <h2 className={styles.error}>{text}</h2>;
};

Error.defaultProps = {
  text: 'Ooopps! Something went wrong. Please try again later',
};

Error.propTypes = {
  text: PropTypes.string,
};

export default Error;
