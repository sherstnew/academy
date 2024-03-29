import styles from './AdminPlayer.module.scss';
import { useEffect, useState } from 'react';
import { Loader } from '../Loader/Loader';
import { ACADEMYCONFIG } from '../../academy.config';
import { UIButton } from '../UIButton/UIButton';
import { ModalWindow } from '../ModalWindow/ModalWindow';
import deleteIcon from '../../static/icons/delete.svg';
import { animateScroll } from 'react-scroll';
import { Error } from '../../components/Error/Error';
import { parse } from 'cookie';
import { useSearchParams } from 'react-router-dom';

export const AdminPlayer = ({player}) => {
    const [deleteStatus, setDeleteStatus] = useState('normal');
    const [img, setImg] = useState(player.image);
    const [name, setName] = useState(player.name);
    const [birth, setBirth] = useState(player.birth);
    const [height, setHeight] = useState(player.height);
    const [position, setPosition] = useState(player.position);
    const [status, setStatus] = useState('success');
    const [searchParams] = useSearchParams();

    useEffect(() => {
        animateScroll.scrollToTop({duration: 0});
    }, []);
    const deletePlayer = () => {
        setStatus('pending');
        fetch(`${ACADEMYCONFIG.HOST}/api/players?id=${player._id}`, {
            method: 'DELETE',
            headers: {
                "content-type": "application/json",
                "cache-control": "no-cache",
                "academy_token": parse(document.cookie).ACADEMY_TOKEN
            },
        }).then(data => data.json())
        .then(res => {
            if (res.status === 'ok') {
                window.location.href = '/lk';
                setStatus('success');
            } else {
                setStatus('error');
            }
        })
    };

    const submitInfo = () => {
        setStatus('pending');
        const data = player;
        data.image = img;
        data.name = name;
        data.birth = birth;
        data.height = height;
        data.position = position;
        fetch(`${ACADEMYCONFIG.HOST}/api/players`, {
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
              window.location.href = '/lk';
            } else {
              setStatus('error')
            }
          })
    };

    const createPlayer = () => {
        setStatus('pending');
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
              setStatus('error')
            }
          })
    }

    return (
        status === 'success' ?
        <>
        <div className={styles.player}>
            <div className={styles.player__title}>
                <div className={styles.title__name}>{ player.name }</div>
                <img src={deleteIcon} alt="удалить игрока" className={styles.title__delete} onClick={() => setDeleteStatus('request')} />
            </div>
            <div className={styles.player__picture}>
                <img src={img} alt="картинка игрока" className={styles.player__image} />
                <div className={styles.label}>Введите ссылку на картинку:</div>
                <input type="url" className={styles.input} placeholder="Введите ссылку" value={img} onChange={evt => setImg(evt.target.value)} />
            </div>
            <div className={styles.player__name}>
                <div className={styles.label}>Введите имя:</div>
                <input type="text" className={styles.input} placeholder="Введите имя" value={name} onChange={evt => setName(evt.target.value)} />
            </div>
            <div className={styles.player__birth}>
                <div className={styles.label}>Введите дату рождения:</div>
                <input type="text" className={styles.input} placeholder="Введите дату" value={birth} onChange={evt => setBirth(evt.target.value)} />
            </div>
            <div className={styles.player__height}>
                <div className={styles.label}>Введите рост:</div>
                <input type="number" className={styles.input} placeholder="Введите рост (см)" value={height} onChange={evt => setHeight(evt.target.value)} />
            </div>
            <div className={styles.player__position}>
                <div className={styles.label}>Введите амплуа:</div>
                <input className={styles.input} placeholder="Введите амплуа" value={position} onChange={evt => setPosition(evt.target.value)} />
            </div>
            <UIButton onClick={() => searchParams.get('id') === 'new' ? createPlayer() : submitInfo()}>
                {
                    searchParams.get('id') === 'new' ? 'Создать' : 'Сохранить'
                }
            </UIButton>
        </div>
        {
            deleteStatus === 'request' ? <ModalWindow window={{title: 'Вы точно хотите удалить игрока?', about: 'Это действие невозможно отменить'}} confirm={() => deletePlayer()} decline={() => setDeleteStatus('normal')} /> : ''
        }
        </>
        :
        status === 'error' ? <Error />
        :
        <Loader />
    )
}