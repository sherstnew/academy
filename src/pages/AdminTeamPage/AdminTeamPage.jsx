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
  const [status, setStatus] = useState('');
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
      if (data.status === 'ok') {
        setTeam(data.data);
        getPlayers()
        .then(players => {
          let currentTeamIds = [];
          data.data.players.forEach(pl => {
            currentTeamIds.push(pl._id);
          });
          players = players.filter(p => !currentTeamIds.includes(p.id));
          setAllPlayers(players);
          setStatus('success');
        })
        .catch(err => {
          setStatus('error');
        })
      } else {
        setStatus('error');
      }
    })
    .catch(err => {
      setStatus('error');
    })
  }, [searchParams])
  return (
    <>
      <Header />
        {
          status === 'success'
          ?
          <div className={styles.container}>
            <AdminTeam team={team} allPlayers={allPlayers} />
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