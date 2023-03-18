import styles from './AwardsPage.module.scss';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';

export const AwardsPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Footer />
    </div>
  )
}