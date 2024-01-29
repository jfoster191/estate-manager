import * as propertiesAPI from '../../utilities/properties-api';
import PropertiesList from '../../components/PropertiesList/PropertiesList';
import MaintenanceList from '../../components/MaintenanceList/MaintenanceList';
import UpcomingRent from '../../components/UpcomingRent/UpcomingRent';
import { useEffect, useState } from 'react';

export default function DashboardPage() {
  const [properties, setProperties] = useState([])

  useEffect(function(){
    async function getProperties(){
      const properties = await propertiesAPI.getProperties()
      setProperties(properties)
    }
    getProperties()
  }, [])

  return(
    <div className=''>
      <h1 className='text-3xl font-bold'>Dashboard</h1>
      <div className="flex h-100">
        <aside className="flex flex-col justify-start bg-white border border-grey rounded p-4 w-1/3 ml-6 mt-6 h-[90%]">
          <PropertiesList properties={properties} />
        </aside>
        <div>
          <div className="flex flex-col justify-start bg-white border border-grey rounded p-4 w-2/3 m-6">
            <MaintenanceList />
          </div>
          <div className="flex flex-col justify-start bg-white border border-grey rounded p-4 w-2/3 m-6">
            <UpcomingRent properties={properties} />
          </div>
        </div>
      </div>
    </div>
  ) 
}