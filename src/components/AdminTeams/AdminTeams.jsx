import styles from './AdminTeams.module.scss';
import { TeamCard } from '../TeamCard/TeamCard';

export const AdminTeams = ({teams}) => {
 return (
  <div className={styles.teams}>
    <div className={styles.teams__title}>Команды</div>
    {
      teams.map(team => <TeamCard key={team._id} admin='/lk' team={team} />)
    }
  </div>
 )
}