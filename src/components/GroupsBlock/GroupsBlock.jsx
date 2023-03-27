import styles from './GroupsBlock.module.scss';
import { groups } from '../../constants/groups';
import { useState } from 'react';
import { Element, scroller } from 'react-scroll';
import { UIButton } from '../UIButton/UIButton';

export const GroupsBlock = () => {
  const [ activeGroup, setActiveGroup ] = useState(1);
  const groupClick = (id) => {
    setActiveGroup(id);
    scroller.scrollTo('about', {
      duration: 500,
      smooth: true,
    })
  }
  return (
    <div className={styles.groupsBlock}>
      <div className={styles.groups}>
        {
          groups.map(group => <div key={group.id} className={styles['groups__' + group.id] + ' ' + styles.group} style={{backgroundImage: `url(${group.img})`}} onClick={() => groupClick(group.id)}><span className={styles.group__name}>{ group.name }</span></div>)
        }
      </div>
      <Element name='about' className={styles.about_group}>
        <div className={styles.group__title}>{ groups[activeGroup - 1].name }</div>
        <div className={styles.group__about}>{ groups[activeGroup - 1].about }</div>
        <div className={styles.group__contacts}>
          <a href="https://wa.me/79252802144" target='_blank' rel='noopener noreferrer'>
            <UIButton>Связаться</UIButton>
          </a>
        </div>
      </Element>
    </div>
  )
}