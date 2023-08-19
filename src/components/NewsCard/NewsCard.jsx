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
          dangerouslySetInnerHTML={{ __html: newsItem.header || '' }}
        ></header>
        {newsItem._id ? (
          <div
            className={styles.card__description}
            dangerouslySetInnerHTML={{ __html: newsItem.text || '' }}
          ></div>
        ) : (
          <div className={styles.description__string_empty} />
        )}
      </div>
      {newsItem.contentType === 'image' ? (
        <img
          src={newsItem.content || notFoundImage}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = notFoundImage;
          }}
          alt=''
          className={styles.card__content}
        />
      ) : newsItem.contentType === 'video' ? (
        <video className={styles.card__content} controls="controls">
          <source src={newsItem.content} />
        </video>
      ) : (
        ''
      )}
    </div>
  );
};

export default NewsCard;
