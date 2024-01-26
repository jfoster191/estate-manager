import AddPropertyForm from "../../components/AddPropertyForm/AddPropertyForm";
import PropertiesList from "../../components/PropertiesList/PropertiesList";

export default function ManagePropertiesPage() {
  return (
    <div>
      <h1 className='text-3xl font-bold'>Manage Properties</h1>
      <div className="flex">
      <aside className="flex flex-col justify-start bg-white border border-grey rounded p-4 w-1/3 ml-6">
        <PropertiesList />
      </aside>
      <AddPropertyForm />
      </div>
    </div>
  )
}