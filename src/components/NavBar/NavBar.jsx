import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-services';
import 'flowbite'
import 'flowbite-react'

export default function NavBar({user, setUser, setProperties}) {
  function handleLogout(){
    userService.logOut();
    setUser(null)
    setProperties([])
  }
  return (
    

<nav className="bg-linen border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pl-3 pr-3 mb-2">
    <Link to="/dashboard">
      <img className='h-16 pl-4 pt-2 pb-2' src="https://i.imgur.com/EKvTAFn.png" alt="" />     
    </Link>
  <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button type="button" className="flex text-sm bg-smokeyTopaz rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <span className="sr-only">Open user menu</span>
        <div className='pt-2.5 pb-2.5 pl-4 pr-4 text-white'>{user.name.substring(0,1).toUpperCase()}</div>
      </button>
      {/* <!-- Dropdown menu --> */}
      <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 " id="user-dropdown">
        <div className="px-4 py-3">
          <span className="block text-sm text-gray-900 dark:text-white">{user.name}</span>
          <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">{user.email}</span>
        </div>
        <ul className="py-2" aria-labelledby="user-menu-button">
          <li>
            <Link className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white' to='/manage-properties'>Manage Properties</Link>
          </li>
          <li>
            <Link className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white' to='/manage-tenants'>Manage Tenants</Link>
          </li>
          <li>
            <Link className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'>User Settings</Link>
          </li>
          <li>
            <Link className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white' to='#' onClick={handleLogout}>Logout</Link>
          </li>
        </ul>
      </div>
      <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-linen md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-linen dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <Link className='block py-2 px-3 text-gray-900 rounded hover:bg-smokeyTopaz md:hover:bg-transparent md:hover:text-smokeyTopaz md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700' to='/dashboard'>Dashboard</Link>
      </li>
      <li>
        <Link className='block py-2 px-3 text-gray-900 rounded hover:bg-smokeyTopaz md:hover:bg-transparent md:hover:text-smokeyTopaz md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700' to="/properties">Properties</Link>
      </li>
      <li>
        <Link className='block py-2 px-3 text-gray-900 rounded hover:bg-smokeyTopaz md:hover:bg-transparent md:hover:text-smokeyTopaz md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700' to="/maintenance">Maintenance</Link>
      </li>
      <li>
        <Link className='block py-2 px-3 text-gray-900 rounded hover:bg-smokeyTopaz md:hover:bg-transparent md:hover:text-smokeyTopaz md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700' to="/service">Service Request</Link>
      </li>
    </ul>
  </div>
  </div>
</nav>

    // <header className='w-lvw z-50'>
    //   <div className='flex bg-linen'>
    //     <Link to="/dashboard">
    //       <img className='h-16 pl-4 pt-2 pb-2' src="https://i.imgur.com/EKvTAFn.png" alt="" />
    //     </Link>
    //     <nav className='flex justify-end gap-2 pr-4 items-center w-screen'>
    //       <Link className='hover:bg-smokeyTopaz hover:opacity-75 p-4 rounded text-smokeyTopaz hover:text-white' to='/dashboard'>Dashboard</Link>

    //       <div className="dropdown relative inline-block group-hover:block">
    //         <Link className='hover:bg-smokeyTopaz hover:opacity-75 p-4 rounded text-smokeyTopaz hover:text-white' to="/properties">Properties</Link>
    //       </div>

    //       <div className="dropdown relative inline-block group-hover:block">
    //         <Link className='hover:bg-smokeyTopaz hover:opacity-75 p-4 rounded text-smokeyTopaz hover:text-white' to="/maintenance">Maintenance</Link>
    //       </div>

    //       <div className="dropdown relative inline-block group-hover:block">
    //         <Link className='hover:bg-smokeyTopaz hover:opacity-75 p-4 rounded text-smokeyTopaz hover:text-white' to="/service">Service Request</Link>
    //       </div>

    //       <div className="dropdown relative inline-block group-hover:block">
    //         <div className='bg-smokeyTopaz text-white rounded-full pr-4 pl-4 pt-2 pb-2 click:bg-white'>{user.name.substring(0,1).toUpperCase()}</div>
    //         <div className="dropdown-content right-0 hidden absolute bg-white shadow-sm z-10 rounded w-60">
    //           <Link className='hover:bg-smokeyTopaz hover:opacity-75 pl-7 pr-7 hover:text-white mb-1.5 rounded ml-0 text-nowrap' to='/manage-properties'>Manage Properties</Link><br />
    //           <Link className='hover:bg-smokeyTopaz hover:opacity-75 pl-7 pr-7 hover:text-white mb-1.5 rounded ml-0 text-nowrap' to='/manage-tenants'>Manage Tenants</Link><br />
    //           <Link className='hover:bg-smokeyTopaz hover:opacity-75 pl-7 pr-7 hover:text-white mb-1.5 rounded ml-0 text-nowrap'>User Settings</Link><br />
    //           <Link className='hover:bg-smokeyTopaz hover:opacity-75 pl-7 pr-7 hover:text-white mb-1.5 rounded ml-0' to='#' onClick={handleLogout}>Logout</Link>
    //         </div>
    //       </div>
    //     </nav>
    //   </div>
    // </header>
    )
}