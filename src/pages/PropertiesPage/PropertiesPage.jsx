import PropertiesList from "../../components/PropertiesList/PropertiesList"

export default function PropertiesPage() {
  return (
    <div>
      <h1 className='text-3xl font-bold'>Properties Page</h1>
      <div className="flex">
      <aside className="flex flex-col justify-start bg-white border border-grey rounded p-4 w-1/3 ml-6">
        <PropertiesList />
      </aside>
      </div>
    </div>
  )
}