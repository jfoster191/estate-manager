export default function MaintenanceList({properties}){
  let requests = []

  properties.forEach((property) => {
    requests.push(property.maintenanceRequests)
  })

  const flatRequests = requests.flat(requests.length- 1)

  // flatRequests.forEach(request => {
  //   console.log(request.title)
  // })
  return (
    <div className="bg-white border border-grey shadow-md rounded p-2">
      <h1 className="text-xl text-smokeyTopaz font-bold pb-2">Maintenace List</h1>
      {flatRequests.map((request, idx) => (
        <div key={idx} className="border border-smokeyTopaz rounded mb-1">
          <div>{request.title}</div>
          <div>{request.comment}</div>
        </div>
      ))}
    </div>
  )
}