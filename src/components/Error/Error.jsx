import styles from './Error.module.scss';
import { Link } from 'react-router-dom';

export const Error = ({errorText}) => {
  return (
    <div className={styles.error__wrapper}>
      <div className={styles.error}>
        {
          errorText ? errorText : 'Произошла неизвестная ошибка, обратитесь к администратору.'
        }
        <a href="https://t.me/sherstd" target="_blank" rel="noreferrer">Администратор</a>
        <Link to='/'>Домой</Link>
      </div>
    </div>
  )
}