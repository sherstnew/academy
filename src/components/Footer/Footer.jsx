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
        Личный кабинет
      </a>
      <div className={styles.social}>
        <a href="https://vk.com/academypfv" target="_blank" rel="noopener noreferrer"><img src={vk} alt="vk" /></a>
        <a href="https://www.instagram.com/academy_pfv/" target="_blank" rel="noopener noreferrer"><img src={inst} alt="instagram" /></a>
      </div>
    </footer>
  )
}