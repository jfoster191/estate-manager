import AddTenantsForm from "../../components/AddTenantsForm/AddTenantsForm";
import TenantsList from "../../components/TenantsList/TenantsList";

export default function TenantsPage({properties}){
  return(
    <div className="flex flex-col">
      <h1>Tenants Page</h1>
      <div className="flex justify-center gap-2">
        <TenantsList />
        <AddTenantsForm properties={properties} />
      </div>
    </div>
  )
}