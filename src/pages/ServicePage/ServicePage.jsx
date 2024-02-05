import ServiceRequestForm from "../../components/ServiceRequestForm/ServiceRequestForm";
import ServiceList from "../../components/ServiceList/ServiceList";
import { createContext, useState } from "react";

export default function ServicePage({properties}){
  const UpdateContext = createContext()
  const [update, setUpdate] = useState(null)
  return (
    <div className="flex flex-col h-100 justify-center items-center">
        <h1 className='text-3xl font-bold'>Service Page</h1>
      <div className="flex mt-6 justify-center gap-4 h-[30rem]">
        <UpdateContext.Provider value={update}>
        <ServiceList />
        <ServiceRequestForm properties={properties} update={update} setUpdate={setUpdate}  />
        </UpdateContext.Provider>
      </div>
    </div>
  )
}