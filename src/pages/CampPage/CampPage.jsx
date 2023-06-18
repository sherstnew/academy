import { Camp } from '../../components/Camp/Camp';
import styles from './CampPage.module.scss';
import { Layout } from '../../components/Layout/Layout';

export const CampPage = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <Camp />
      </div>
    </Layout>
   );
}