import styles from './AdminPlayers.module.scss';
import { Player } from '../Player/Player';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import plus from '../../static/icons/plus.svg';

export const AdminPlayers = ({players}) => {
  const [filteredPlayers, setFilteredPlayers] = useState(players);
  const filterPlayers = (query) => {
    setFilteredPlayers(players.filter(pl => pl.name.includes(query)));
  }
  return (
    <div className={styles.players}>
      <div className={styles.players__menu}>
        <div className={styles.players__title}>Игроки</div>
        <div className={styles.players__manage}>
          <Link to='/lk/player?id=new'><img src={plus} alt="добавить игрока" className={styles.appendPlayer} /></Link>
          <input type="text" className={styles.players__search}  placeholder='Поиск по игрокам...' onChange={evt => filterPlayers(evt.target.value)} />
        </div>
      </div>
      {
        filteredPlayers.map(player =>
          <Link to={`/lk/player?id=${player.id}`} key={player.id}>
            <Player player={player}></Player>
          </Link>
        )
      }
    </div>
  )
}