import styles from './UIButton.module.scss';

export const UIButton = ({children}) => {
  return (
    <button className={styles.button}>{children}</button>
  )
}