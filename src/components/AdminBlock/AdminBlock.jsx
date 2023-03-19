import { useState } from 'react';
import styles from './AdminBlock.module.scss';
import { AdminTeams } from '../AdminTeams/AdminTeams';

export const AdminBlock = ({admin}) => {
  const [currentAdmin, setCurrentAdmin] = useState(1);
  return (
    <div className={styles.adminBlock}>
      <div className={styles.greeting}>Добрый день, {admin.full_name}!</div>
      {
        currentAdmin === 1 ? <AdminTeams /> : ''
      }
    </div>
  )
}