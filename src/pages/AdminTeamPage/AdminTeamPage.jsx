import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Loader } from '../../components/Loader/Loader';
import { Error } from '../../components/Error/Error';
import { AdminTeam } from '../../components/AdminTeam/AdminTeam';
import styles from './AdminTeamPage.module.scss';
import { ACADEMYCONFIG } from '../../academy.config';
import { getPlayers } from '../../utils/getPlayers';

export const AdminTeamPage = () => {
  const [team, setTeam] = useState({});
  const [status, setStatus] = useState('start');
  const [allPlayers, setAllPlayers] = useState([]);
  const [searchParams] = useSearchParams();
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
      getPlayers()
      .then(res => {
        let currentTeamIds = []
        data.players.forEach(pl => {
          currentTeamIds.push(pl.id);
        })
        res = res.filter(p => !currentTeamIds.includes(p.id));
        setAllPlayers(res);
        setStatus('success');
      })
      .catch(err => {
        setStatus('error');
      })
    })
  }, [searchParams])
  return (
    <>
      <Header />
      <div className={styles.container}>
        {
          status === 'success' ? <AdminTeam team={team} allPlayers={allPlayers} /> :
          : status === 'error' ? <Error /> : <Loader />
        }
      </div>
      <Footer />
    </>
  )
}