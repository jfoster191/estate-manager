import MaintenanceList from "../../components/MaintenanceList/MaintenanceList";
import MaintenanceRequestForm from "../../components/MaintenanceRequestForm/MaintenanceRequestForm";
import { useEffect, useState } from "react";
import * as propertiesAPI from "../../utilities/properties-api";

export default function MaintenancePage(){
  const [properties, setProperties] = useState([])

  useEffect(function(){
    async function getProperties(){
      const properties = await propertiesAPI.getProperties()
      setProperties(properties)
    }
    getProperties()
  }, [])

  return (
    <div className="ml-6 mr-6">
      <h1 className='text-3xl font-bold'>Maintenance Page</h1>
      <div className="flex mt-6">
        <MaintenanceList properties={properties} />
        <MaintenanceRequestForm properties={properties} />
      </div>
    </div>
  )
}