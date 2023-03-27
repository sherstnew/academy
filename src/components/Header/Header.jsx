import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import logo from '../../static/images/academylogo.webp';

export const Header = () => {
  return (
    <div className={styles.header}>
      <Link to='/'><img src={logo} alt="логотип академии" className={styles.logo} /></Link>
      <Link to='/'>О нас</Link>
      <Link to='/teams'>Команды</Link>
      <Link to='/awards'>Награды</Link>
    </div>
  )
}