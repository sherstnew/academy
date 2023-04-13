import styles from './LoginForm.module.scss';
import { UIButton } from '../UIButton/UIButton';
import { useEffect, useState } from 'react';
import { Loader } from '../Loader/Loader';
import { parse } from 'cookie';
import { ACADEMYCONFIG } from '../../academy.config';

export const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('success');
  useEffect(() => {
    if (parse(document.cookie).ACADEMY_TOKEN) {
      window.location.href = '/lk';
    }
  })
  const auth = () => {
    setStatus('pending');
    fetch(`${ACADEMYCONFIG.HOST}/api/auth`, {
      method: 'POST',
      headers: {
        "content-type": "application/json",
        "cache-control": "no-cache",
        "academy_token": parse(document.cookie).ACADEMY_TOKEN,
      },
      body: JSON.stringify({
        username: username,
        password: password
      }),
      credentials: "include"
    }).then((res => res.json()))
    .then(data => {
      if (data.status === 'ok') {
        document.cookie = 'ACADEMY_TOKEN=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        document.cookie = 'ACADEMY_TOKEN=' + data.data;
        setStatus('success');
        window.location.href = '/lk';
      } else {
        setStatus('error');
      }
    })
    .catch(err => {
      setStatus('error');
    })
  }
  return (
    status === 'success' || status === 'error' ? <div className={styles.login}>
    <div className={styles.login__username}>
      <div className={styles.label}>Введите имя:</div>
      <input type="text" className={styles.input} onChange={text => setUsername(text.target.value)} />
    </div>
    <div className={styles.login__password}>
      <div className={styles.label}>Введите пароль:</div>
      <input type="password" className={styles.input} onChange={text => setPassword(text.target.value)} />
    </div>
    { status === 'error' ? <div className={styles.error}>Не удалось войти. Попробуйте ввести имя и пароль заново.</div> : ''}
    <UIButton onClick={(() => auth())}>Войти</UIButton>
  </div> : <Loader />
  )
}