import { useEffect, useState } from 'react';
import { Loader } from '../../components/Loader/Loader';
import { Error } from '../../components/Error/Error';
import { CoachesList } from '../../components/CoachesList/CoachesList';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import styles from './CoachPage.module.scss';
import { getCoaches } from '../../utils/getCoaches';

export const CoachPage = () => {
  const [status, setStatus] = useState('');
  const [coaches, setCoaches] = useState([]);
  useEffect(() => {
    setStatus('pending');
    getCoaches()
    .then(res => {
      setCoaches(res);
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
          <CoachesList coaches={coaches} />
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