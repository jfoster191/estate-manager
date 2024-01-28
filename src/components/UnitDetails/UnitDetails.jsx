export default function UnitDetails({unit}){
  return(
    <div>
      <h1>Unit Details</h1>
      <div>{unit.amount}</div>
      {/* {unit.rent.map((u) => (
        <div>{u.dueDate}</div>
      ))} */}
    </div>
  )
}