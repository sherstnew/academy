import { Header } from '../../components/Header/Header';
import { Camp } from '../../components/Camp/Camp';
import { Footer } from '../../components/Footer/Footer';
import styles from './CampPage.module.scss';

export const CampPage = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Camp />
      </div>
      <Footer />
    </>
   );
}