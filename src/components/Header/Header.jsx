import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import logo from '../../static/images/academylogo.webp';

export const Header = () => {
  return (
    <nav className={styles.header}>
      <Link to='/'><img src={logo} alt="" className={styles.logo} /></Link>
      <Link to='/teams'>Команды</Link>
      <Link to='/awards'>Награды</Link>
      <Link to='/coaches'>Тренеры</Link>
    </nav>
  )
}