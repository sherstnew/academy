import styles from './TeamsList.module.scss';
import { TeamCard } from '../TeamCard/TeamCard';
import { teams } from '../../constants/teams';

export const TeamsList = () => {
  return (
    <div className={styles.teams_wrapper}>
      <div className={styles.title}>Наши команды</div>
      <ul className={styles.teams}>
        {
          teams.map(team => <TeamCard key={team.id} team={team} />)
        }
      </ul>
    </div>
  )
}