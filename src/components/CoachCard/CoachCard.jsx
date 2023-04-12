import { useState } from 'react';
import styles from './CoachCard.module.scss';
import coachImg from '../../static/images/coach.svg';
import more from '../../static/icons/more.svg';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

export const CoachCard = ({coach}) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className={styles.card}>
      <div className={styles.coach}>
        <div className={styles.coach__img} style={{backgroundImage: `url(${coach.img ? coach.img : coachImg})`}} />
        <div className={styles.coach__info}>
          <div className={styles.coach__name}>{ coach.name }</div>
          <div className={styles.coach__about}>{ coach.about }</div>
        </div>
        <img src={more} alt="ещё" className={cx('more_btn', {selected: showMore})} onClick={() => setShowMore(!showMore)}/>
      </div>
      <div className={cx('more', {show: showMore})}>{ coach.description }</div>
    </div>
  )
}