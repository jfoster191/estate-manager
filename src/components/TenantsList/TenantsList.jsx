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
    <div>
      <h1>Tenants</h1>
    </div>
  )
}