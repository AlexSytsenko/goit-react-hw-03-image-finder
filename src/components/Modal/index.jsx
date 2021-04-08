import { useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './Modal.module.scss';

const Modal = ({ image, alt, onClose }) => {
  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className={styles.Overlay} onClick={handleOverlayClick}>
      <div className={styles.Modal}>
        <img src={image} alt={alt} />
      </div>
    </div>
  );
};

Modal.defaultProps = {
  alt: 'photo',
};

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

export default Modal;

// Class
// class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = e => {
//     if (e.code === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   handleOverlayClick = e => {
//     if (e.target === e.currentTarget) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     const { image, alt } = this.props;

//     return createPortal(
//       <div className={styles.Overlay} onClick={this.handleOverlayClick}>
//         <div className={styles.Modal}>
//           <img src={image} alt={alt} />
//         </div>
//       </div>,
//       modalRoot,
//     );
//   }
// }

// Modal.defaultProps = {
//   alt: 'photo',
// };

// Modal.propTypes = {
//   image: PropTypes.string.isRequired,
//   alt: PropTypes.string,
//   onClose: PropTypes.func.isRequired,
// };

// export default Modal;
