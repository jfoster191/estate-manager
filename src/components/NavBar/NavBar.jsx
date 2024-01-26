import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-services';

export default function NavBar({user, setUser}) {
  function handleLogout(){
    userService.logOut();
    setUser(null)
  }
  return (
    <div className='flex bg-linen'>
      <Link to="/dashboard">
        <img className='h-16 pl-4 pt-2 pb-2' src="https://i.imgur.com/EKvTAFn.png" alt="" />
      </Link>
      <nav className='flex justify-end gap-3 pr-4 items-center w-screen'>
        <Link className='hover:bg-smokeyTopaz hover:opacity-75 p-4' to='/dashboard'>Dashboard</Link>
        <Link className='hover:bg-smokeyTopaz hover:opacity-75 p-4' to='/properties'>Properties</Link>
        <Link className='hover:bg-smokeyTopaz hover:opacity-75 p-4' to='/maintenance'>Maintenance</Link>
        <Link className='hover:bg-smokeyTopaz hover:opacity-75 p-4' to='/service'>Service Request</Link>
        <Link className='hover:bg-smokeyTopaz hover:opacity-75 p-4' to='#' onClick={handleLogout}>Log Out</Link>
        <div className='bg-grey rounded-full pr-2 pl-2 pt-1'>{user.name.substring(0,1).toUpperCase()}</div>
      </nav>
    </div>
    )
}