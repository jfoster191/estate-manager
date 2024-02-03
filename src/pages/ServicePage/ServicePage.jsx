import ServiceRequestForm from "../../components/ServiceRequestForm/ServiceRequestForm";
import ServiceList from "../../components/ServiceList/ServiceList";

export default function ServicePage({properties}){
  return (
    <div className="flex flex-col h-100 justify-center items-center">
        <h1 className='text-3xl font-bold'>Service Page</h1>
      <div className="flex mt-6 justify-center gap-4 h-[30rem]">
        <ServiceList />
        <ServiceRequestForm properties={properties} />
      </div>
    </div>
  )
}