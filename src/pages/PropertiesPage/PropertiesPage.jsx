import { useEffect, useState } from "react";
import PropertiesList from "../../components/PropertiesList/PropertiesList";
import PropertyDetails from "../../components/PropertyDetails/PropertyDetails";
import * as propertiesAPI from "../../utilities/properties-api";

export default function PropertiesPage({properties}) {
  const [currentProperty, setCurrentProperty] = useState(null)

  return (
    <div>
      <h1 className='text-3xl font-bold'>Properties Page</h1>
      <div className="flex">
      <aside className="flex flex-col justify-start bg-white border border-grey rounded p-4 w-1/3 ml-6">
        <PropertiesList properties={properties} setCurrentProperty={setCurrentProperty} />
      </aside>
      {currentProperty ? 
        <PropertyDetails currentProperty={currentProperty} />
        :
        <div>Select A Property to View It's Details</div>
      }
      </div>
    </div>
  )
}