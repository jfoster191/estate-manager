import { useState } from "react";
import * as propertiesAPI from "../../utilities/properties-api";
import * as unitsAPI from "../../utilities/units-api";

export default function AddTenantsForm({properties, update, setUpdate}){
  const [formData, setFormData] = useState({
    property: null,
    unit: null,
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  })

  const [currentProperty, setCurrentProperty] = useState(null)

  async function handleSubmit(evt){
    evt.preventDefault()
    const tenant = await unitsAPI.addTenant(formData)
    if(update === ""){ setUpdate(null) }
    else{ setUpdate("") }
  }

  async function handleChange(evt){
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
      currentProperty: currentProperty,
      error: '',
    })
    if(evt.target.name === 'property'){
      const selectedProperty = await propertiesAPI.getPropertyId(evt.target.value)
      setCurrentProperty(selectedProperty)
    }
  }

  return(
    <div className="flex flex-col border border-grey bg-white p-2">
      <h1 className="text-xl text-smokeyTopaz font-bold pb-2">+ Add New Tenant +</h1><hr />
      <form id="formFile" className="flex flex-col gap-1 pt-3" autoComplete="off" onSubmit={handleSubmit}>

        <div>
          <label className="text-smokeyTopaz text-xl p-2">First Name</label>
          <input className="border border-grey rounded" type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>

        <div>
          <label className="text-smokeyTopaz text-xl p-2">Last Name</label>
          <input className="border border-grey rounded" type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>
        
        <div>
          <label className="text-smokeyTopaz text-xl p-2">Email</label>
          <input className="border border-grey rounded" type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div>
          <label className="text-smokeyTopaz text-xl p-2">Phone</label>
          <input className="border border-grey rounded" type="phone" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>

        <div>
          <label className="text-smokeyTopaz text-xl p-2">Property</label>
          <select className="border border-grey rounded" type="text" name="property" value={formData.property} onChange={handleChange} required>
            <option value="Select">Select</option>
            {properties.map((property, idx) =>(
              <option key={idx} value={property._id}>{property.address.street}</option>
            ))}
          </select>
        </div>
        
        {currentProperty ? 
          <div>
            <label className="text-smokeyTopaz text-xl p-2">Unit</label>
            <select className="border border-grey rounded" type="text" name="unit" value={formData.unit} onChange={handleChange} required>
              <option value="Select">Select</option>
              {currentProperty.units.map((unit, idx) =>(
                <option key={idx} value={unit._id}>{unit.unitNum}</option>
              ))}
            </select>
          </div>
          :
          null
        }

        <button className="text-smokeyTopaz hover:text-white border border-grey rounded shadow-md from-smokeyTopaz hover:bg-gradient-to-br mt-10" type="submit">+ ADD TENANT +</button>
      </form>
    </div>
  )
}