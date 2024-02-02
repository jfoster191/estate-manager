import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-services';

export default function NavBar({user, setUser, setProperties}) {
  function handleLogout(){
    userService.logOut();
    setUser(null)
    setProperties([])
  }
  return (
    <header className='w-lvw z-50'>
      <div className='flex bg-linen'>
        <Link to="/dashboard">
          <img className='h-16 pl-4 pt-2 pb-2' src="https://i.imgur.com/EKvTAFn.png" alt="" />
        </Link>
        <nav className='flex justify-end gap-2 pr-4 items-center w-screen'>
          <Link className='hover:bg-smokeyTopaz hover:opacity-75 p-4 rounded text-smokeyTopaz hover:text-white' to='/dashboard'>Dashboard</Link>

          <div className="dropdown relative inline-block group-hover:block">
            <Link className='hover:bg-smokeyTopaz hover:opacity-75 p-4 rounded text-smokeyTopaz hover:text-white' to="/properties">Properties</Link>
            {/* <div className="dropdown-content right-0 hidden absolute bg-white shadow-sm rounded w-60 mt-4">
              <Link className='hover:bg-smokeyTopaz hover:opacity-75 pl-7 pr-7 hover:text-white mb-1.5 rounded ml-0' to='/properties'>All Properties</Link><br />
            </div> */}
          </div>

          <div className="dropdown relative inline-block group-hover:block">
            <Link className='hover:bg-smokeyTopaz hover:opacity-75 p-4 rounded text-smokeyTopaz hover:text-white' to="/maintenance">Maintenance</Link>
            {/* <div className="dropdown-content right-0 hidden absolute bg-white shadow-sm z-10 rounded w-60 mt-4">
              <Link className='hover:bg-smokeyTopaz hover:opacity-75 pl-7 pr-7 hover:text-white mb-1.5 rounded ml-0' to='/maintenance'>All Maintenance Items</Link><br />
              <Link className='hover:bg-smokeyTopaz hover:opacity-75 pl-7 pr-7 hover:text-white mb-1.5 rounded ml-0'>Add Maintenance Items</Link>
            </div> */}
          </div>

          <div className="dropdown relative inline-block group-hover:block">
            <Link className='hover:bg-smokeyTopaz hover:opacity-75 p-4 rounded text-smokeyTopaz hover:text-white' to="/service">Service Request</Link>
            {/* <div className="dropdown-content right-0 hidden absolute bg-white shadow-sm z-10 rounded w-60 mt-4">
              <Link className='hover:bg-smokeyTopaz hover:opacity-75 pl-7 pr-7 hover:text-white mb-1.5 rounded ml-0' to='/service'>All Service Request</Link><br />
              <Link className='hover:bg-smokeyTopaz hover:opacity-75 pl-7 pr-7 hover:text-white mb-1.5 rounded ml-0'>Add Service Request</Link>
            </div> */}
          </div>

          <div className="dropdown relative inline-block group-hover:block">
            <div className='bg-smokeyTopaz text-white rounded-full pr-4 pl-4 pt-2 pb-2 click:bg-white'>{user.name.substring(0,1).toUpperCase()}</div>
            <div className="dropdown-content right-0 hidden absolute bg-white shadow-sm z-10 rounded w-60">
              <Link className='hover:bg-smokeyTopaz hover:opacity-75 pl-7 pr-7 hover:text-white mb-1.5 rounded ml-0 text-nowrap' to='/manage-properties'>Manage Properties</Link><br />
              <Link className='hover:bg-smokeyTopaz hover:opacity-75 pl-7 pr-7 hover:text-white mb-1.5 rounded ml-0 text-nowrap' to='/manage-tenants'>Manage Tenants</Link><br />
              <Link className='hover:bg-smokeyTopaz hover:opacity-75 pl-7 pr-7 hover:text-white mb-1.5 rounded ml-0 text-nowrap'>User Settings</Link><br />
              <Link className='hover:bg-smokeyTopaz hover:opacity-75 pl-7 pr-7 hover:text-white mb-1.5 rounded ml-0' to='#' onClick={handleLogout}>Logout</Link>
            </div>
          </div>

          {/* <Link className='hover:bg-smokeyTopaz hover:opacity-75 p-4 rounded text-smokeyTopaz hover:text-white' to='#' onClick={handleLogout}>Log Out</Link>
          <Link to=''>

            <div className='bg-smokeyTopaz text-white rounded-full pr-4 pl-4 pt-2 pb-2 hover:bg-'>{user.name.substring(0,1).toUpperCase()}</div>
          </Link> */}
        </nav>
      </div>
    </header>
    )
}