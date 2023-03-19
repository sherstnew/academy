import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Player } from '../Player/Player';
import { Loader } from '../Loader/Loader';
import arraySort from 'array-sort';
import styles from './TeamBlock.module.scss';
import arrow from '../../static/icons/arrow.svg';
import { ACADEMYCONFIG } from '../../academy.config';

export const TeamBlock = () => {
  const [team, setTeam] = useState([]);
  const [status, setStatus] = useState('');
  const [sort, setSort] = useState(1);
  let [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    setStatus('pending');
    fetch(`${ACADEMYCONFIG.HOST}/api/teams?id=${searchParams.get('id')}`, {
      method: 'GET',
      headers: {
        "content-type": "application/json",
        "cache-control": "no-cache"
      }
    }).then((res => res.json()))
    .then(data => {
      setTeam(data);
      setStatus('success');
    })
  }, [])
  return (
    status === 'success' ? <div className={styles.teamBlock}>
    <div className={styles.team__info}>
      <div className={styles.team__cover} style={{backgroundImage: `url(${team.img})`}}></div>
      <div className={styles.team__name}>{team.name}</div>
      <div className={styles.team__about}>{team.about}</div>
    </div>
    <div className={styles.team__players}>
      <div className={styles.players__title}>Игроки</div>
      <div className={styles.players__list}>
      <div className={styles.header}>
          <div className={styles.header__image}></div>
          <div className={styles.header__name}>Имя</div>
          <div className={styles.header__age} onClick={() => setSort(sort === 1 ? 2 : 1)}> Возраст <img className={styles.arrow} src={arrow} style={{transform: sort === 1 || sort === 2 ? sort === 1 ? 'rotate(180deg)' : 'rotate(0deg)' : 'rotate(90deg)' }} alt="стрелка" /></div>
          <div className={styles.header__height} onClick={() => setSort(sort === 3 ? 4 : 3)}> Рост <img className={styles.arrow} src={arrow} style={{transform: sort === 3 || sort === 4 ? sort === 3 ? 'rotate(180deg)' : 'rotate(0deg)' : 'rotate(90deg)' }} alt="стрелка" /></div>
      </div>
        {
          sort === 1 ? arraySort(team.players, 'birth').reverse().map(player => <Player key={player.id} player={player} />) :
          sort === 2 ? arraySort(team.players, 'birth').map(player => <Player key={player.id} player={player} />) :
          sort === 3 ? arraySort(team.players, 'height').map(player => <Player key={player.id} player={player} />) :
          sort === 4 ? arraySort(team.players, 'height').reverse().map(player => <Player key={player.id} player={player} />) : ``
        }
      </div>
    </div>
  </div> : <Loader />
  )
}