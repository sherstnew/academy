import styles from './AwardsPage.module.scss';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { AwardsBlock } from '../../components/AwardsBlock/AwardsBlock';

export const AwardsPage = () => {
  return (
    <>
    <Header />
      <div className={styles.container}>
        <AwardsBlock />
      </div>
    <Footer />
    </>
  )
}