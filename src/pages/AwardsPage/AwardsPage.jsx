import { useEffect, useState } from 'react';
import styles from './AwardsPage.module.scss';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Error } from '../../components/Error/Error';
import { Loader } from '../../components/Loader/Loader';
import { AwardsBlock } from '../../components/AwardsBlock/AwardsBlock';
import { getAwards } from '../../utils/getAwards';

export const AwardsPage = () => {
  const [awards, setAwards] = useState([]);
  const [status, setStatus] = useState('success');
  useEffect(() => {
    setStatus('pending');
    getAwards()
    .then(res => {
      setAwards(res);
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
          <AwardsBlock awards={awards} />
        </div>
        :
        status === 'error' ? <Error />
        : <Loader />
      }
    <Footer />
    </>
  )
}