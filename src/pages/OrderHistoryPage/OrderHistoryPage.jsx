import * as userServies from '../../utilities/users-services'

export default function OrderHistoryPage() {
  async function handleCheckToken(){
    const expDate = await userServies.checkToken()
    console.log(expDate)
  }

  return(
    <>
    <h1>Order History Page</h1>
    <button onClick={handleCheckToken}>Check WHen My Login Expires</button>
    </>
  ) 
}