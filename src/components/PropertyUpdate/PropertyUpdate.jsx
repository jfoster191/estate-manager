import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import * as propertiesAPI from "../../utilities/properties-api";
import * as unitsAPI from "../../utilities/units-api";

export default function PropertyUpdate({property, setCurrentProperty,setProperties}){
  const [formData, setFormData] = useState({
    occupied: false,
    unit: null,
    unitNum: '',
    dates: null,
    file: null,
    amount: '',
    dueDate: null
  })
  const [value, setValue] = useState({
    startDate: null, //new Date(),
    endDate: null, //new Date().setMonth(11)
  });
  const handleValueChange = newValue => {
    //console.log("newValue:", newValue);
    setValue(newValue);
  };
  const [showUnit, setShowUnit] = useState(false)
  const [currentUnit, setCurrentUnit] = useState(false)

  async function handleChange(evt){
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
      dates: value,
      error: '',
    })
    if (evt.target.name === 'unit'){
      const unit = await unitsAPI.getUnitById(evt.target.value)
      setCurrentUnit(unit)
      setShowUnit(true)
    } 
  }
  function handleFileChange(evt) {
    // console.log(evt.target.files[0])
    setFormData({...formData, file: evt.target.files[0]})
  }

  async function handleSubmit(evt){
    evt.preventDefault();
    await unitsAPI.updateUnit(formData)
    setShowUnit(false)
  }

  async function handleRemoveBtn(evt){
    evt.preventDefault();
    const properties = await propertiesAPI.deleteProperty(property)
    setProperties(properties)
  }
  return (
    <div className="flex flex-col h-[90%]">
      <h1>Update Property</h1>
      <div>Street: {property.address.street}</div>
      <div>City: {property.address.city}</div>
      <div>State: {property.address.state}</div>
      <div>Zip Code: {property.address.zip}</div><hr />

      <form className="flex flex-col gap-1 pt-3" autoComplete="off" onSubmit={handleSubmit}>

        <div>
          <label className="text-smokeyTopaz text-xl p-2">Unit</label>
          <select className="border border-grey rounded" type="text" name="unit" value={formData.unit} onChange={handleChange}>
            <option value="Select">Select</option>
            {property.units.map((unit, idx) => (
              <option key={idx} value={unit._id}>{unit.unitNum}</option>
            ))}
          </select>
        </div>
        {showUnit ? 
        <div>
          <div>
            <label className="text-smokeyTopaz text-xl p-2">Occupancy</label>
            <select className="border border-grey rounded" type="text" name="occupied" value={formData.occupied} onChange={handleChange} selected={currentUnit.occupied} >
              <option value="false">Unoccupied</option>
              <option value="true">Occupied</option>
            </select>
            <div>Currently: {currentUnit.occupied ? 'Occupied':'Unoccupied'}</div>
          </div>

          <div className="text-smokeyTopaz text-xl">Lease Period</div>
          <div>
            <Datepicker
            primaryColor="red"
            popoverDirection="down"
            value={value} 
            onChange={handleValueChange}
            />
        </div>

          <div>
            <label className="text-smokeyTopaz text-xl p-2">Lease File</label>
            <input className="border border-grey rounded" type="file" name="file" /*value={formData.file}*/ onChange={handleFileChange} />
          </div>

          <h1 className="text-xl text-smokeyTopaz pb-2">Rent Info</h1>

        <div>
          <label className="text-smokeyTopaz text-xl p-2">Rent Amount</label>
          <input placeholder={currentUnit.amount} className="border border-grey rounded" type="text" name="amount" value={formData.amount} onChange={handleChange} />
        </div>

        <div>
          <label className="text-smokeyTopaz text-xl p-2">Due Day</label>
          <input placeholder={currentUnit.dueDay} className="border border-grey rounded" type="text" name="dueDay" value={formData.dueDay} onChange={handleChange} />
        </div>

          <button className="text-smokeyTopaz hover:text-white border border-grey rounded shadow-md from-smokeyTopaz hover:bg-gradient-to-br" type="submit">SAVE CHANGES</button>

        </div>
        :
        null
        }

      </form>
      <hr /><button onClick={handleRemoveBtn}>Remove Property</button>
    </div>
  )
}