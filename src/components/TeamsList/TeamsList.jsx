import styles from './TeamsList.module.scss';
import { TeamCard } from '../TeamCard/TeamCard';

export const TeamsList = ({teams}) => {
  return (
    <>
      <div className={styles.title}>Наши команды</div>
      <ul className={styles.teams}>
        {
          teams.map(team => <TeamCard admin='' key={team._id} team={team} />)
        }
      </ul>
    </>
  )
}