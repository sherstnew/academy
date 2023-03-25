import styles from './UIButton.module.scss';

export const UIButton = ({children, onClick}) => {
  return (
    <button onClick={onClick} className={styles.button}>{children}</button>
  )
}