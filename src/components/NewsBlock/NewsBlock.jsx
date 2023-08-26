import styles from './NewsBlock.module.scss';
import { getNews } from './../../utils/getNews';
import { useState } from 'react';
import { useEffect } from 'react';
import { Error } from './../Error/Error';
import NewsCard from '../NewsCard/NewsCard';
import arrow from '../../static/icons/arrow.svg';

const NewsBlock = () => {
  const [news, setNews] = useState([]);
  const [status, setStatus] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setStatus('loading');
    getNews()
      .then((newsData) => {
        if (newsData.length !== 0) {
          setNews(newsData);
          setStatus('success');
        } else {
          setStatus('noposts');
        }
      })
      .catch((err) => {
        setStatus('error');
      });
  }, []);

  return status === 'error' ? (
    <Error />
  ) : status === 'noposts' ? (
    ''
  ) : status === 'success' ? (
    <div className={styles.newsBlock}>
      <NewsCard newsItem={news[currentIndex] || {}} />
      <div className={styles.switcher}>
        <div
          className={styles.arrow}
          onClick={() =>
            currentIndex === 0
              ? setCurrentIndex(news.length - 1)
              : setCurrentIndex(currentIndex - 1)
          }
        >
          <img src={arrow} alt='' className={styles.arrow__left} />
        </div>
        <div
          className={styles.arrow}
          onClick={() =>
            currentIndex === news.length - 1
              ? setCurrentIndex(0)
              : setCurrentIndex(currentIndex + 1)
          }
        >
          <img src={arrow} alt='' className={styles.arrow__right} />
        </div>
      </div>
    </div>
  ) : (
    ''
  );
  // status === 'success'
  // ?
  // <div className={styles.newsBlock}>
  //   <NewsCard newsItem={news[currentIndex]} />
  //   <div className={styles.switcher}>
  //     <div className={styles.arrow} onClick={() => currentIndex === 0 ? setCurrentIndex(news.length - 1) : setCurrentIndex(currentIndex - 1)}>
  //       <img src={arrow} alt="" className={styles.arrow__left} />
  //     </div>
  //     <div className={styles.arrow} onClick={() => currentIndex === news.length - 1 ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1)}>
  //       <img src={arrow} alt="" className={styles.arrow__right}/>
  //     </div>
  //   </div>
  // </div>
  // :
  // status === 'error'
  // ?
  // <Error />
  // :
  // <Loader />
};

export default NewsBlock;
