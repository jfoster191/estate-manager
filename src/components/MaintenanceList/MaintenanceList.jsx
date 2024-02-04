import { useState, useEffect } from "react";
import * as propertiesAPI from "../../utilities/properties-api";

export default function MaintenanceList(){
  const [properties, setProperties] = useState([])

    useEffect(function(){
    async function getProperties(){
      const properties = await propertiesAPI.getProperties()
      setProperties(properties)
    }
    getProperties()
  }, [])

  let requests = []

  properties.forEach((property) => {
    requests.push(property.maintenanceRequests)
  })

  const flatRequests = requests.flat(requests.length- 1)

  return (
    <div className="bg-white border border-grey shadow-md rounded p-2">
      <h1 className="text-xl text-smokeyTopaz font-bold pb-2">Maintenace List</h1>
      <div className="flex flex-col overflow-y-scroll h-[90%]">
        {flatRequests.map((request, idx) => (
          <div key={idx} className="flex border border-smokeyTopaz rounded mb-1 p-2 gap-2">
            <div className="text-smokeyTopaz font-semibold">{request.title}</div>
            <div>{request.comment}</div>
          </div>
        ))}
      </div>
    </div>
  )
}