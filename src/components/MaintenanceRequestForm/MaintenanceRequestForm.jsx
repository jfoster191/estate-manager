import { useState } from "react";
import DatepickerR from "react-tailwindcss-datepicker";
import * as propertiesAPI from '../../utilities/properties-api';

export default function MaintenanceRequestForm ({properties, updateM, setUpdateM}){  
  const [formData, setFormData] = useState({
    property: '',
    title: '',
    comment: '',
    // dateResolved: null,
    // repairCost: '',
    // amount: '',
    // dueDate: null
  })

  const [value, setValue] = useState({
    startDate: null, //new Date(),
    endDate: null, //new Date().setMonth(11)
  });
  const handleValueChange = newValue => {
    //console.log("newValue:", newValue);
    setValue(newValue);
  };

  function handleChange(evt){
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
      // dateResolved: value,
      // currentProperty: currentProperty,
      error: '',
    })
  }

  async function handleSubmit(evt){
    evt.preventDefault();
    // setCurrentPage(currentPage+1)
    await propertiesAPI.addMaintenanceRequest(formData);
    if(updateM === ""){ setUpdateM(null) }
    else{ setUpdateM("") } 
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

        {/* <div className="text-smokeyTopaz text-xl">Date Resolved</div>
          <div>
            <DatepickerR
            primaryColor="red"
            useRange={false}
            asSingle={true}
            popoverDirection="down"
            value={value} 
            onChange={handleValueChange}
            />
        </div>

        <div>
          <label className="text-smokeyTopaz text-xl p-2">Repair Cost</label>
          <input placeholder='Enter Value: 00.00' className="border border-grey rounded" type="number" name="amount" value={formData.amount} onChange={handleChange} />
        </div> */}

          <button className="text-smokeyTopaz hover:text-white border border-grey rounded shadow-md from-smokeyTopaz hover:bg-gradient-to-br" type="submit">Submit</button>

      </form>
      <p className="error-message">&nbsp;{formData.error}</p>
    </div>
  )
}