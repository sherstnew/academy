import styles from './TeamCard.module.scss';
import { Link } from 'react-router-dom';

export const TeamCard = ({team, admin}) => {
  return (
    <Link className={styles.card_wrapper} to={ admin + `/team/?id=${team._id}` }><div className={styles.card} style={{backgroundImage: `linear-gradient(rgba(000, 000, 000, 0.5), rgba(000, 000, 000, 0.8)), url(${team.img})`}}>{team.name}</div></Link>
  )
}