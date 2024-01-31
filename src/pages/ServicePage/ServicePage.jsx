import ServiceRequestForm from "../../components/ServiceRequestForm/ServiceRequestForm";
import ServiceList from "../../components/ServiceList/ServiceList";

export default function ServicePage({properties}){
  return (
    <div>
        <h1 className='text-3xl font-bold'>Service Page</h1>
      <div className="flex mt-6 justify-center gap-4">
        <ServiceList />
        <ServiceRequestForm properties={properties} />
      </div>
    </div>
  )
}