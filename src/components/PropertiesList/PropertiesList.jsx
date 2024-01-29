import { useEffect, useState } from "react";
import * as propertiesAPI from "../../utilities/properties-api";
import { Link } from "react-router-dom";

export default function PropertiesList({setShowAddProperty, setCurrentProperty, properties}){
  // const [properties, setProperties] = useState([])

  // useEffect(function(){
  //   async function getProperties(){
  //     const properties = await propertiesAPI.getProperties()
  //     setProperties(properties)
  //   }
  //   getProperties()
  // }, [])

  function handleShowNewProp(){
    setShowAddProperty(true)
  }

  async function handleClick(evt){
    const property = await propertiesAPI.getPropertyId(evt.target.id)
    setCurrentProperty(property)
  }

  return (
    <div>
    {JSON.stringify(properties) === '{}' ?
      <div>No Properties Yet</div>
      :
      <>
      <h1 className="text-xl text-smokeyTopaz font-bold pb-2">Properties List</h1>
      <div className="flex flex-col gap-2 h-96 overflow-y-scroll">
        {properties.map((property, idx) => (
          <Link id={property._id} key={idx} className="border border-smokeyTopaz rounded hover:bg-smokeyTopaz hover:text-white hover:opacity-75 hover:border-grey shadow-md hover:shadow-lg" onClick={handleClick}>
            <div id={property._id}>{property.address.street}</div>
            <div id={property._id} className="flex gap-2 justify-center -mt-2">
              <div id={property._id}>{property.address.city},</div>
              <div id={property._id}>{property.address.state}</div>
              <div id={property._id}>{property.address.zip}</div>
            </div>
          </Link>
        ))}
      </div>
      </>
    }

    {window.location.href.slice(22,39) === 'manage-properties' ?
      <div className="border border-smokeyTopaz rounded hover:bg-smokeyTopaz hover:text-white hover:opacity-75 hover:border-grey shadow-md hover:shadow-lg mt-4 pt-2 pb-2" onClick={handleShowNewProp}>+ Add A Property +</div>
      :
      <div className="mt-4 pt-2 pb-2"> </div>
    }
    </div>
  )
}