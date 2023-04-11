import styles from './TeamPage.module.scss';

import { Header } from '../../components/Header/Header';
import { TeamBlock } from '../../components/TeamBlock/TeamBlock';
import { Footer } from '../../components/Footer/Footer';

export const TeamPage = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <TeamBlock />
       </div>
      <Footer />
    </>
  )
}