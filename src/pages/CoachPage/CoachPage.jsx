import { useEffect, useState } from 'react';
import { Loader } from '../../components/Loader/Loader';
import { Error } from '../../components/Error/Error';
import { CoachesList } from '../../components/CoachesList/CoachesList';
import styles from './CoachPage.module.scss';
import { getCoaches } from '../../utils/getCoaches';
import { Layout } from '../../components/Layout/Layout';

export const CoachPage = () => {
  const [status, setStatus] = useState('success');
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
    <Layout>
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
    </Layout>
  )
}