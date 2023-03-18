import styles from './TeamsPage.module.scss';
import { Header } from '../../components/Header/Header';
import { TeamsList } from '../../components/TeamsList/TeamsList';
import { Footer } from '../../components/Footer/Footer';

export const TeamsPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <TeamsList />
      <Footer />
    </div>
  )
}