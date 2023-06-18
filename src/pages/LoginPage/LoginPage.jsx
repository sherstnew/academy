import { Layout } from '../../components/Layout/Layout';
import { LoginForm } from '../../components/LoginForm/LoginForm';

import styles from './LoginPage.module.scss';

export const LoginPage= () => {
  return (
    <Layout>
      <div className={styles.container}>
        <LoginForm />
      </div>
    </Layout>
  )
}