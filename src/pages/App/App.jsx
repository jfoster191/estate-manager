import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import DashboardPage from '../DashboardPage/DashboardPage';
import PropertiesPage from '../PropertiesPage/PropertiesPage';
import MaintenancePage from '../MaintenancePage/MaintenancePage';
import ServicePage from '../ServicePage/ServicePage'
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-services';


function App() {
  const [ user, setUser ] = useState(getUser());

  return (
    <main className="App bg-hunter">
      { user ?
      <>
        <NavBar user={user} setUser={setUser} />
        <Routes>
          <Route path='/dashboard' element={<DashboardPage />} />
          <Route path='/properties' element={<PropertiesPage />} />
          <Route path='/maintenance' element={<MaintenancePage />} />
          <Route path='/service' element={<ServicePage />} />
        </Routes>
      </>
        :
          <AuthPage setUser={setUser} user={user} />
      }
    </main>
  );
}

export default App;
