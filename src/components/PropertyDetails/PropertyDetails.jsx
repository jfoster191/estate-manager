export default function PropertyDetails({currentProperty}){
  console.log(currentProperty)
  return (
    <>
      <h1>Property Details</h1>
      <div>{currentProperty.address.street}</div>
      <div>{currentProperty.address.city}</div>
      <div>{currentProperty.address.state}</div>
      <div>{currentProperty.address.zip}</div>
      <div>{currentProperty.mortgage}</div>
      <div>
        {currentProperty.units.map((unit) =>(
          <div>{unit}</div>
        ))}
      </div>
    </>
  )
}