import { useState } from "react"

export default function AddUnitForm (){
  const [formData, setFormData] = useState({
    street: '',
    city: '',
    zip: null,
    mortage: null,
    numOfUnits: null,
  })

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
    <div>
      <div className="bg-white border border-grey shadow-md rounded p-2">
        <h1 className="text-xl text-smokeyTopaz font-bold pb-2">+ Add Unit +</h1>
        <hr />
        <form className="flex flex-col gap-1 pt-3" autoComplete="off" onSubmit={handleSubmit}>

          <div>
            <label className="text-smokeyTopaz text-xl p-2">Street</label>
            <input className="border border-grey rounded" type="text" name="street" value={formData.street} onChange={handleChange} required />
          </div>

          <div>
            <label className="text-smokeyTopaz text-xl p-2">City</label>
            <input className="border border-grey rounded" type="text" name="city" value={formData.city} onChange={handleChange} required />
          </div>

          <div>
            <label className="text-smokeyTopaz text-xl p-2">Zip Code</label>
            <input className="border border-grey rounded" type="text" name="zip" value={formData.zip} onChange={handleChange} required />
          </div>

          <div>
            <label className="text-smokeyTopaz text-xl p-2">Mortgage</label>
            <input className="border border-grey rounded" placeholder="Enter Value: 00.00" type="text" name="mortgage" value={formData.mortgage} onChange={handleChange} required />
          </div>

          <div>
            <label className="text-smokeyTopaz text-xl p-2">Number of Units</label>
            <select className="border border-grey rounded" type="text" name="numOfUnits" value={formData.numOfUnits} onChange={handleChange} required>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <button className="text-smokeyTopaz hover:text-white border border-grey rounded shadow-md from-smokeyTopaz hover:bg-gradient-to-br" type="submit">ADD PROPERTY</button>

        </form>
        <p className="error-message">&nbsp;{formData.error}</p>
      </div>
    </div>
  )
}