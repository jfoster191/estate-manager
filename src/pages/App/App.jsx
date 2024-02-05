import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import DashboardPage from '../DashboardPage/DashboardPage';
import PropertiesPage from '../PropertiesPage/PropertiesPage';
import ManagePropertiesPage from '../ManagePropertiesPage/ManagePropertiesPage';
import TenantsPage from '../TenantsPage/TenantsPage';
import MaintenancePage from '../MaintenancePage/MaintenancePage';
import * as propertiesAPI from '../../utilities/properties-api';
import ServicePage from '../ServicePage/ServicePage'
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-services';

function App() {
  const [ user, setUser ] = useState(getUser());
  const [properties, setProperties] = useState([])

  useEffect(function(){
    async function getProperties(){
      const properties = await propertiesAPI.getProperties()
      setProperties(properties)
    }
    getProperties()
  }, [])

  return (
    <main className="App bg-hunter h-full w-full">
      { user ?
      <>
        <NavBar user={user} setUser={setUser} setProperties={setProperties} />
        <Routes>
          <Route path='/dashboard' element={<DashboardPage />} />
          <Route path='/' element={<DashboardPage />} />
          <Route path='/properties' element={<PropertiesPage properties={properties} />} />
          <Route path='/manage-properties' element={<ManagePropertiesPage properties={properties} setProperties={setProperties}/>} />
          <Route path='/maintenance' element={<MaintenancePage properties={properties} />} />
          <Route path='/service' element={<ServicePage properties={properties} />} />
          <Route path='/manage-tenants' element={<TenantsPage properties={properties} />} />
        </Routes>
      </>
        :
          <AuthPage setUser={setUser} user={user} />
      }
    </main>
  );
}

export default App;
