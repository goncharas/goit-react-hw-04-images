import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './Modal.module.css'

export class Modal extends Component {
  static propTypes = {
    data: PropTypes.shape({
      source: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }).isRequired,
    onToggleModal: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { onToggleModal } = this.props;
    window.addEventListener('keydown', onToggleModal);
  }
  componentWillUnmount() {
    const { onToggleModal } = this.props;
    window.removeEventListener('keydown', onToggleModal);
  }

  render() {
    const {
      data: { source, alt },
      onToggleModal,
    } = this.props;
    return (
      <div className={css.Overlay} onClick={onToggleModal}>
        <div className={css.Modal}>
          <img src={source} alt={alt} />
        </div>
      </div>
    );
  }
}
