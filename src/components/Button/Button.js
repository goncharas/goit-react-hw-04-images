import PropTypes from 'prop-types';
import css from './Button.module.css'

export const Button = ({ text, type, loadMoreImages }) => {
  return (
    <button type={type} className={css.Button} onClick={loadMoreImages}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  loadMoreImages: PropTypes.func.isRequired,
};
