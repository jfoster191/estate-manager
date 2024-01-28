import { useState } from "react";
import AddPropertyForm from "../../components/AddPropertyForm/AddPropertyForm";
import AddUnitForm from "../../components/AddUnitForm/AddUnitForm";
import PropertiesList from "../../components/PropertiesList/PropertiesList";
import PropertyDetails from "../../components/PropertyDetails/PropertyDetails";

export default function ManagePropertiesPage() {
  const [unitNums, setUnitNums] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [currentProperty, setCurrentProperty] = useState(null)
  const [showAddProperty, setShowAddProperty] = useState(false)

  return (
    <div className="h-100">
      <h1 className='text-3xl font-bold mb-4'>Manage Properties</h1>
      <div className="flex">
      <aside className="flex flex-col justify-start bg-white border border-grey rounded p-4 w-1/3 ml-6 mr-2">
        <PropertiesList setShowAddProperty={setShowAddProperty} />
      </aside>
      {showAddProperty ? 
        <>
          <div className="flex flex-wrap gap-2">
            <AddPropertyForm 
            setUnitNums={setUnitNums} 
            setCurrentProperty={setCurrentProperty}
            />
            {unitNums ? 
              unitNums.map((unit, idx) => (
                idx === currentPage ? 
                <div key={idx} id={idx}>
                  <AddUnitForm 
                  idx={idx} 
                  setCurrentPage={setCurrentPage}
                  currentPage={currentPage} 
                  unitNums={unitNums}
                  currentProperty={currentProperty}
                  /> 
                </div>
                :
                null
              ))
              : null
            }
          </div>
        </>
        :
        <PropertyDetails />
      }
      </div>
    </div>
  )
}