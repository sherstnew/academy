import styles from './TeamsPage.module.scss';
import { TeamsList } from '../../components/TeamsList/TeamsList';
import { useEffect, useState } from 'react';
import { Loader } from '../../components/Loader/Loader';
import { Error } from '../../components/Error/Error';
import { getTeams } from '../../utils/getTeams';
import { Layout } from '../../components/Layout/Layout';

export const TeamsPage = () => {
  const [teams, setTeams] = useState([]);
  const [status, setStatus] = useState('success');
  useEffect(() => {
    setStatus('pending');
    getTeams()
    .then(data => {
      setTeams(data);
      setStatus('success');
    })
    .catch(err => {
      setStatus('error');
    })
  }, [])
  return (
    <Layout>
      {
        status === 'success' ?
        <div className={styles.container}>
          <TeamsList teams={teams} />
        </div>
        :
        status === 'error' ?
        <Error />
        :
        <Loader />
      }
    </Layout>
  )
}