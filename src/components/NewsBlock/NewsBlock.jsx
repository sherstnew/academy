import styles from './NewsBlock.module.scss';
import { getNews } from './../../utils/getNews';
import { useState } from 'react';
import { useEffect } from 'react';
import { Loader } from './../Loader/Loader';
import { Error } from './../Error/Error';
import NewsCard from '../NewsCard/NewsCard';

const NewsBlock = () => {

  const [news, setNews] = useState([]);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    setStatus('loading');
    getNews()
    .then(newsData => {
      if (newsData) {
        setNews(newsData);
        setStatus('success');
      } else {
        setStatus('error');
      }
    })
    .catch(err => {
      setStatus('error');
    });
  }, []);

  return (
    status === 'success'
    ?
    <div className={styles.newsBlock}>
      <NewsCard news={news} />
    </div>
    :
    status === 'error'
    ?
    <Error />
    :
    <Loader />
   );
};

export default NewsBlock;