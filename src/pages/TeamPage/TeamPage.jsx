import styles from './TeamPage.module.scss';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getTeams } from '../../utils/getTeams';
import { calcAge } from '../../utils/calcAge';
import { Loader } from '../../components/Loader/Loader';
import { Error } from '../../components/Error/Error';

import { Header } from '../../components/Header/Header';
import { TeamBlock } from '../../components/TeamBlock/TeamBlock';
import { Footer } from '../../components/Footer/Footer';

export const TeamPage = () => {
  const [team, setTeam] = useState([]);
  const [status, setStatus] = useState('success');
  let [searchParams] = useSearchParams();
  useEffect(() => {
    setStatus('pending');
    getTeams(searchParams.get('id'))
    .then(data => {
      for (let i = 0; i < data.players.length; i++) {
        const player = data.players[i];
        player.birth = calcAge(player.birth);
        data.players[i] = player;
      }
      setTeam(data);
      setStatus('success');
    })
    .catch(err => {
      setStatus('error');
    })
  }, [searchParams])
  return (
    <>
      <Header />
        {
          status === 'success' ?
          <div className={styles.container}>
            <TeamBlock team={team} />
          </div>
          :
          status === 'error' ? <Error />
          :
          <Loader />
        }
      <Footer />
    </>
  )
}