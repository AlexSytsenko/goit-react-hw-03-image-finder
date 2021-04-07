import { useState } from 'react';

import styles from './SearchForm.module.scss';

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  return (
    <form className={styles.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={styles.button}>
        <span className={styles.buttonLabel}></span>
        </button>

        <input
        className={styles.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleInputChange}
        />
      </form>
  );
};

export default SearchForm;
