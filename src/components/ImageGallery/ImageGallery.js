import PropTypes from 'prop-types';
import { ImageGalleryItem } from './ImageGalleryItem';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ allImages, ...otherProps }) => {
  return (
    <section>
      <ul className={css.ImageGalleryUl}>
        {allImages.map(oneImage => (
          <li className={css.ImageGalleryItemLi} key={oneImage.id}>
            <ImageGalleryItem image={oneImage} {...otherProps} />
          </li>
        ))}
      </ul>
    </section>
  );
};

ImageGallery.propTypes = {
  allImages: PropTypes.array.isRequired,
};
