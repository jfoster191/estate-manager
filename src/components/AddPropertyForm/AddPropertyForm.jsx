import { useState } from "react"
import AddUnitForm from "../AddUnitForm/AddUnitForm"

export default function AddPropertyForm (){
  const [formData, setFormData] = useState({
    street: '',
    city: '',
    zip: null,
    mortage: null,
    numOfUnits: null,
  })

  let [unitNum, setUnitNum] = useState([])

  function handleChange(evt){
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
      error: ''
    })
    if(evt.target.name === 'numOfUnits'){
      for(let i=0;i<evt.target.value;i++){
        unitNum.push(i)
      }
      setUnitNum(unitNum)
    }
  }

  async function handleSubmit(evt){
    evt.preventDefault();
  }
  
  return (
    <div>
      <div className="bg-white border border-grey shadow-md rounded p-2">
        <h1 className="text-xl text-smokeyTopaz font-bold pb-2">+ Add New Property +</h1>
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
            <label className="text-smokeyTopaz text-xl p-2">State</label>
            <select className="border border-grey rounded" type="enum" name="state" value={formData.state} onChange={handleChange} required>
              <option value="Alabama">Alabama</option>
              <option value="Alaska">Alaska</option>
              <option value="Arizona">Arizona</option>
              <option value="Arkansas">Arkansas</option>
              <option value="California">California</option>
              <option value="Colorado">Colorado</option>
              <option value="Connecticut">Connecticut</option>
              <option value="Delaware">Delaware</option>
              <option value="Florida">Florida</option>
              <option value="Georgia">Georgia</option>
              <option value="Hawaii">Hawaii</option>
              <option value="Idaho">Idaho</option>
              <option value="Illinois">Illinois</option>
              <option value="Indiana">Indiana</option>
              <option value="Iowa">Iowa</option>
              <option value="Kansas">Kansas</option>
              <option value="Kentucky">Kentucky</option>
              <option value="Louisiana">Louisiana</option>
              <option value="Maine">Maine</option>
              <option value="Maryland">Maryland</option>
              <option value="Massachusetts">Massachusetts</option>
              <option value="Michigan">Michigan</option>
              <option value="Minnesota">Minnesota</option>
              <option value="Mississippi">Mississippi</option>
              <option value="Missouri">Missouri</option>
              <option value="Montana">Montana</option>
              <option value="Nebraska">Nebraska</option>
              <option value="Nevada">Nevada</option>
              <option value="New Hampshire">New Hampshire</option>
              <option value="New Jersey">New Jersey</option>
              <option value="New Mexico">New Mexico</option>
              <option value="New York">New York</option>
              <option value="North Carolina">North Carolina</option>
              <option value="North Dakota">North Dakota</option>
              <option value="Ohio">Ohio</option>
              <option value="Oklahoma">Oklahoma</option>
              <option value="Oregon">Oregon</option>
              <option value="Pennsylvania">Pennsylvania</option>
              <option value="Rhode Island">Rhode Island</option>
              <option value="South Carolina">South Carolina</option>
              <option value="South Dakota">South Dakota</option>
              <option value="Tennessee">Tennessee</option>
              <option value="Texas">Texas</option>
              <option value="Utah">Utah</option>
              <option value="Vermont">Vermont</option>
              <option value="Virginia">Virginia</option>
              <option value="Washington">Washington</option>
              <option value="West Virginia">West Virginia</option>
              <option value="Wisconsin">Wisconsin</option>
              <option value="Wyoming">Wyoming</option>
            </select>
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
              <option value="Select" selected>Select</option>
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

          {unitNum.length > 0 ?
            unitNum.map((unit) => (
              <AddUnitForm />
            ))
            :
            null
          }

        </form>
        <p className="error-message">&nbsp;{formData.error}</p>
      </div>
    </div>
  )
}