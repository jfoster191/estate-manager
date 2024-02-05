import { useState, useEffect } from "react";
import * as propertiesAPI from "../../utilities/properties-api";

export default function MaintenanceList(){
  const [properties, setProperties] = useState([])

  // const [formData, setFormData] = useState({
  //   repairStatus: ''
  // })

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

  // function handleChange(evt){
  //   setFormData({
  //     ...formData,
  //     [evt.target.name]: evt.target.value,
  //     error: '',
  //   })
  // }
  // async function handleSubmit(evt){
  //   evt.preventDefault()
  // }

  return (
    <div className="bg-white border border-grey shadow-md rounded p-2 h-[30.5rem]">
      <h1 className="text-xl text-smokeyTopaz font-bold pb-2">Maintenace List</h1>
      <div className="flex flex-col overflow-y-scroll h-[90%]">
        {flatRequests.map((request, idx) => (
          <div key={idx} className="flex flex-col border border-smokeyTopaz rounded mb-1 p-2 ">
            <div className="text-smokeyTopaz font-semibold">{request.title}</div>
            <div>{request.comment}</div>
            {/* <div className="flex gap-2 justify-center">
              <div>Current Status: {request.repairStatus}</div>|
              <form onSubmit={handleSubmit}>
                <label>Update Status: </label>
                <select className="border rounded" name="repairStatus" value={formData.repairStatus} onChange={handleChange}>
                  <option value="New">New</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Resolved">Completed</option>
                </select>
              </form>
            </div> */}
            <div>Date Created: {request.createdAt.slice(0,10)}</div>
          </div>
        ))}
      </div>
    </div>
  )
}