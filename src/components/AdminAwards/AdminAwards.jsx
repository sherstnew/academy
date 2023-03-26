import { useState } from 'react';
import { Award } from '../../components/Award/Award';
import styles from './AdminAwards.module.scss';
import { Loader } from '../Loader/Loader';
import { Error } from '../Error/Error';
import { parse } from 'cookie';
import deleteIcon from '../../static/icons/delete.svg';
import plus from '../../static/icons/plus.svg';
import { ACADEMYCONFIG } from '../../academy.config';
import { ModalWindow } from '../ModalWindow/ModalWindow';
import { v4 } from 'uuid';

export const AdminAwards = ({awards}) => {
  const [showEdit, setShowEdit] = useState(false);
  const [deleteAward, setDeleteAward] = useState(false);
  const [currentAward, setCurrentAward] = useState(awards[0]);
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('success');

  const editAward = (award) => {
    setCurrentAward(award);
    setName(award.name);
    setAbout(award.about);
    setDate(award.date);
    setShowEdit(true);
  }

  const deleteCurrentAward = () => {
    fetch(`${ACADEMYCONFIG.HOST}/api/awards?id=${currentAward.id}`, {
      method: 'DELETE',
      headers: {
        "content-type": "application/json",
        "cache-control": "no-cache",
        "academy_token": parse(document.cookie).ACADEMY_TOKEN
      },
    }).then(data => data.json())
    .then(res => {
      if (res.status === 'ok') {
        setStatus('success');
        window.location.href = '/lk';
      } else {
        setStatus('error');
      }
    })
  }

  const submitInfo = () => {
    setStatus('pending');
    const data = currentAward;
    data.name = name;
    data.about = about;
    data.date = date;
    fetch(`${ACADEMYCONFIG.HOST}/api/awards`, {
        method: 'POST',
        headers: {
          "content-type": "application/json",
          "cache-control": "no-cache",
          "academy_token": parse(document.cookie).ACADEMY_TOKEN
        },
        body: JSON.stringify(data),
      }).then(data => data.json())
      .then(res => {
        if (res.status === 'ok') {
          setStatus('success');
          window.location.href = '/lk';
        } else {
          setStatus('error');
        }
      })
};

  return (
    status === 'success' ? <div className={styles.awards}>
    <div className={styles.awards__title}>Награды</div>
    <img src={plus} alt="добавить игрока" className={styles.addAward} onClick={() => editAward({id: v4(), name: 'Новая награда', about: 'Тут ничего нет', date: '01.01.2023'})} />
    <div className={styles.awards__list}>
      {
        awards.map(award => <div key={award.id} onClick={() => editAward(award)}><Award award={award} /></div>)
      }
    </div>
      {
        deleteAward ? <ModalWindow window={{title: 'Вы точно хотите удалить эту награду?', about: 'Это действие невозможно будет отменить'}} confirm={() => deleteCurrentAward()} decline={() => setDeleteAward(false)} /> : ''
      }
      {
        showEdit ?
        <div className={styles.modal}>
          <div className={styles.modal__window}>
            <div className={styles.window__title}>Редактировать награду</div>
            <div className={styles.window__edit}>
              <div className={styles.label}>Название награды</div>
              <input type="text" className={styles.input} value={name} onChange={evt => setName(evt.target.value)} placeholder='Введите название' />
            </div>
            <div className={styles.window__edit}>
              <div className={styles.label}>Описание награды:</div>
              <input type="text" className={styles.input} value={about} onChange={evt => setAbout(evt.target.value)} placeholder='Введите описание' />
            </div>
            <div className={styles.window__edit}>
              <div className={styles.label}>Дата награды</div>
              <input type="text" className={styles.input} value={date} onChange={evt => setDate(evt.target.value)} />
            </div>
            <div className={styles.window__choose}>
              <div className={styles.choose__confirm} onClick={() => submitInfo()}>Подтвердить</div>
              <div className={styles.choose__decline} onClick={() => setShowEdit(false)}>Выйти</div>
              <img src={deleteIcon} alt="удалить" className={styles.choose__delete} onClick={() => setDeleteAward(true)} />
            </div>
          </div>
        </div> : ''
      }
  </div>
  :
  status === 'error' ? <Error />
  :
  <Loader />
  )
}