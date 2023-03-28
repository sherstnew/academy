import styles from './MapBlock.module.scss';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export const MapBlock = () => {
  return (
    <div className={styles.mapBlock}>
      <YMaps>
        <div className={styles.about}>
          <div className={styles.about__title}>Где мы находимся?</div>
          <div className={styles.about__text}>Все группы Академии регулярно тренируются в МУ СК "Десна", который расположен по адресу 31, стр. 3, посёлок Знамя Октября.</div>
        </div>
        <Map defaultState={{ center: [55.473311, 37.541674], zoom: 17 }} className={styles.map}>
          <Placemark geometry={[55.473311, 37.541674]} />
        </Map>
      </YMaps>
    </div>
  )
}