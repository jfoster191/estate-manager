import * as propertiesAPI from "../../utilities/properties-api"

export default function PropertyUpdate({property, setProperties}){

  async function handleRemoveBtn(evt){
    evt.preventDefault();
    const properties = await propertiesAPI.deleteProperty(property)
    setProperties(properties)
  }
  return (
    <div>
      <h1>Update Property</h1>
      <div>Street: {property.address.street}</div>
      <div>City: {property.address.city}</div>
      <div>State: {property.address.state}</div>
      <div>Zip Code: {property.address.zip}</div>
      <div>
        {property.units.map((unit, idx) => (
          <div key={idx}>
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