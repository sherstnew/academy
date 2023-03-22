import styles from './AdminPlayer.module.scss';
import { useState } from 'react';
import { Loader } from '../Loader/Loader';
import { ACADEMYCONFIG } from '../../academy.config';
import { UIButton } from '../UIButton/UIButton';

export const AdminPlayer = ({player}) => {
    const [img, setImg] = useState(player.image);
    const [name, setName] = useState(player.name);
    const [birth, setBirth] = useState(player.birth);
    const [height, setHeight] = useState(player.height);
    const [position, setPosition] = useState(player.position);
    const [status, setStatus] = useState('success');
    const submitInfo = () => {
        const data = player;
        data.image = img;
        data.name = name;
        data.birth = birth;
        data.height = height;
        data.position = position;
        fetch(`${ACADEMYCONFIG.HOST}/api/players`, {
            method: 'POST',
            headers: {
              "content-type": "application/json",
              "cache-control": "no-cache"
            },
            body: JSON.stringify(data),
          }).then(data => data.json())
          .then(res => {
            if (res.status === 'ok') {
              setStatus('success');
              window.location.href = '/lk';
            } else {
              setStatus('error')
            }
          })
    }
    return (
        status === 'success' ?
        <div className={styles.player}>
            <div className={styles.player__title}>
                {
                    player.name
                }
            </div>
            <div className={styles.player__picture}>
                <img src={img} alt="картинка игрока" className={styles.player__image} />
                <div className={styles.label}>Введите ссылку на картинку:</div>
                <input className={styles.input} placeholder="Введите ссылку" value={img} onChange={evt => setImg(evt.target.value)} />
            </div>
            <div className={styles.player__name}>
                <div className={styles.label}>Введите имя:</div>
                <input className={styles.input} placeholder="Введите имя" value={name} onChange={evt => setName(evt.target.value)} />
            </div>
            <div className={styles.player__birth}>
                <div className={styles.label}>Введите год рождения:</div>
                <input className={styles.input} placeholder="Введите год" value={birth} onChange={evt => setBirth(evt.target.value)} />
            </div>
            <div className={styles.player__height}>
                <div className={styles.label}>Введите рост:</div>
                <input className={styles.input} placeholder="Введите рост (см)" value={height} onChange={evt => setHeight(evt.target.value)} />
            </div>
            <div className={styles.player__position}>
                <div className={styles.label}>Введите амплуа:</div>
                <input className={styles.input} placeholder="Введите амплуа" value={position} onChange={evt => setPosition(evt.target.value)} />
            </div>
            <div onClick={() => submitInfo()}>
                <UIButton>Сохранить</UIButton>
            </div>
        </div>
        :
        status === 'error' ? <div className={styles.error}>Произошла ошибка, проверьте введенные данные или обратитесь к администратору.</div>
        :
        <Loader />
    )
}