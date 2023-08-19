import { useState } from 'react';
import { ACADEMYCONFIG } from './../../academy.config';
import styles from './Camp.module.scss';

export const Camp = () => {

  const [group, setGroup] = useState('medium');

  return (
    <div className={styles.camp}>
      <div className={styles.landing}>
        <div className={styles.header__wrapper}>
          <header className={styles.header}>VolleyCamp</header>
        </div>
        <div className={styles.subheader}>от Академии с ♥</div>
      </div>
      <div className={styles.reasons}>
        <div className={styles.reason}>
          <div className={styles.reason__title}>14</div>
          <div className={styles.reason__description}>дней тренировок и волейбола</div>
        </div>
        <div className={styles.reason}>
          <div className={styles.reason__title}>3</div>
          <div className={styles.reason__description}>тренировки в день</div>
        </div>
        <div className={styles.reason}>
          <div className={styles.reason__title}>ОФП</div>
          <div className={styles.reason__description}>каждый день</div>
        </div>
      </div>
      <div className={styles.terms}>
        <div className={styles.terms__header}>Кэмп включает в себя:</div>
        <div className={styles.terms__item}>3 тренировки в день: зарядка, ОФП и работа с мячами в зале</div>
        <div className={styles.terms__item}>творческие конкурсы и командные задания</div>
        <div className={styles.terms__item}>волейбольный и теннисный турнир</div>
        <div className={styles.terms__item}>просмотр фильмов и дискотеки</div>
        <div className={styles.terms__item}>шкала активности спортсменов за различные достижения</div>
        <div className={styles.terms__item}>бассейн и сауну</div>
        <div className={styles.terms__item}>сертификат по окончанию кэмпа</div>
        <div className={styles.terms__item}>фирменные футболки и сувениры от Академии</div>
      </div>
      <div className={group === 'medium' ? styles.groups + ' ' + styles.groups_medium : styles.groups + ' ' + styles.groups_hard}>
        <div className={styles.groups__menu}>
          <div className={group === 'medium' ? styles.menu__btn + ' ' + styles.menu__btn_active : styles.menu__btn} onClick={() => setGroup('medium')}>Medium</div>
          <div className={group === 'hard' ? styles.menu__btn + ' ' + styles.menu__btn_active : styles.menu__btn} onClick={() => setGroup('hard')}>Hard</div>
        </div>
        <div className={styles.group}>
          <div className={styles.group__info}>
            <div className={styles.group__item + ' ' + styles.group__header}>{ group === 'medium' ? '45000₽' : '49000₽' }</div>
            <div className={styles.group__item}>{ group === 'medium' ? 'Для новичков' : 'Для продолжающих' }</div>
            <div className={styles.group__item}>{ group === 'medium' ? 'До 11 лет включительно' : 'От 12 лет и старше' }</div>
            <div className={styles.group__item}>{ group === 'medium' ? '19 июля - 1 августа' : '2 - 15 августа' }</div>
          </div>
        </div>
      </div>
      <div className={styles.join}>
        <div className={styles.join__header}>Присоединяйтесь к нам!</div>
        <div className={styles.join__contacts}>
          <div className={styles.social}>
          <a href={ACADEMYCONFIG.VK.link} target="_blank" rel="noopener noreferrer"><img src={ACADEMYCONFIG.VK.icon} alt="vk" className={styles.social__icon} /></a>
          <a href={ACADEMYCONFIG.INST.link} target="_blank" rel="noopener noreferrer"><img src={ACADEMYCONFIG.INST.icon} alt="instagram" className={styles.social__icon} /></a>
          <a href={ACADEMYCONFIG.TG.link} target="_blank" rel="noopener noreferrer"><img src={ACADEMYCONFIG.TG.icon} alt="instagram" className={styles.social__icon} /></a>
          </div>
          <div className={styles.presentation}><a href="https://disk.yandex.ru/i/uc-OyjKDdrDt0w" target="_blank" rel="noreferrer">Полная презентация</a></div>
        </div>
      </div>
    </div>
   );
}