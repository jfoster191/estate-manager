import { useEffect, useState } from "react";
import * as unitsAPI from "../../utilities/units-api";

export default function TenantsLsit(){
  const [units, setUnits] = useState([])

  useEffect(function(){
    async function getUnits(){
      const allUnits = await unitsAPI.getUnits()
      setUnits(allUnits)
    }
    getUnits()
  }, [])
  
  const tenants = []
  units.forEach((unit) => {
    if(unit.tenants.length !== 0)
    tenants.push(unit.tenants)
  })
  const flatTenants = tenants.flat()
  console.log(flatTenants)
  flatTenants.forEach(tenant => {
    console.log(tenant.firstName)
  })
  
  return (
    <div className="bg-white border border-grey rounded p-4 h-[90%]">
      <h1 className="text-xl text-smokeyTopaz font-bold pb-2">Tenants</h1>
      <div className="flex flex-col overflow-y-scroll gap-2 mt-3">
        {flatTenants.map((tenant) => (
          <div className="bg-white border border-smokeyTopaz rounded p-2">
            <div>{tenant.firstName} {tenant.lastName}</div>
            <div>Contant Info</div><hr />
            <div>Email: {tenant.email}</div>
            <div>Phone: {tenant.phone}</div>
          </div>
        ))}
      </div>
    </div>
  )
}