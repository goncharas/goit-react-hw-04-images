import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';


export const ImageGalleryItem = ({
  image: { tags, webformatURL, largeImageURL },
  onToggleModal,
}) => {
  return (
    <img
      className={css.ImageGalleryItemImage}
      src={webformatURL}
      data-source={largeImageURL}
      alt={tags}
      onClick={onToggleModal}
    />
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  onToggleModal: PropTypes.func.isRequired,
};
