import * as propertiesAPI from '../../utilities/properties-api';
import PropertiesList from '../../components/PropertiesList/PropertiesList';
import MaintenanceList from '../../components/MaintenanceList/MaintenanceList';
import { useEffect, useState } from 'react';
import ServiceList from '../../components/ServiceList/ServiceList';

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
    <div className='bg-hunter h-100 ml-3 mr-3'>
      <h1 className='text-3xl font-bold'>Dashboard</h1>
      <div className="flex gap-4">
        <aside className="flex flex-col justify-start bg-white border border-grey rounded p-4 mt-6 w-4/5 h-[90%]">
          <PropertiesList properties={properties} />
        </aside>
          <div className="mt-6 w-4/5">
            <MaintenanceList properties={properties} />
          </div>
          <div className='mt-6 w-4/5'>
            <ServiceList />
          </div>
      </div>
    </div>
  ) 
}