import styles from './Footer.module.scss';
import vk from '../../static/icons/vk.svg';
import inst from '../../static/icons/inst.svg';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.academy}>
        Академия
      </div>
      <a href='/login' className={styles.login}>
        Войти
      </a>
      <div className={styles.social}>
        <img src={vk} alt="vk" />
        <img src={inst} alt="inst" />
      </div>
    </footer>
  )
}