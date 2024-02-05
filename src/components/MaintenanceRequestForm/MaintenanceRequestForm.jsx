import { useState } from "react";
import * as propertiesAPI from '../../utilities/properties-api';

export default function MaintenanceRequestForm ({properties, update, setUpdate}){  
  const [formData, setFormData] = useState({
    property: '',
    title: '',
    comment: '',
  })

  function handleChange(evt){
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
      error: '',
    })
  }

  async function handleSubmit(evt){
    evt.preventDefault();
    await propertiesAPI.addMaintenanceRequest(formData);
    if(update === ""){ setUpdate(null) }
    else{ setUpdate("") } 
  }

  return (
    <div className="bg-white border border-grey shadow-md rounded p-2">
      <h1 className="text-xl text-smokeyTopaz font-bold pb-2">- Maintenance Request -</h1>
      <hr />
      <form className="flex flex-col gap-1 pt-3" autoComplete="off" onSubmit={handleSubmit}>

      <div>
          <label className="text-smokeyTopaz text-xl p-2">Property</label>
          <select className="border border-grey rounded" type="text" name="property" value={formData.property} onChange={handleChange} required>
              <option value="Select">Select</option>
            {properties.map((property, idx) => (
              <option key={idx} value={property._id}>{property.address.street}</option>
              
            ))}
          </select>
        </div>

        <div>
          <label className="text-smokeyTopaz text-xl p-2">Title: </label>
          <input className="border border-grey rounded" type="text" name="title" value={formData.title} onChange={handleChange} required />
        </div>

        <div className="flex flex-col">
          <label className="text-smokeyTopaz text-xl p-2">Comment/Details</label>
          <textarea className="border border-grey rounded h-24 p-1" type="text" name="comment" value={formData.comment} onChange={handleChange} />
        </div>

          <button className="text-smokeyTopaz hover:text-white border border-grey rounded shadow-md from-smokeyTopaz hover:bg-gradient-to-br mt-10" type="submit">Submit</button>

      </form>
      <p className="error-message">&nbsp;{formData.error}</p>
    </div>
  )
}