import MaintenanceList from "../../components/MaintenanceList/MaintenanceList";
import MaintenanceRequestForm from "../../components/MaintenanceRequestForm/MaintenanceRequestForm";
import { useState } from "react";
import { createContext } from "react";
// import * as propertiesAPI from "../../utilities/properties-api";

export default function MaintenancePage({properties}){
  // const [properties, setProperties] = useState([])
  const UpdateContext = createContext()
  const [update, setUpdate] = useState(null)

  // useEffect(function(){
  //   async function getProperties(){
  //     const properties = await propertiesAPI.getProperties()
  //     setProperties(properties)
  //   }
  //   getProperties()
  // }, [])

  return (
    <div className="flex flex-col justify-center items-center ml-3 mr-3">
      <h1 className='text-3xl font-bold'>Maintenance Page</h1>
      <div className="flex mt-6 gap-4">
      <UpdateContext.Provider value={update}>
        <MaintenanceList />
      </UpdateContext.Provider>
      <UpdateContext.Provider value={update}>
        <div className="w-2/3">
          <MaintenanceRequestForm properties={properties} update={update} setUpdate={setUpdate} />
        </div>
      </UpdateContext.Provider>
      </div>
    </div>
  )
}