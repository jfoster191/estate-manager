import { useEffect, useState } from "react";
import * as propertiesAPI from "../../utilities/properties-api";
import { Link } from "react-router-dom";

export default function PropertiesList(){
  const [properties, setProperties] = useState([])

  useEffect(function(){
    async function getProperties(){
      const properties = await propertiesAPI.getProperties()
      setProperties(properties)
    }
    getProperties()
  }, [])

  return (
    <>
    <h1 className="text-xl text-smokeyTopaz font-bold pb-2">Properties List</h1>
    <div className="flex flex-col gap-2">
      {properties.map((property) => (
        <Link className="border border-smokeyTopaz rounded hover:bg-smokeyTopaz hover:text-white hover:opacity-75 hover:border-grey shadow-md hover:shadow-lg">
          <div>{property.address.street}</div>
          <div className="flex gap-2 justify-center -mt-2">
            <div>{property.address.city},</div>
            <div>{property.address.state}</div>
            <div>{property.address.zip}</div>
          </div>
        </Link>
      ))}
    </div>
    </>
  )
}