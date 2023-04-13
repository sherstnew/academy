import styles from './TeamsPage.module.scss';
import { Header } from '../../components/Header/Header';
import { TeamsList } from '../../components/TeamsList/TeamsList';
import { Footer } from '../../components/Footer/Footer';
import { useEffect, useState } from 'react';
import { Loader } from '../../components/Loader/Loader';
import { Error } from '../../components/Error/Error';
import { getTeams } from '../../utils/getTeams';

export const TeamsPage = () => {
  const [teams, setTeams] = useState([]);
  const [status, setStatus] = useState('');
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
    <>
    <Header />
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
    <Footer />
    </>
  )
}