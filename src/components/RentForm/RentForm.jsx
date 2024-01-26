import { useState } from "react";
import { render } from "@testing-library/react";
import DatepickerR from "react-tailwindcss-datepicker";


export default function RentForm (){
  const [formData, setFormData] = useState({
    occupied: false,
    unitNum: '',
    dates: null,
    mortage: null,
    numOfUnits: null,
  })

  const [value, setValue] = useState({
    startDate: null, //new Date(),
    endDate: null, //new Date().setMonth(11)
  });
  const handleValueChange = newValue => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };
  
  function handleChange(evt){
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
      error: ''
    })
  }

  async function handleSubmit(evt){
    evt.preventDefault();
  }

  return (
      <div className="bg-white border border-grey shadow-md rounded p-2">
        <h1 className="text-xl text-smokeyTopaz pb-2">Rent Info</h1>
        <form className="flex flex-col gap-1" autoComplete="off" onSubmit={handleSubmit}>

          <div>
            <label className="text-smokeyTopaz text-xl p-2">Rent Amount</label>
            <input placeholder='Enter Value: 00.00' className="border border-grey rounded" type="text" name="unitNum" value={formData.unitNum} onChange={handleChange} required />
          </div><hr />

          <div className="text-smokeyTopaz text-xl">Due Date</div>
            <div>
              <DatepickerR
              useRange={false}
              asSingle={true}
              name={formData.dates} 
              primaryColor={"red"} 
              value={value} 
              onChange={handleValueChange}
              />
          </div>

        </form>
        <p className="error-message">&nbsp;{formData.error}</p>
      </div>
  )
}