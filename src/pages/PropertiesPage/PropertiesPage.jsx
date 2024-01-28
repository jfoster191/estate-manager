import { useEffect, useState } from "react";
import PropertiesList from "../../components/PropertiesList/PropertiesList";
import PropertyDetails from "../../components/PropertyDetails/PropertyDetails";
import * as propertiesAPI from "../../utilities/properties-api";

export default function PropertiesPage() {
  const [properties, setProperties] = useState([])
  const [currentProperty, setCurrentProperty] = useState(null)

  useEffect(function(){
    async function getProperties(){
      const properties = await propertiesAPI.getProperties()
      setProperties(properties)
      async function getCurrentProperty(id){
        const property = await propertiesAPI.getPropertyId(id)
        setCurrentProperty(property)
      }
      const last = properties.length - 1
      const p = properties[last]
      const id = p._id
      console.log(id)
      getCurrentProperty(id)
    }
    getProperties()

  }, [])
  
  return (
    <div>
      <h1 className='text-3xl font-bold'>Properties Page</h1>
      <div className="flex">
      <aside className="flex flex-col justify-start bg-white border border-grey rounded p-4 w-1/3 ml-6">
        <PropertiesList />
      </aside>
        <PropertyDetails currentProperty={currentProperty} />
      </div>
    </div>
  )
}