import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Loader } from '../../components/Loader/Loader';
import { AdminBlock } from '../../components/AdminBlock/AdminBlock';
import styles from './LkPage.module.scss';
import { useEffect, useState } from 'react';
import { parse } from 'cookie';
import { getSession } from '../../utils/getSession';
import { getProfile } from '../../utils/getProfile';

export const LkPage = () => {
  const [adminInfo, setAdminInfo] = useState({});
  const [status, setStatus] = useState('start');
  useEffect(() => {
    setStatus('pending');
    let tok = parse(document.cookie)['ACADEMY_TOKEN'];
    if (tok) {
      getSession(tok)
      .then(data => {
        if (data.id && data !== 'SESSION_ERR') {
          getProfile(data.id)
          .then(profile => {
            if (profile) {
              setAdminInfo(profile);
              setStatus('success');
            } else {
              setStatus('error');
            }
          })
          .catch(() => {
            setStatus('error');
          })
        } else {
          setStatus('error');
        }
      })
      .catch(() => {
        setStatus('error');
      })
    }
  }, [])
  return (
    <>
      <Header />
      <div className={styles.container}>
      {
        status === 'success' ? <AdminBlock admin={adminInfo} /> :
        status === 'error' ? 'Произошла ошибка, обратитесь к администратору.' : <Loader />
      }
      </div>
      <Footer />
    </>
  )
}