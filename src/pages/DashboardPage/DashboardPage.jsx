import * as userServies from '../../utilities/users-services'

export default function DashboardPage() {
  async function handleCheckToken(){
    const expDate = await userServies.checkToken()
    console.log(expDate)
  }

  return(
    <>
    <h1>Dashboard Page</h1>
    <button onClick={handleCheckToken}>Check WHen My Login Expires</button>
    </>
  ) 
}