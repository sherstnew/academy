import styles from './AdminPlayers.module.scss';
import { Player } from '../Player/Player';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const AdminPlayers = ({players}) => {
  const [filteredPlayers, setFilteredPlayers] = useState(players);
  const filterPlayers = (query) => {
    setFilteredPlayers(players.filter(pl => pl.name.includes(query)));
  }
  return (
    <div className={styles.players}>
      <div className={styles.players__menu}>
        <div className={styles.players__title}>Игроки</div>
        <input type="text" className={styles.players__search}  placeholder='Поиск по игрокам...' onChange={evt => filterPlayers(evt.target.value)} />
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