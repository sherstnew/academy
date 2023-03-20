import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Loader } from '../../components/Loader/Loader';
import { AdminTeam } from '../../components/AdminTeam/AdminTeam';
import styles from './AdminTeamPage.module.scss';
import { ACADEMYCONFIG } from '../../academy.config';

export const AdminTeamPage = () => {
  const [team, setTeam] = useState({});
  const [status, setStatus] = useState('start');
  const [searchParams, setSearchParams] = useSearchParams();
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
    <>
      <Header />
      <div className={styles.container}>
        {
          status === 'success' ? <AdminTeam team={team} /> : <Loader />
        }
      </div>
      <Footer />
    </>
  )
}