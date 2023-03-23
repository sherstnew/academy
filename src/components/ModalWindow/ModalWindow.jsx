import styles from './ModalWindow.module.scss';

export const ModalWindow = ({window, confirm, decline}) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modal__window}>
        <div className={styles.window__title}>{window.title}</div>
        <div className={styles.window__about}>{window.about}</div>
        <div className={styles.window__choose}>
          <div className={styles.choose__confirm} onClick={confirm}>Подтвердить</div>
          <div className={styles.choose__decline} onClick={decline}>Отклонить</div>
        </div>
      </div>
    </div>
  )
}