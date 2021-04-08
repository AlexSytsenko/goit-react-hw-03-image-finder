import PropTypes from 'prop-types';

import SearchForm from '../SerachForm';
import styles from './Searchbar.module.scss';

const Searchbar = ({ onSubmit }) => {
  const handleSubmit = query => {
    onSubmit(query);
  };

  return (
    <header className={styles.Searchbar}>
      <SearchForm onSubmit={handleSubmit} />
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
