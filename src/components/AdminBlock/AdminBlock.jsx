import { useState, useEffect } from 'react';
import styles from './AdminBlock.module.scss';
import { AdminTeams } from '../AdminTeams/AdminTeams';
import { AdminPlayers } from '../AdminPlayers/AdminPlayers';
import { AdminAwards } from '../AdminAwards/AdminAwards';
import { getTeams } from '../../utils/getTeams';
import { getPlayers } from '../../utils/getPlayers';
import { getAwards } from '../../utils/getAwards';
import { Loader } from '../Loader/Loader';

export const AdminBlock = ({admin}) => {
  const [currentAdmin, setCurrentAdmin] = useState(1);
  const [teams, setTeams] = useState([]);
  const [players, setPlayers] = useState([]);
  const [awards, setAwards] = useState([]);
  const [status, setStatus] = useState('start');
  useEffect(() => {
    setStatus('pending');
    getTeams()
    .then(data => {
      setTeams(data);
      getPlayers()
      .then(res => {
        setPlayers(res);
        getAwards()
        .then(res => {
          setAwards(Object.values(res));
          setStatus('success');
        })
      })
    })
  }, [])
  return (
    status === 'success' ?
    <div className={styles.adminBlock}>
      <div className={styles.admin__greeting}>Добрый день, {admin.full_name}!</div>
      <div className={styles.admin__title}>Здесь вы можете поменять информацию о командах и об игроках.</div>
      <div className={styles.admin__menu}>
        <div className={currentAdmin === 1 ? styles.menu__item + ' ' + styles.active : styles.menu__item} onClick={() => setCurrentAdmin(1)}>Команды</div>
        <div className={currentAdmin === 2 ? styles.menu__item + ' ' + styles.active : styles.menu__item} onClick={() => setCurrentAdmin(2)}>Игроки</div>
        <div className={currentAdmin === 3 ? styles.menu__item + ' ' + styles.active : styles.menu__item} onClick={() => setCurrentAdmin(3)}>Награды</div>
      </div>
      <div className={styles.admin__current}>
        {
          currentAdmin === 1 ? <AdminTeams teams={teams} /> :
          currentAdmin === 2 ? <AdminPlayers players={players} /> :
          currentAdmin === 3? <AdminAwards awards={awards} /> : ''
        }
      </div>
    </div>
    :
    <Loader />
  )
}