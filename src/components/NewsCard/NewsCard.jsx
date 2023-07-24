import styles from './NewsCard.module.scss';
import classNames from 'classnames/bind';
import notFoundImage from '../../static/images/notFound.png';

const cx = classNames.bind(styles);

const NewsCard = ({ newsItem }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__text}>
        <header
          className={cx('card__header', {
            card__header_empty: newsItem._id === undefined,
          })}
        >
          {newsItem.header || ''}
        </header>
        <div className={styles.card__description}>
          {newsItem._id ? (
            newsItem.text.split('\n').map((str) => (
              <div className={styles.description__string} key={Math.random()}>
                {str}
              </div>
            ))
          ) : (
            <div className={styles.description__string_empty} />
          )}
        </div>
      </div>
      <img
        src={newsItem.image || notFoundImage}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = notFoundImage;
        }}
        alt=''
        className={styles.card__image}
      />
    </div>
  );
};

export default NewsCard;
