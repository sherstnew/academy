import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HomePage } from './pages/HomePage/HomePage';
import { TeamsPage } from './pages/TeamsPage/TeamsPage';
import { TeamPage } from './pages/TeamPage/TeamPage';
import { AwardsPage } from './pages/AwardsPage/AwardsPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { LkPage } from './pages/LkPage/LkPage';
import { AdminTeamPage } from './pages/AdminTeamPage/AdminTeamPage';
import { AdminPlayerPage } from './pages/AdminPlayerPage/AdminPlayerPage';
import { CoachPage } from './pages/CoachPage/CoachPage';
import { CampPage } from './pages/CampPage/CampPage';
import { useState } from 'react';
import { MenuContext } from './contexts/MenuContext';

export const App = () => {

  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <MenuContext.Provider value={{menuOpened: menuOpened, setMenuOpened: setMenuOpened}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/teams' element={<TeamsPage />} />
          <Route path='/team' element={<TeamPage />} />
          <Route path='/awards' element={<AwardsPage />} />
          <Route path='/coaches' element={<CoachPage />} />
          <Route path='/camp' element={<CampPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/lk' element={<LkPage />} />
          <Route path='/lk/team' element={<AdminTeamPage />} />
          <Route path='/lk/player' element={<AdminPlayerPage />} />
        </Routes>
      </BrowserRouter>
    </MenuContext.Provider>
  );
}
