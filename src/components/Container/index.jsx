import PropTypes from 'prop-types';

import styles from './Container.module.scss';


const Container = ({ children }) => (
  <div className={styles.Container}>
    {children}
  </div>
);


Container.propTypes = {
  children: PropTypes.element,
}

export default Container;