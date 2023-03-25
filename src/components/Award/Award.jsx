import styles from './Award.module.scss';

export const Award = ({award}) => {
  return (
    <div className={styles.award}>
      <div className={styles.award__name}>{award.name}</div>
      <div className={styles.award__about}>{award.about}</div>
      <div className={styles.award__date}>{award.date}</div>
    </div>
  )
}