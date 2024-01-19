import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-services';

export default function NavBar({user, setUser}) {
  function handleLogout(){
    userService.logOut();
    setUser(null)
  }
  return (
      <nav>
        <div>Welcome, {user.name.toUpperCase()}</div>
        <Link to='/orders'>Order History</Link>
        &nbsp; | &nbsp;
        <Link to='/orders/new'>New Order</Link>
        &nbsp; | &nbsp;
        <Link to='#' onClick={handleLogout}>Log Out</Link>
      </nav>
    )
}