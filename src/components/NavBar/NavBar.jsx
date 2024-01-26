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
        <Link className='hover:bg-smokeyTopaz hover:opacity-75 p-4 rounded text-smokeyTopaz hover:text-white' to='/dashboard'>Dashboard</Link>

        <div class="dropdown relative inline-block group-hover:block">
          <Link className='hover:bg-smokeyTopaz hover:opacity-75 p-4 rounded text-smokeyTopaz hover:text-white'>Properties</Link>
          <div class="dropdown-content right-0 hidden absolute bg-white shadow-sm z-10 rounded w-40">
            <Link className='hover:bg-smokeyTopaz hover:opacity-75 pl-7 pr-7 hover:text-white mb-1.5 rounded ml-0' to='/properties'>All Properties</Link><br />
            <Link className='hover:bg-smokeyTopaz hover:opacity-75 pl-7 pr-7 hover:text-white mb-1.5 rounded ml-0'>Add Property</Link>
          </div>
        </div>

        <div class="dropdown relative inline-block group-hover:block">
          <Link className='hover:bg-smokeyTopaz hover:opacity-75 p-4 rounded text-smokeyTopaz hover:text-white'>Maintenance</Link>
          <div class="dropdown-content right-0 hidden absolute bg-white shadow-sm z-10 rounded w-60">
            <Link className='hover:bg-smokeyTopaz hover:opacity-75 pl-7 pr-7 hover:text-white mb-1.5 rounded ml-0' to='/maintenance'>All Maintenance Items</Link><br />
            <Link className='hover:bg-smokeyTopaz hover:opacity-75 pl-7 pr-7 hover:text-white mb-1.5 rounded ml-0'>Add Maintenance Items</Link>
          </div>
        </div>

        <div class="dropdown relative inline-block group-hover:block">
          <Link className='hover:bg-smokeyTopaz hover:opacity-75 p-4 rounded text-smokeyTopaz hover:text-white'>Service Request</Link>
          <div class="dropdown-content right-0 hidden absolute bg-white shadow-sm z-10 rounded w-60">
            <Link className='hover:bg-smokeyTopaz hover:opacity-75 pl-7 pr-7 hover:text-white mb-1.5 rounded ml-0' to='/service'>All Service Request</Link><br />
            <Link className='hover:bg-smokeyTopaz hover:opacity-75 pl-7 pr-7 hover:text-white mb-1.5 rounded ml-0'>Add Service Request</Link>
          </div>
        </div>

        <div class="dropdown relative inline-block group-hover:block">
          <div className='bg-smokeyTopaz text-white rounded-full pr-4 pl-4 pt-2 pb-2 hover:bg-'>{user.name.substring(0,1).toUpperCase()}</div>
          <div class="dropdown-content right-0 hidden absolute bg-white shadow-sm z-10 rounded w-40">
            <Link className='hover:bg-smokeyTopaz hover:opacity-75 pl-7 pr-7 hover:text-white mb-1.5 rounded ml-0'>User Settings</Link><br />
            <Link className='hover:bg-smokeyTopaz hover:opacity-75 pl-7 pr-7 hover:text-white mb-1.5 rounded ml-0' to='#' onClick={handleLogout}>Logout</Link>
          </div>
        </div>

        {/* <Link className='hover:bg-smokeyTopaz hover:opacity-75 p-4 rounded text-smokeyTopaz hover:text-white' to='#' onClick={handleLogout}>Log Out</Link>
        <Link to=''>

          <div className='bg-smokeyTopaz text-white rounded-full pr-4 pl-4 pt-2 pb-2 hover:bg-'>{user.name.substring(0,1).toUpperCase()}</div>
        </Link> */}
      </nav>
    </div>
    )
}