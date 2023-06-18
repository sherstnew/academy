import styles from './MerchPage.module.scss';
import { MerchShop } from './../../components/MerchShop/MerchShop';
import { Layout } from '../../components/Layout/Layout';

export const MerchPage = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <MerchShop />
      </div>
    </Layout>
  );
};