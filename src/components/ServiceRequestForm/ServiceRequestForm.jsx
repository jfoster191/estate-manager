import { useState } from "react";
import DatepickerR from "react-tailwindcss-datepicker";
import * as propertiesAPI from '../../utilities/properties-api';
import * as unitsAPI from '../../utilities/units-api';

export default function ServiceRequestForm ({properties}){  
  const [currentProperty, setCurrentProperty] = useState({})
  const [formData, setFormData] = useState({
    property: '',
    unit: '',
    title: '',
    comment: '',
    dateReported: null,
  })

  const [value, setValue] = useState({
    startDate: null, //new Date(),
    endDate: null, //new Date().setMonth(11)
  });
  const handleValueChange = newValue => {
    //console.log("newValue:", newValue);
    setValue(newValue);
  };

  async function handleChange(evt){
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
      dateReported: value,
      error: '',
    })
    if(evt.target.name === 'property'){
      const property = await propertiesAPI.getPropertyId(evt.target.value)
      setCurrentProperty(property)
    }
  }

  async function handleSubmit(evt){
    evt.preventDefault();
    await unitsAPI.addServiceRequest(formData);
  }

  return (
    <div className="bg-white border border-grey shadow-md rounded p-2">
      <h1 className="text-xl text-smokeyTopaz font-bold pb-2">- Service Request -</h1>
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

        {JSON.stringify(currentProperty) === '{}' ? 
          null
          :
          <div>
            <label className="text-smokeyTopaz text-xl p-2">Unit</label>
            <select className="border border-grey rounded" type="text" name="unit" value={formData.unit} onChange={handleChange} required>
                <option value="Select">Select</option>
              {currentProperty.units.map((unit, idx) => (
                <option key={idx} value={unit._id}>{unit.unitNum}</option>
              ))}
            </select>
          </div>
        }

        <div>
          <label className="text-smokeyTopaz text-xl p-2">Title: </label>
          <input className="border border-grey rounded" type="text" name="title" value={formData.title} onChange={handleChange} required />
        </div>

        <div className="text-smokeyTopaz text-xl">Date Reported</div>
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

        <div className="flex flex-col">
          <label className="text-smokeyTopaz text-xl p-2">Comment/Details</label>
          <input className="border border-grey rounded h-24" type="text" name="comment" value={formData.comment} onChange={handleChange} />
        </div>
        
          <button className="text-smokeyTopaz hover:text-white border border-grey rounded shadow-md from-smokeyTopaz hover:bg-gradient-to-br" type="submit">Submit</button>

      </form>
      <p className="error-message">&nbsp;{formData.error}</p>
    </div>
  )
}