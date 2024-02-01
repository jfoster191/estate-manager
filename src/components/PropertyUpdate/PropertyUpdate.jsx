import * as propertiesAPI from "../../utilities/properties-api"

export default function PropertyUpdate({property, setProperties}){

  async function handleSubmit(evt){
    evt.preventDefault();
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
      <div>Zip Code: {property.address.zip}</div>
      <div>
        {property.units.map((unit, idx) => (
          <div key={idx} className="">
            <form className="flex flex-col gap-1 pt-3" autoComplete="off" onSubmit={handleSubmit}>

            </form>
            <div>Unit: {unit.unitNum}</div>
            <div>Occupancy: {unit.occupied ? 'Occupied':'Unoccupied'}</div>
            {unit.occupied ?
              <>
              <div>Lease Start: {unit.leaseStart}</div>
              <div>Lease End: {unit.leaseEnd}</div>
              </> 
              :
              null
            }
          </div>
        ))}
      </div>
      <button onClick={handleRemoveBtn}>Remove Property</button>
    </div>
  )
}