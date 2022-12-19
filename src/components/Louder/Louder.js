import { Vortex} from 'react-loader-spinner';
import css from './Louder.module.css';

export const Louder = () => (
  <div className={css.Loader}>
    <Vortex
      visible={true}
      height="80"
      width="80"
      ariaLabel="vortex-loading"
      wrapperStyle={{}}
      wrapperClass="vortex-wrapper"
      colors={[
        '#42ddf5',
        '#4281f5',
        '#5442f5',
        '#8d42f5',
        '#bf42f5',
        '#f9f7fa',
      ]}
    />
  </div>
);
