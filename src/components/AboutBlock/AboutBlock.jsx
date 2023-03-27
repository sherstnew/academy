import styles from './AboutBlock.module.scss';
import team from '../../static/images/team.webp';

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
        <a href="https://wa.me/79252802144" target='_blank' rel='noopener noreferrer'>
            <UIButton>Связаться</UIButton>
        </a>
      </div>
    </div>
  )
}