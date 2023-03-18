import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { SloganBlock } from '../../components/SloganBlock/SloganBlock';
import { AboutBlock } from '../../components/AboutBlock/AboutBlock';
import { GroupsBlock } from '../../components/GroupsBlock/GroupsBlock';
import { Link, Element } from 'react-scroll';
import styles from './HomePage.module.scss';
import arrow_down from '../../static/icons/arrow_down.svg';

export const HomePage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Link className={styles.scrollBlock} to='aboutBlock' smooth={true} duration={1000}>
        <img src={arrow_down} alt="стрелка вниз" className={styles.scrollBtn} />
      </Link>
      <Element name='sloganBlock'>
        <SloganBlock />
      </Element>
      <Element name='aboutBlock'>
        <AboutBlock />
      </Element>
      <Element name='groupsBlock'>
        <GroupsBlock />
      </Element>
      <Footer />
    </div>
  )
}