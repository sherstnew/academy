import { AdminPlayer } from '../../components/AdminPlayer/AdminPlayer';
import { Layout } from '../../components/Layout/Layout';
import { getPlayers } from '../../utils/getPlayers';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Loader } from '../../components/Loader/Loader';
import { Error } from '../../components/Error/Error';
import styles from './AdminPlayerPage.module.scss';

export const AdminPlayerPage = () => {
  const [player, setPlayer] = useState({});
  const [status, setStatus] = useState('success');
  const [searchParams] = useSearchParams();
  useEffect(() => {
    setStatus('pending');
    getPlayers(searchParams.get('id'))
      .then((res) => {
        setPlayer(res);
        setStatus('success');
      })
      .catch(() => {
        setStatus('error');
      });
  }, [searchParams]);
  return (
    <Layout>
      {status === 'success' ? (
        <div className={styles.container}>
          <AdminPlayer player={player} />
        </div>
      ) : status === 'error' ? (
        <Error />
      ) : (
        <Loader />
      )}
    </Layout>
  );
};
