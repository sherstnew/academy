import { MutatingDots } from  'react-loader-spinner';
import styles from './Loader.module.scss';

export const Loader = () => {
  return (
    <MutatingDots
      height="100"
      width="100"
      color="#a17bd4"
      secondaryColor= '#fc8dd8'
      radius='12.5'
      ariaLabel="mutating-dots-loading"
      wrapperStyle={{}}
      wrapperClass={styles.loader}
      visible={true}
    />
  )
}