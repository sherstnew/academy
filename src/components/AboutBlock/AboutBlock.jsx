import styles from './AboutBlock.module.scss';
import team from '../../static/images/team.webp';
import { ACADEMYCONFIG } from '../../academy.config';

import { UIButton } from '../UIButton/UIButton';

export const AboutBlock = () => {
  return (
    <div className={styles.aboutBlock}>
      <img src={team} alt="команда" className={styles.teamPhoto} />
      <div className={styles.about}>
        <div className={styles.about__title}>Кто мы?</div>
        <div className={styles.about__text}>
          <span>Академия - волейбольный клуб из Подольска, в состав которого входят несколько команд.</span>
          <span>Академия существует уже более 5 лет, успешно участвует в различных соревнованиях и проводит свои турниры.</span>
        </div>
        <a href={ACADEMYCONFIG.CONTACT} target='_blank' rel='noopener noreferrer'>
            <UIButton>Связаться</UIButton>
        </a>
      </div>
    </div>
  )
}