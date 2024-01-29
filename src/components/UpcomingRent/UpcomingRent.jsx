import { useEffect, useState } from "react"
import * as unitsAPI from "../../utilities/units-api"

export default function UpcomingRent({properties}){
  let units = []
  let indivUnits = []
  properties.forEach((p) => {
    if(p.units.length !== 0) units.push(p.units)
  })
  units.forEach((unit,idx) => {
    unit.forEach((u) => {
      indivUnits.push(u)
    })
  })
  // console.log(indivUnits)
  // const [upcomingRent, setUpcomingRent] = useState([])

  // useEffect(function(){
  //   async function getUpcomingRents(){
  //     const rents = await unitsAPI.getUpcomingRents()
  //     setUpcomingRent(rents)
  //   }
  //   getUpcomingRents()
  // }, [])

  return(
    <div>
      <h1>Upcoming Rent</h1>
      {indivUnits.map((u) => (
        !u.rent.isPaid ? 
          <>
            <div>{u.amount}</div>
          </>
          :
          null
      ))}
    </div>
  )
}