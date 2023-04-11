import styles from './CoachCard.module.scss';
import coachImg from '../../static/images/coach.svg';

export const CoachCard = ({coach}) => {
  return (
    <div className={styles.coach} style={{backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%), url(${coach.img ? coach.img : coachImg})`}}>
      <div className={styles.coach__info}>
        <div className={styles.coach__name}>{ coach.name }</div>
        <div className={styles.coach__about}>{ coach.about }</div>
      </div>
    </div>
  )
}