import { useEffect, useState } from 'react';
import styles from './AdminTeam.module.scss';
import { UIButton } from '../UIButton/UIButton';
import { Loader } from '../Loader/Loader';
import { ACADEMYCONFIG } from '../../academy.config';

export const AdminTeam = ({team}) => {
  const [currentTeam, setCurrentTeam] = useState(team);
  const [img, setImg] = useState(team.img);
  const [name, setName] = useState(team.name);
  const [about, setAbout] = useState(team.about);
  const [status, setStatus] = useState('success');

  const submitInfo = () => {
    setStatus('pending');
    const data = team;
    data.img = img;
    data.name = name;
    data.about = about;
    setCurrentTeam(data);
    fetch(`${ACADEMYCONFIG.HOST}/api/teams`, {
      method: 'POST',
      headers: {
        "content-type": "application/json",
        "cache-control": "no-cache"
      },
      body: JSON.stringify(currentTeam),
    }).then(data => data.json())
    .then(res => {
      if (res.status === 'ok') {
        setStatus('success');
        window.location.reload();
      } else {
        setStatus('error')
      }
    })
  }
  return (
    status === 'success' ?
    <div className={styles.team}>
      <div className={styles.team__info}>
        <div className={styles.info__cover}>
          <img src={team.img} alt="обложка команды" className={styles.cover__picture} />
        </div>
          <div className={styles.cover__input}>
            <div className={styles.label}>Ссылка на картинку команды:</div>
            <input type="text" className={styles.input} value={img} placeholder='Введите ссылку...' onChange={(input) => setImg(input.target.value)} />
          </div>
        <div className={styles.info__about}>
          <div className={styles.about__name}>
            <div className={styles.label}>Название команды:</div>
            <input type="text" className={styles.input} value={name} placeholder='Введите название...' onChange={(input) => setName(input.target.value)} />
          </div>
          <div className={styles.about__description}>
            <div className={styles.label}>Описание команды:</div>
            <input type="text" className={styles.input} value={about} placeholder='Введите описание...' onChange={(input) => setAbout(input.target.value)} />
          </div>
        </div>
      </div>
      <div className={styles.team__players}></div>
      <div className="team__submit">
        <div onClick={() => submitInfo()}>
          <UIButton>Сохранить</UIButton>
        </div>
      </div>
    </div>
    :
    status === 'error' ? 'Произошла ошибка, обратитесь к администратору.' : <Loader />
  )
}