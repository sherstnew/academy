import styles from './SloganBlock.module.scss';
import logo from '../../static/images/academylogo.webp';
import lines from '../../static/background/righttop.svg';

export const SloganBlock = () => {
  return (
    <>
      <img src={lines} alt="" className={styles.lines} />
      <div className={styles.sloganBlock}>
        <div className={styles.slogan}>
          <div className={styles.slogan__header}>Academy</div>
          <div className={styles.slogan__subheader}>One game, one team</div>
        </div>
        <div className={styles.academyLogo}>
          <img src={logo} alt="логотип академии" className={styles.logo} />
          <div className={styles.logoshadow}></div>
        </div>
      </div>
    </>
  )
}