import { useEffect, useState } from "react";
import * as propertiesAPI from "../../utilities/properties-api";
import { Link } from "react-router-dom";

export default function PropertiesList({setShowAddProperty}){
  const [properties, setProperties] = useState([])

  useEffect(function(){
    async function getProperties(){
      const properties = await propertiesAPI.getProperties()
      setProperties(properties)
    }
    getProperties()
  }, [])

  function handleShowNewProp(){
    setShowAddProperty(true)
  }

  return (
    <div>
    <h1 className="text-xl text-smokeyTopaz font-bold pb-2">Properties List</h1>
    <div className="flex flex-col gap-2 h-96 overflow-y-scroll">
      {properties.map((property, idx) => (
        <Link key={idx} className="border border-smokeyTopaz rounded hover:bg-smokeyTopaz hover:text-white hover:opacity-75 hover:border-grey shadow-md hover:shadow-lg">
          <div>{property.address.street}</div>
          <div className="flex gap-2 justify-center -mt-2">
            <div>{property.address.city},</div>
            <div>{property.address.state}</div>
            <div>{property.address.zip}</div>
          </div>
        </Link>
      ))}
    </div>
    {window.location.href.slice(22,39) === 'manage-properties' ?
      <div className="border border-smokeyTopaz rounded hover:bg-smokeyTopaz hover:text-white hover:opacity-75 hover:border-grey shadow-md hover:shadow-lg mt-4 pt-2 pb-2" onClick={handleShowNewProp}>+ Add A Property +</div>
      :
      <div className="mt-4 pt-2 pb-2"> </div>
    }
    </div>
  )
}