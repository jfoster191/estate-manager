import ServiceRequestForm from "../../components/ServiceRequestForm/ServiceRequestForm"

export default function ServicePage({properties}){
  return (
    <div>
      <div>
        <h1 className='text-3xl font-bold'>Service Page</h1>
      </div>
      <div>
        <ServiceRequestForm properties={properties} />
      </div>
    </div>
  )
}