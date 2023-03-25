import { Award } from '../../components/Award/Award';
import styles from './AdminAwards.module.scss';

export const AdminAwards = ({awards}) => {
  console.log(awards);
  return (
    <div className={styles.awards}>
      <div className={styles.awards__title}>Награды</div>
      <div className={styles.awards__list}>
        {
          awards.map(award => <Award award={award} />)
        }
      </div>
    </div>
  )
}