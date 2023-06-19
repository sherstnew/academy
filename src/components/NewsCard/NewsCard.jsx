import styles from './NewsCard.module.scss';
import arrow from '../../static/icons/arrow.svg';
import { useState } from 'react';

const NewsCard = ({news}) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className={styles.card}>
      <header className={styles.card__header}>
        {
          news[currentIndex].header
        }
      </header>
      <img src={news[currentIndex].image} alt="" className={styles.card__image} />
      <div className={styles.switcher}>
        <div className={styles.arrow} onClick={() => currentIndex === 0 ? setCurrentIndex(news.length - 1) : setCurrentIndex(currentIndex - 1)}>
          <img src={arrow} alt="" className={styles.arrow__left} />
        </div>
        <div className={styles.arrow} onClick={() => currentIndex === news.length - 1 ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1)}>
          <img src={arrow} alt="" className={styles.arrow__right}/>
        </div>
      </div>
    </div>
   );
}

export default NewsCard;