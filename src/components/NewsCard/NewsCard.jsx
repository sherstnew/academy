import styles from './NewsCard.module.scss';

const NewsCard = ({newsItem}) => {

  return (
    <div className={styles.card}>
      <div className={styles.card__text}>
        <header className={styles.card__header}>
          {
            newsItem.header
          }
        </header>
        <div className={styles.card__description}>
          {
            newsItem.text.split('\n').map(str => <div className={styles.description__string} key={Math.random()}>{ str }</div>)
          }
        </div>
      </div>
      <img src={newsItem.image} alt="" className={styles.card__image} />
    </div>
   );
}

export default NewsCard;