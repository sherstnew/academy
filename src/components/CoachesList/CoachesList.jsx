import { CoachCard } from '../CoachCard/CoachCard';
import styles from './CoachesList.module.scss';

export const CoachesList = ({coaches}) => {
  return (
    <>
      <header className={styles.header}>Тренеры Академии</header>
      <div className={styles.coaches}>
        {
          coaches.map(coach => <CoachCard key={coach._id} coach={coach} />)
        }
      </div>
    </>
  )
}