import { useEffect, useState } from 'react';
import styles from './AwardsBlock.module.scss';
import { getAwards } from '../../utils/getAwards';
import { Error } from '../../components/Error/Error';
import { Loader } from '../../components/Loader/Loader';
import { AwardCard } from '../AwardCard/AwardCard';

export const AwardsBlock = () => {
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
  status === 'success' ?
    <div className={styles.awards}>
      <div className={styles.awards__title}>Награды</div>
      <div className={styles.awards__list}>
        {
          awards.map(award => <AwardCard key={award._id} award={award} />)
        }
      </div>
    </div>
  :
  status === 'error' ? <Error />
  :
  <Loader />
  )
}