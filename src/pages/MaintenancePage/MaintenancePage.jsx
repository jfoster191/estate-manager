import MaintenanceList from "../../components/MaintenanceList/MaintenanceList";
import MaintenanceRequestForm from "../../components/MaintenanceRequestForm/MaintenanceRequestForm";
import { useState } from "react";
import { createContext } from "react";
// import * as propertiesAPI from "../../utilities/properties-api";

export default function MaintenancePage({properties}){
  // const [properties, setProperties] = useState([])
  const UpdateContextM = createContext()
  const [updateM, setUpdateM] = useState(null)

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
      <UpdateContextM.Provider value={updateM}>
        <MaintenanceList />
      </UpdateContextM.Provider>
      <UpdateContextM.Provider value={updateM}>
        <div className="w-2/3">
          <MaintenanceRequestForm properties={properties} updateM={updateM} setUpdateM={setUpdateM} />
        </div>
      </UpdateContextM.Provider>
      </div>
    </div>
  )
}