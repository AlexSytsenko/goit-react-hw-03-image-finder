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

export default Searchbar;
