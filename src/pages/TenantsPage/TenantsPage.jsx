import { useState } from "react";
import AddTenantsForm from "../../components/AddTenantsForm/AddTenantsForm";
import TenantsList from "../../components/TenantsList/TenantsList";

export default function TenantsPage({properties}){
  const [showTenantUpdate, setShowTenantUpdate] = useState(false);
  
  return(
    <div className="flex flex-col h-100 ml-6 mr-6">
      <h1 className='text-3xl font-bold mb-4'>Tenants Page</h1>
      <div className="flex justify-center gap-2">
        <TenantsList />
        <AddTenantsForm properties={properties} />
      </div>
    </div>
  )
}