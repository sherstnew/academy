import styles from './Footer.module.scss';
import vk from '../../static/icons/vk.png';
import telegram from '../../static/icons/telegram.png';
import instagram from '../../static/icons/instagram.png';
import { ACADEMYCONFIG } from '../../academy.config';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.social}>
        <a href={ACADEMYCONFIG.VK} target="_blank" rel="noopener noreferrer"><img src={vk} alt="vk" /></a>
        <a href={ACADEMYCONFIG.INST} target="_blank" rel="noopener noreferrer"><img src={instagram} alt="instagram" /></a>
        <a href={ACADEMYCONFIG.TG} target="_blank" rel="noopener noreferrer"><img src={telegram} alt="instagram" /></a>
      </div>
      <a href='/login' className={styles.login}>
        Личный кабинет
      </a>
      <div className={styles.name}>
        Академия
      </div>
    </footer>
  )
}