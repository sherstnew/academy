import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HomePage } from './pages/HomePage/HomePage';
import { TeamsPage } from './pages/TeamsPage/TeamsPage';
import { TeamPage } from './pages/TeamPage/TeamPage';
import { AwardsPage } from './pages/AwardsPage/AwardsPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { LkPage } from './pages/LkPage/LkPage';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/teams' element={<TeamsPage />} />
        <Route path='/team' element={<TeamPage />} />
        <Route path='/awards' element={<AwardsPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/lk' element={<LkPage />} />
      </Routes>
    </BrowserRouter>
  );
}
