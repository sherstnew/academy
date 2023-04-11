import { ACADEMYCONFIG } from '../../academy.config';
import { useEffect, useState } from 'react';
import { Loader } from '../../components/Loader/Loader';
import { Error } from '../../components/Error/Error';
import { CoachCard } from '../../components/CoachCard/CoachCard';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import styles from './CoachPage.module.scss';

export const CoachPage = () => {
  const [status, setStatus] = useState('success');
  const [coaches, setCoaches] = useState([]);
  useEffect(() => {
    setStatus('pending');
    fetch(`${ACADEMYCONFIG.HOST}/api/coaches`, {
      method: 'GET'
    })
    .then(data => data.json())
    .then(res => {
      if (res.status === 'ok') {
        setCoaches(res.data);
        setStatus('success');
      } else {
        setStatus('error');
      }
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
          <header className={styles.header}>Тренеры Академии</header>
          <div className={styles.coaches__list}>
            {
              coaches.map(coach => <CoachCard key={coach._id} coach={coach} />)
            }
          </div>
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