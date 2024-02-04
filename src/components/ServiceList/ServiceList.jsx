import { useEffect, useState } from "react"
import * as unitsAPI from "../../utilities/units-api"

export default function ServiceList(){
  const [units, setUnits] = useState([])
  let services = []
  useEffect(function(){
    async function getUnits(){
      const units = await unitsAPI.getUnits()
      setUnits(units)
    }
    getUnits()
  }, [])
  
  units.forEach((unit) => {
    if(unit.service.length){
      services.push(unit.service)
    }
  })
  const flatServices = services.flat(services.length-1)
  console.log(flatServices)

  return (
    <div className="bg-white border border-grey shadow-md rounded p-2 h-[30.5rem]">
      <h1 className="text-xl text-smokeyTopaz font-bold pb-2">Service List</h1>
      <div className="flex flex-col gap-2 overflow-y-scroll h-[90%]">
        {flatServices.map((service, idx) => (
          <div key={idx} className="border border-smokeyTopaz rounded p-2">
            <div>{service.title}</div>
            <div>Status: {service.repairStatus}</div>
            <div>Date Reported: {service.dateReport.slice(0,10)}</div>
            <div>{service.comment}</div>
            {service.repairStatus === 'Resolved' ? <div>Date Resolved: {service.dateReport.slice(0,10)}</div> : null}
          </div>
        ))}
      </div>
    </div>
  )
}