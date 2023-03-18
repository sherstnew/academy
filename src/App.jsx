import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HomePage } from './pages/HomePage/HomePage';
import { TeamsPage } from './pages/TeamsPage/TeamsPage';
import { TeamPage } from './pages/TeamPage/TeamPage';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/teams' element={<TeamsPage />} />
        <Route path='/team' element={<TeamPage />} />
      </Routes>
    </BrowserRouter>
  );
}
