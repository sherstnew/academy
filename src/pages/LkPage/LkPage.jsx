import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Loader } from '../../components/Loader/Loader';
import { AdminBlock } from '../../components/AdminBlock/AdminBlock';
import styles from './LkPage.module.scss';
import { useEffect, useState } from 'react';
import { parse } from 'cookie';
import { getSession } from '../../utils/getSession';
import { getProfile } from '../../utils/getProfile';
import { Error } from '../../components/Error/Error';

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
              document.cookie = 'ACADEMY_TOKEN=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
              setStatus('error');
              window.location.href = '/login';
            }
          })
          .catch(() => {
            document.cookie = 'ACADEMY_TOKEN=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            setStatus('error');
            window.location.href = '/login';
          })
        } else {
          document.cookie = 'ACADEMY_TOKEN=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
          setStatus('error');
          window.location.href = '/login';
        }
      })
      .catch(() => {
        document.cookie = 'ACADEMY_TOKEN=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        setStatus('error');
        window.location.href = '/login';
      })
    }
  }, [])
  return (
    <>
      <Header />
      <div className={styles.container}>
      {
        status === 'success' ? <AdminBlock admin={adminInfo} /> :
        status === 'error' ? <Error errorText={'Произошла ошибка авторизации. Попробуйте войти заново.'} /> : <Loader />
      }
      </div>
      <Footer />
    </>
  )
}