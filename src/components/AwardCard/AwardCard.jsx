import styles from './AwardCard.module.scss';
import awardImg from '../../static/images/award.png';

export const AwardCard = ({award}) => {
  return (
    <div className={styles.award} style={{backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 1) 100%), url(${award.img ? award.img : awardImg})`}}>
      <div className={styles.award__wrapper}>
        <div className={styles.award__title}>{award.name}</div>
        <div className={styles.award__about}>{award.about}</div>
        <div className={styles.award__date}>{award.date}</div>
      </div>
    </div>
  )
}