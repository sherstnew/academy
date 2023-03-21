import { Header } from '../../components/Header/Header';
import { AdminPlayer } from '../../components/AdminPlayer/AdminPlayer';
import { Footer } from '../../components/Footer/Footer';
import { getPlayers } from '../../utils/getPlayers';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Loader } from '../../components/Loader/Loader';
import styles from './AdminPlayerPage.module.scss';

export const AdminPlayerPage = () => {
    const [player, setPlayer] = useState({});
    const [status, setStatus] = useState('start');
    const [searchParams, setSearchParams] = useSearchParams();
    useEffect(() => {
        setStatus('pending');
        getPlayers(searchParams.get('id'))
        .then(res => {
            setPlayer(res);
            setStatus('success');
        })
        .catch(() => {
            setStatus('error');
        })
    }, [])
    return (
        <>
            <Header />
            <div className={styles.container}>
                {
                    status === 'success' ? <AdminPlayer player={player} /> : <Loader />
                }
            </div>
            <Footer />
        </>
    )
}