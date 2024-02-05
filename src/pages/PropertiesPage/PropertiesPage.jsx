import { useState } from "react";
import PropertiesList from "../../components/PropertiesList/PropertiesList";
import PropertyDetails from "../../components/PropertyDetails/PropertyDetails";

export default function PropertiesPage({properties}) {
  const [currentProperty, setCurrentProperty] = useState(null)

  return (
    <div className="w-lvw">
      <h1 className='text-3xl font-bold'>Properties Page</h1>
      <div className="flex mt-6 h-100">
        <aside className="flex flex-col justify-start bg-white border border-grey rounded p-4 ml-6 w-1/3 h-[90%]">
          <PropertiesList properties={properties} setCurrentProperty={setCurrentProperty} />
        </aside>
        {currentProperty ? 
          <div className="h-[90%]">
            <PropertyDetails currentProperty={currentProperty} />
          </div>
          :
          <div className="ml-60 mt-40 text-xl">Select A Property to View It's Details</div>
        }
      </div>
    </div>
  )
}