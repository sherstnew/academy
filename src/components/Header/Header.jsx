import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import logo from '../../static/images/academylogo.webp';
import burgerIcon from '../../static/icons/burger-right.svg';
import crossIcon from '../../static/icons/cross.svg';
import { MenuContext } from '../../contexts/MenuContext';
import { useContext } from 'react';

export const Header = () => {

  const { menuOpened, setMenuOpened } = useContext(MenuContext);

  return (
    <nav className={styles.header}>
      <Link to='/'><img src={logo} alt="" className={styles.logo} /></Link>
      <Link to='/teams' className={styles.header__item}>Команды</Link>
      <Link to='/awards' className={styles.header__item}>Награды</Link>
      <Link to='/coaches' className={styles.header__item}>Тренеры</Link>
      {
        menuOpened
        ?
        <img src={crossIcon} alt="" className={styles.menu__opener} onClick={() => setMenuOpened(false)} />
        :
        <img src={burgerIcon} alt="" className={styles.menu__opener} onClick={() => setMenuOpened(true)} />
      }
    </nav>
  )
}