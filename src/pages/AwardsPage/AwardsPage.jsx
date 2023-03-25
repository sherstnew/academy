import styles from './AwardsPage.module.scss';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { AwardsBlock } from '../../components/AwardsBlock/AwardsBlock';

export const AwardsPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <AwardsBlock />
      <Footer />
    </div>
  )
}