import PropTypes from 'prop-types';

import ImageGalleryItem from '../ImageGalleryItem';
import styles from './ImageGallery.module.scss';

const ImageGallery = ({ photos }) => {
  return (
    <ul className={styles.ImageGallery}>
      {photos.map(photo => 
        <ImageGalleryItem data={photo} key={photo.id}/>
      )}
    </ul>
  );
};

// ImageGallery.propTypes = {
//   children: PropTypes.element,
// };

export default ImageGallery;
