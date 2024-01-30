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
    <div className='bg-hunter'>
      <h1 className='text-3xl font-bold'>Dashboard</h1>
      <div className="flex h-100 gap-4">
        <aside className="flex flex-col justify-start bg-white border border-grey rounded p-4 w-3/6 ml-6 mt-6 h-[90%]">
          <PropertiesList properties={properties} />
        </aside>
        <div>
          <div className="mt-6 mr-6">
            <MaintenanceList properties={properties} />
          </div>
          <div>
            <UpcomingRent properties={properties} />
          </div>
        </div>
      </div>
    </div>
  ) 
}