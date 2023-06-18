import { Header } from './../Header/Header';
import { Footer } from './../Footer/Footer';
import { MenuContext } from './../../contexts/MenuContext';
import { useContext } from 'react';
import { Menu } from '../Menu/Menu';

export const Layout = ({children}) => {

  const { menuOpened } = useContext(MenuContext);

  return (
    <>
      <Header />
      {
        menuOpened
        ?
        <Menu />
        :
        children
      }
      <Footer />
    </>
  )
};