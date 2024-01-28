import * as userServies from '../../utilities/users-services';
import PropertiesList from '../../components/PropertiesList/PropertiesList';
import MaintenanceList from '../../components/MaintenanceList/MaintenanceList';

export default function DashboardPage() {
  async function handleCheckToken(){
    const expDate = await userServies.checkToken()
    console.log(expDate)
  }

  return(
    <div className=''>
      <h1 className='text-3xl font-bold'>Dashboard</h1>
      <div className="flex h-100">
        <aside className="flex flex-col justify-start bg-white border border-grey rounded p-4 w-1/3 ml-6 mt-6 h-[90%]">
          <PropertiesList />
        </aside>
        <div className="flex flex-col justify-start bg-white border border-grey rounded p-4 w-2/3 m-6">
          <MaintenanceList />
        </div>
      </div>
    </div>
  ) 
}