import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import * as unitsAPI from '../../utilities/units-api';

export default function AddUnitForm ({setCurrentPage, currentPage, unitNums, idx, currentProperty}){  
  const [formData, setFormData] = useState({
    occupied: false,
    unitNum: '',
    numOfRooms: null,
    dates: null,
    file: {},
    currentProperty: null,
    amount: '',
    dueDay: null
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
      dates: value,
      currentProperty: currentProperty,
      error: '',
    })
  }

  async function handleSubmit(evt){
    evt.preventDefault();
    const payload = new FormData()
    payload.append('occupied', formData.occupied)
    payload.append('unitNum', formData.unitNum)
    if(formData.occupied){
      payload.append('numOfRooms', formData.numOfRooms)
      payload.append('leaseStart', formData.dates.startDate)
      payload.append('leaseEnd', formData.dates.endDate)
      payload.append('file', formData.file, formData.file.name)
      payload.append('currentProperty', formData.currentProperty)
      payload.append('amount', formData.amount)
      payload.append('dueDay', formData.dueDay)
    }
    setCurrentPage(currentPage+1);
    await unitsAPI.addUnit(payload);
  }

  function handleFileChange(evt) {
    // console.log(evt.target.files[0])
    setFormData({...formData, file: evt.target.files[0]})
  }

  // async function handleFileSubmit(evt){
  //   evt.preventDefault()
  //   const payload = new FormData()
  //   payload.append('occupied', formData.occupied)
  //   payload.append('unitNum', formData.unitNum)
  //   payload.append('numOfRooms', formData.numOfRooms)
  //   payload.append('leaseStart', formData.dates.startDate)
  //   payload.append('leaseEnd', formData.dates.endDate)
  //   payload.append('file', formData.file, formData.file.name)
  //   payload.append('currentProperty', formData.currentProperty)
  //   payload.append('amount', formData.amount)
  //   payload.append('dueDate', formData.dueDate)
  //   await unitsAPI.addFile(payload)
  // }

  return (
    <div className="bg-white border border-smokeyTopaz shadow-md rounded p-2">
      <h1 className="text-xl text-smokeyTopaz font-bold pb-2">+ Add Unit {idx+1}+</h1>
      <hr />
      <form id="formFile" className="flex flex-col gap-1 pt-3" autoComplete="off" onSubmit={handleSubmit}>
        <div>
          <label className="text-smokeyTopaz text-xl p-2">Occupancy</label>
          <select className="border border-grey rounded" type="text" name="occupied" value={formData.occupied} onChange={handleChange} required>
            <option value="false">Unoccupied</option>
            <option value="true">Occupied</option>
          </select>
        </div>

        <div>
          <label className="text-smokeyTopaz text-xl p-2">Unit #</label>
          <input className="border border-grey rounded" type="text" name="unitNum" value={formData.unitNum} onChange={handleChange} required />
        </div>
        <div>
          <label className="text-smokeyTopaz text-xl p-2"># of Bedrooms</label>
          <input className="border border-grey rounded" type="text" name="numOfRooms" value={formData.numOfRooms} onChange={handleChange} required />
        </div><hr />

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
          <input placeholder='Enter Value: 00.00' className="border border-grey rounded" type="text" name="amount" value={formData.amount} onChange={handleChange} />
        </div>

        <div>
          <label className="text-smokeyTopaz text-xl p-2">Due Day</label>
          <input className="border border-grey rounded" type="text" name="dueDay" value={formData.dueDay} onChange={handleChange} />
        </div>

          <button className="text-smokeyTopaz hover:text-white border border-grey rounded shadow-md from-smokeyTopaz hover:bg-gradient-to-br" type="submit">&#8594;&#8594; NEXT &#8594;&#8594;</button>

      </form>
          {/* <button className="text-smokeyTopaz hover:text-white border border-grey rounded shadow-md from-smokeyTopaz hover:bg-gradient-to-br" type="submit" onClick={handleFileSubmit}>File Test</button> */}

      <p className="error-message">&nbsp;{formData.error}</p>
    </div>
  )
}