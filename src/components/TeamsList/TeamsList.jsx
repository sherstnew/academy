import styles from './TeamsList.module.scss';
import { TeamCard } from '../TeamCard/TeamCard';
import { useEffect, useState } from 'react';
import { Loader } from '../Loader/Loader';
import { ACADEMYCONFIG } from '../../academy.config';

export const TeamsList = () => {
  const [teams, setTeams] = useState([]);
  const [status, setStatus] = useState('');
  useEffect(() => {
    setStatus('pending');
    fetch(`${ACADEMYCONFIG.HOST}/api/teams`, {
      method: 'GET',
      headers: {
        "content-type": "application/json",
        "cache-control": "no-cache"
      }
    }).then((res => res.json()))
    .then(data => {
      setTeams(data);
      setStatus('success');
    })
  }, [])
  return (
    status === 'success' ?
    <div className={styles.teams_wrapper}>
      <div className={styles.title}>Наши команды</div>
      <ul className={styles.teams}>
        {
          teams.map(team => <TeamCard key={team.id} team={team} />)
        }
      </ul>
    </div> : <Loader />
  )
}