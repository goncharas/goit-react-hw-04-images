import PropTypes from 'prop-types';
import css from './ErrorImg.module.css'

export const ErrorImg = ({ errorImg }) => {
  return (
    <img
      className={css.ErrorImg}
      src={errorImg}
      alt="Wow dude, try one more time"
    />
  );
};

ErrorImg.propTypes = {
  errorImg: PropTypes.string.isRequired,
};
