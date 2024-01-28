import UnitDetails from "../UnitDetails/UnitDetails";
import { Link } from "react-router-dom";
import { useState } from "react"

export default function PropertyDetails({currentProperty}){
  const [unit, setUnit] = useState({})

  async function handleClick(evt) {
    const selectedUnit = await unitsAPI.getUnitById(evt.target.id)
    setUnit(selectedUnit)
  }

  return (
    <div className="flex gap-2 ml-2">
      <div>
      </div>
      <div className="bg-white border border-grey rounded p-4">
        <div>
          <h1 className="text-xl text-smokeyTopaz font-bold pb-1">Property Details</h1>
          <div className="flex gap-1 text-smokeyTopaz text-lg">
            <div>{currentProperty.address.street},</div>
            <div>{currentProperty.address.city},</div>
            <div>{currentProperty.address.state}</div>
            <div>{currentProperty.address.zip}</div>
          </div>
          <div className="font-bold">Select A Unit To View More Details:</div>
        </div>
        <div className="flex flex-col overflow-y-scroll h-96 gap-2 border border-smokeyTopaz rounded p-2">
          {currentProperty.units.map((unit, idx) =>(
            <Link id={unit._id} key={idx} className="border border-grey ml-1 mt-2 hover:bg-grey" onClick={handleClick}>
              <div id={unit._id} className="font-bold">Unit {unit.unitNum} is {unit.occupied ? 
              'Occupied':'Unoccupied'  }</div>
              {unit.occupied ? 
                <>
                  <div id={unit._id}>Lease Start Date: {unit.leaseStart.slice(0, 10)}</div>
                  <div id={unit._id}>Lease End Date: {unit.leaseEnd.slice(0, 10)}</div>
                </>
                :
                null
              }
            </Link>
          ))}
        </div>
      </div>
      <UnitDetails />
    </div>
  )
}