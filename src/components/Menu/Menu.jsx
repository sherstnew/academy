import styles from './Menu.module.scss';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { MenuContext } from '../../contexts/MenuContext';

export const Menu = () => {

  const { setMenuOpened } = useContext(MenuContext);

  return (
    <div className={styles.menu}>
      <div className={styles.menu__links}>
        <Link to='/' className={styles.links__item} onClick={() => setMenuOpened(false)}>Главная</Link>
        <Link to='/teams' className={styles.links__item} onClick={() => setMenuOpened(false)}>Команды</Link>
        <Link to='/awards' className={styles.links__item} onClick={() => setMenuOpened(false)}>Награды</Link>
        <Link to='/coaches' className={styles.links__item} onClick={() => setMenuOpened(false)}>Тренеры</Link>
        <Link to='/camp' className={styles.links__item} onClick={() => setMenuOpened(false)}>Кэмп</Link>
      </div>
    </div>
  );
};