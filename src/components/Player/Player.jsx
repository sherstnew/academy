import styles from './Player.module.scss';

export const Player = ({player}) => {
  return (
    <div className={styles.player}>
      <div className={styles.player__image} style={{backgroundImage: `url(${ player.image })`}}></div>
      <div className={styles.player__name}>{ player.name }</div>
      <div className={styles.player__age}>{ player.birth }</div>
      <div className={styles.player__height}>{ player.height }</div>
      <div className={styles.player__position}>{ player.position }</div>
    </div>
  )
}