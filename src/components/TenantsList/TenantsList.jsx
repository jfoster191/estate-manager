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
    <div className="bg-white border border-grey rounded p-4 h-[90%] w-2/3">
      <h1 className="text-xl text-smokeyTopaz font-bold pb-2">Tenants</h1>
      <div className="flex flex-col overflow-y-scroll gap-2 mt-3 h-[26rem]">
        {flatTenants.map((tenant) => (
          <div className="flex bg-white shadow-md border border-smokeyTopaz rounded p-2 gap-2">
            <div>Name: {tenant.firstName} {tenant.lastName}</div> |
            <div>Contant Info</div> |
            <div>Email: {tenant.email}</div> |
            <div>Phone: {tenant.phone}</div>
            {/* <button className="border border-smokeyTopaz rounded hover:bg-smokeyTopaz hover:text-white hover:opacity-75 hover:border-grey shadow-md hover:shadow-lg pt-1 pb-1 pl-3 pr-3">X Remove Tenant X</button> */}
          </div>
        ))}
      </div>
    </div>
  )
}