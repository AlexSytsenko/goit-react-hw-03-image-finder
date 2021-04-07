import useEffect from 'react';

import styles from './Modal.module.scss';

const Modal = ({ image, alt, onClose }) => {
  return (
    <div className={styles.Overlay} data-name="overlay" onClick={onClose}>
      <div className={styles.Modal}>
        <img src={image} alt={alt} />
      </div>
    </div>
  );
};

export default Modal;
