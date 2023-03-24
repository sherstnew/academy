import { useEffect, useState } from 'react';
import styles from './AdminTeam.module.scss';
import { UIButton } from '../UIButton/UIButton';
import { Loader } from '../Loader/Loader';
import { ModalWindow } from '../ModalWindow/ModalWindow';
import { ACADEMYCONFIG } from '../../academy.config';
import { Link } from 'react-router-dom';
import { getPlayers } from '../../utils/getPlayers';
import plus from '../../static/icons/plus.svg';
import minus from '../../static/icons/minus.svg';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

export const AdminTeam = ({team, allPlayers}) => {
  const [addStatus, setAddStatus] = useState({status: 'normal', id: ''});
  const [deleteStatus, setDeleteStatus] = useState({status: 'normal', ids: []});
  const [currentTeam, setCurrentTeam] = useState(team);
  const [img, setImg] = useState(team.img);
  const [name, setName] = useState(team.name);
  const [about, setAbout] = useState(team.about);
  const [players, setPlayers] = useState(team.players);
  const [otherPlayers, setOtherPlayers] = useState(allPlayers);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [status, setStatus] = useState('success');

  const addPlayers = () => {
    const new_players = [...players, ...selectedPlayers];
    submitInfo(new_players);
  }

  const selectPlayer = (player, evt) => {
    if (selectedPlayers.includes(player)) {
      selectedPlayers.splice(selectedPlayers.indexOf(player), 1);
      evt.target.style.color = '#000000';
    } else {
      evt.target.style.color = '#a1a1a1';
      selectedPlayers.push(player);
    }
    setSelectedPlayers(selectedPlayers);
  }

  const deletePlayer = (id) => {
    setDeleteStatus({status: 'normal', id: ''});
    let pl = players;
    pl = pl.filter(p => p.id !== id);
    submitInfo(pl);
  }

  const submitInfo = (pl) => {
    setStatus('pending');
    const data = team;
    data.img = img;
    data.name = name;
    data.about = about;
    data.players = pl;
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
      <div className={styles.team__players}>
        <div className={styles.players__title}>Игроки</div>
        {
          players.map(player =>
          <div key={player.id} className={styles.player__wrapper}>
            <Link to={'/lk/player?id=' + player.id} className={styles.player}>
              <div className={styles.player__image} style={{backgroundImage: `url(${ player.image })`}}></div>
              <div className={styles.player__name}>{ player.name }</div>
            </Link>
            <img src={minus} alt="удалить из команды" className={styles.player__delete} onClick={() => setDeleteStatus({status: 'request', id: player.id})} />
          </div>)
        }
        <div className={styles.players__add}>
          <img src={plus} alt="добавить игрока" className={styles.add} onClick={() => setAddStatus({status: 'request', ids: []})} />
        </div>
      </div>
      <div className={styles.team__submit}>
        <div onClick={() => submitInfo(players)}>
          <UIButton>Сохранить</UIButton>
        </div>
      </div>
      {
          deleteStatus.status === 'request' ? <ModalWindow window={{title: 'Вы точно хотите удалить игрока из команды?', about: 'Это действие невозможно отменить, но игрок останется в общем списке.'}} confirm={() => deletePlayer(deleteStatus.id)} decline={() => setDeleteStatus({status: 'normal', id: ''})} /> : ''
      }
      {
        addStatus.status === 'request' ?
        <div className={styles.modal}>
          <div className={styles.modal__window}>
            <div className={styles.window__title}>Добавить игрока</div>
            <input type="text" className={styles.window__search} placeholder='Поиск по игрокам...' onChange={evt => setOtherPlayers(allPlayers.filter(pl => pl.name.toLowerCase().includes(evt.target.value.toLowerCase())))} />
            <div className={styles.window__players}>
              {
                otherPlayers.map(player =>
                <div key={player.id} onClick={evt => selectPlayer(player, evt)} className={cx({player: true, addPlayer: true})}>
                  <div className={styles.player__image} style={{backgroundImage: `url(${ player.image })`}}></div>
                  <div className={styles.player__name}>{ player.name }</div>
                </div>
                )
              }
            </div>
            <div className={styles.window__choose}>
              <div className={styles.choose__confirm} onClick={() => addPlayers()}>Добавить</div>
              <div className={styles.choose__decline} onClick={() => setAddStatus('normal')}>Выйти</div>
            </div>
          </div>
        </div>
        : ''
      }
    </div>
    :
    status === 'error' ? 'Произошла ошибка, обратитесь к администратору.' : <Loader />
  )
}