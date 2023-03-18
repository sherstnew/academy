import styles from './AboutBlock.module.scss';
import team from '../../static/images/team.png';

import { UIButton } from '../UIButton/UIButton';

export const AboutBlock = () => {
  return (
    <div className={styles.aboutBlock}>
      <img src={team} alt="команда" className={styles.teamPhoto} />
      <div className={styles.about}>
        <div className={styles.about__title}>Кто мы?</div>
        <div className={styles.about__text}>
          <span>Академия - волейбольный клуб из Подольска, состоящий из нескольких команд.</span>
          <span>Академия существует уже более 5 лет, успешно участвует в различных соревнованиях и нередко проводит свои турниры.</span>
        </div>
        <UIButton>Записаться</UIButton>
      </div>
    </div>
  )
}