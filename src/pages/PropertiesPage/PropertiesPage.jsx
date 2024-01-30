import { useEffect, useState } from "react";
import PropertiesList from "../../components/PropertiesList/PropertiesList";
import PropertyDetails from "../../components/PropertyDetails/PropertyDetails";
import * as propertiesAPI from "../../utilities/properties-api";

export default function PropertiesPage({properties}) {
  const [currentProperty, setCurrentProperty] = useState(null)

  return (
    <>
    <h1 className='text-3xl font-bold'>Properties Page</h1>
    <div className="flex h-lvh">
      <div className="flex mt-6 gap-4">
        <aside className="flex flex-col justify-start bg-white border border-grey rounded p-4 ml-6 h-4/5">
          <PropertiesList properties={properties} setCurrentProperty={setCurrentProperty} />
        </aside>
        {currentProperty ? 
          <div className="w-2/3">
            <PropertyDetails currentProperty={currentProperty} />
          </div>
          :
          <div className="ml-60 mt-40 text-xl">Select A Property to View It's Details</div>
        }
      </div>
    </div>
    </>
  )
}