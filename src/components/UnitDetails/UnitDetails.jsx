export default function UnitDetails({unit}){
  return(
    <div className="bg-white border border-grey rounded p-4 mr-2">
      <h1 className="text-xl text-smokeyTopaz font-bold pb-1">Unit Details</h1>
      {unit.occupied ?
        <>
        <div>Rent</div>
        <div className="flex flex-col overflow-y-scroll h-96 gap-2 border border-smokeyTopaz rounded p-2">
          {unit.rent.map((u) => (
              <div className="flex border border-grey rounded">
                <div>Due Date:{u.dueDate.slice(0,10)}</div>
                <div>Amount Due: {unit.amount}</div>
                <div>Date Paid: {unit.datePaid ? unit.datePaid: 'Unpaid'}</div>
              </div>
          ))}
        </div>
        </> 
        :
        <div className="flex flex-col h-96 gap-2 rounded p-2 w-full">This Unit is Not Occupied</div>
      }
    </div>
  )
}