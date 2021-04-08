import PropTypes from 'prop-types';

import ImageGalleryItem from '../ImageGalleryItem';
import styles from './ImageGallery.module.scss';

const ImageGallery = ({ photos, onClick }) => {
  return (
    <ul className={styles.ImageGallery} onClick={onClick}>
      {photos.map(photo => (
        <ImageGalleryItem data={photo} key={photo.id} />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ImageGallery;
