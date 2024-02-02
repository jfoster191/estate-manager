export default function UnitDetails({unit}){
  return(
    <div className="bg-white border border-grey rounded p-4 mr-2">
      <h1 className="text-xl text-smokeyTopaz font-bold pb-1">Unit Details</h1>
      {unit.occupied ?
        <>
        <div className="font-bold">Rent</div>
        <div className="flex flex-col overflow-y-scroll h-48 gap-2 border border-smokeyTopaz rounded p-2">
          {unit.rent.map((u) => (
            <div className="flex border border-grey rounded p-1" >
              <div>Due Date:<div className="text-nowrap">{u.dueDate.slice(0,10)}</div></div>
              <div>Amount Due: {unit.amount}</div>
              <div>Date Paid: {unit.datePaid ? unit.datePaid: 'Unpaid'}</div>
            </div>
          ))}
        </div>
        <div className="font-bold">Tenants</div>
        <div className="flex flex-col overflow-y-scroll h-48 gap-2 border border-smokeyTopaz rounded p-2">
          {unit.tenants.map((tenant) => (
              <div className="flex flex-col border border-grey rounded">
                <div>{tenant.firstName} {tenant.lastName}</div>
                <div>Email: {tenant.email}</div>
                <div>Phone: {tenant.phone}</div>
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