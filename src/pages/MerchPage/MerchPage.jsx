import styles from './MerchPage.module.scss';
import { Header } from './../../components/Header/Header';
import { Footer } from './../../components/Footer/Footer';
import { MerchShop } from './../../components/MerchShop/MerchShop';

export const MerchPage = () => {
  return (
    <>
      <Header />
        <div className={styles.container}>
          <MerchShop />
        </div>
      <Footer />
    </>
  );
};