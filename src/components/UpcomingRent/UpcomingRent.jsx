import { useEffect, useState } from "react"
import * as unitsAPI from "../../utilities/units-api"

export default function UpcomingRent({properties}){
  let units = []
  let indivUnits = []
  let rents = []
  properties.forEach((p) => {
    if(p.units.length !== 0) units.push(p.units)
  })
  units.forEach((unit,idx) => {
    unit.forEach((u) => {
      if(u.rent.length !== 0) indivUnits.push(u)
    })
  indivUnits.forEach((r) => {
    rents.push(r.rent)
  })
  })

  return(
    <div>
      <h1>Upcoming Rent</h1>
      {indivUnits.map((u, idx) => (
        <div key={idx}>
          <div>{u.rent.isPaid}</div>
        </div>
        // !u.rent.isPaid ? 
        //   <div key={idx} className="flex">
        //     <div>{u.amount}</div>
        //     <div>{u.rent}</div>
        //   </div>
        //   :
        //   null
      ))}
    </div>
  )
}