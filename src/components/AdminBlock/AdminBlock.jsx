import { useState, useEffect } from 'react';
import styles from './AdminBlock.module.scss';
import { AdminTeams } from '../AdminTeams/AdminTeams';
import { AdminPlayers } from '../AdminPlayers/AdminPlayers';
import { getTeams } from '../../utils/getTeams';
import { Loader } from '../Loader/Loader';
import { getPlayers } from '../../utils/getPlayers';

export const AdminBlock = ({admin}) => {
  const [currentAdmin, setCurrentAdmin] = useState(1);
  const [teams, setTeams] = useState([]);
  const [status, setStatus] = useState('start');
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    setStatus('pending');
    getTeams()
    .then(data => {
      setTeams(data);
      getPlayers()
      .then(res => {
        setPlayers(res);
        setStatus('success');
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
      </div>
      <div className={styles.admin__current}>
        {
          currentAdmin === 1 ? <AdminTeams teams={teams} /> :
          currentAdmin === 2 ? <AdminPlayers players={players} /> : ''
        }
      </div>
    </div>
    :
    <Loader />
  )
}