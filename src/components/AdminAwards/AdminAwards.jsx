import { useState } from 'react';
import styles from './AdminAwards.module.scss';
import { Loader } from '../Loader/Loader';
import { Error } from '../Error/Error';
import { parse } from 'cookie';
import deleteIcon from '../../static/icons/delete.svg';
import plus from '../../static/icons/plus.svg';
import { ACADEMYCONFIG } from '../../academy.config';
import { ModalWindow } from '../ModalWindow/ModalWindow';
import { AwardCard } from '../AwardCard/AwardCard';

export const AdminAwards = ({awards}) => {
  const [showEdit, setShowEdit] = useState(false);
  const [deleteAward, setDeleteAward] = useState(false);
  const [currentAward, setCurrentAward] = useState(awards[0]);
  const [img, setImg] = useState('');
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('success');

  const showModal = (award) => {
    let currentDate = new Date();
    let currentMonth = String(currentDate.getMonth() + 1);
    if (currentMonth.length === 1) {
      currentMonth = '0' + currentMonth;
    }
    currentDate = String(currentDate.getDate()) + '.' + currentMonth + '.' + String(currentDate.getFullYear())
    setCurrentAward(award);
    setImg(award.img);
    setName(award.name);
    setAbout(award.about);
    setDate(award.date ? award.date : currentDate);
    setShowEdit(true);
  }

  const deleteCurrentAward = () => {
    fetch(`${ACADEMYCONFIG.HOST}/api/awards?id=${currentAward._id}`, {
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
        window.location.reload();
      } else {
        setStatus('error');
      }
    });
  }

  const createAward = () => {
    setStatus('pending');
    const data = currentAward;
    data.img = img;
    data.name = name;
    data.about = about;
    data.date = date;
    delete data.status;
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
        window.location.reload();
      } else {
        setStatus('error');
      }
    });
  };

  const editAward = () => {
    setStatus('pending');
    const data = currentAward;
    data.img = img;
    data.name = name;
    data.about = about;
    data.date = date;
    fetch(`${ACADEMYCONFIG.HOST}/api/awards`, {
        method: 'PATCH',
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
          window.location.reload();
        } else {
          setStatus('error');
        }
      });
  };

  return (
    status === 'success' ? <div className={styles.awards}>
    <div className={styles.awards__title}>Награды</div>
    <img src={plus} alt="добавить игрока" className={styles.addAward} onClick={() => showModal({status: 'new', name: 'Новая награда', about: 'Новое описание', date: date})} />
    <div className={styles.awards__list}>
      {
        awards.map(award => <div key={award._id} onClick={() => showModal(award)}><AwardCard award={award} /></div>)
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
              <div className={styles.label}>Картинка награды</div>
              <input type="text" className={styles.input} value={img} onChange={evt => setImg(evt.target.value)} placeholder='Введите ссылку' />
            </div>
            <div className={styles.window__edit}>
              <div className={styles.label}>Название награды</div>
              <input type="text" className={styles.input} value={name} onChange={evt => setName(evt.target.value)} placeholder='Введите название' />
            </div>
            <div className={styles.window__edit}>
              <div className={styles.label}>Описание награды</div>
              <input type="text" className={styles.input} value={about} onChange={evt => setAbout(evt.target.value)} placeholder='Введите описание' />
            </div>
            <div className={styles.window__edit}>
              <div className={styles.label}>Дата награды</div>
              <input type="text" className={styles.input} value={date} onChange={evt => setDate(evt.target.value)} />
            </div>
            <div className={styles.window__choose}>
              <div className={styles.choose__confirm} onClick={() => currentAward.status === 'new' ? createAward() : editAward()}>Подтвердить</div>
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