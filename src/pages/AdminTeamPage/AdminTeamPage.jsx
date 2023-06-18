import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Loader } from '../../components/Loader/Loader';
import { Error } from '../../components/Error/Error';
import { AdminTeam } from '../../components/AdminTeam/AdminTeam';
import styles from './AdminTeamPage.module.scss';
import { getTeams } from '../../utils/getTeams';
import { getPlayers } from '../../utils/getPlayers';
import { Layout } from '../../components/Layout/Layout';

export const AdminTeamPage = () => {
  const [team, setTeam] = useState({});
  const [status, setStatus] = useState('');
  const [allPlayers, setAllPlayers] = useState([]);
  const [searchParams] = useSearchParams();
  useEffect(() => {
    setStatus('pending');
    getTeams(searchParams.get('id'))
    .then(data => {
      setTeam(data);
      getPlayers()
      .then(players => {
        let currentTeamIds = [];
        data.players.forEach(pl => {
          currentTeamIds.push(pl._id);
        });
        players = players.filter(p => !currentTeamIds.includes(p.id));
        setAllPlayers(players);
        setStatus('success');
      })
      .catch(err => {
        setStatus('error');
      })
    })
    .catch(err => {
      setStatus('error');
    })
  }, [searchParams]);
  return (
    <Layout>
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
    </Layout>
  )
}