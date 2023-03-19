import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { LoginForm } from '../../components/LoginForm/LoginForm';

import styles from './LoginPage.module.scss';

export const LoginPage= () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <LoginForm />
      </div>
      <Footer />
    </>
  )
}