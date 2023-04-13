import styles from './AwardsBlock.module.scss';
import { AwardCard } from '../AwardCard/AwardCard';

export const AwardsBlock = ({awards}) => {
  return (
    <div className={styles.awards}>
      <div className={styles.awards__title}>Награды</div>
      <div className={styles.awards__list}>
        {
          awards.map(award => <AwardCard key={award._id} award={award} />)
        }
      </div>
    </div>
  )
}