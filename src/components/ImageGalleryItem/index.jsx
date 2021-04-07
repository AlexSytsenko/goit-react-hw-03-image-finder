import PropTypes from 'prop-types';

import styles from './ImageGalleryItem.module.scss';

const ImageGalleryItem = ({ data }) => {
  return (
    <li className={styles.ImageGalleryItem}>
      <img
        src={data.webformatURL}
        alt={data.tags}
        data-src={data.largeImageURL}
        className={styles.image}
      />
    </li>
  );
};

// ImageGalleryItem.propTypes = {
//   children: PropTypes.element,
// };

export default ImageGalleryItem;
