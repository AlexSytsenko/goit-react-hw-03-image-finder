import PropTypes from 'prop-types';

import styles from './ImageGalleryItem.module.scss';

const ImageGalleryItem = ({ data: { webformatURL, tags, largeImageURL } }) => {
  return (
    <li className={styles.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        data-src={largeImageURL}
        className={styles.image}
      />
    </li>
  );
};

ImageGalleryItem.defaultProps = {
  data: {
    tags: 'photo',
  },
};

ImageGalleryItem.propTypes = {
  data: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string,
    largeImageURL: PropTypes.string.isRequired,
  }),
};

export default ImageGalleryItem;
