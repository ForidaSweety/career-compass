import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
    Bars3BottomRightIcon,
    XMarkIcon,
  } from '@heroicons/react/24/solid'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div className='bg-gray-100 mt-5 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
        <div className='relative flex items-center justify-between'>
      
          <div className='inline-flex items-center'>
            <span className='ml-2 text-2xl font-bold tracking-wide text-purple-500'>
              CareerCompass
            </span>
          </div>   

            
            <ul className='items-center hidden space-x-8 lg:flex'>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? 'text-blue-600' : '')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/statistics'
              className={({ isActive }) => (isActive ? 'text-blue-600' : '')}
            >
              Statistics
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/application'
              className={({ isActive }) => (isActive ? 'text-blue-600' : '')}
            >
              Applied Jobs
            </NavLink>
            </li>
            <li>
            <NavLink
              to='/blogs'
              className={({ isActive }) => (isActive ? 'text-blue-600' : '')}
            >
              Blogs
            </NavLink>
          </li>
          <button className='bg-purple-500 p-2 rounded-full text-white'>Start Applying</button>
        </ul>
        
        <div className='lg:hidden'>
          
          <button
            aria-label='Open Menu'
            title='Open Menu'
            onClick={() => setIsMenuOpen(true)}
          > 
            <Bars3BottomRightIcon className='w-5 text-gray-600' />
          </button>
          {isMenuOpen && (
            <div className='absolute top-0 left-0 w-full z-10'>
              <div className='p-5 bg-white border rounded shadow-sm'>
                
                <div className='flex items-center justify-between mb-4'>
                  <div>
                    <Link to='/' className='inline-flex items-center'>
                      <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                      CareerCompass
                      </span>
                    </Link>
                  </div>
                  {/* Dropdown close*/}
                  <div>
                    <button
                      aria-label='Close Menu'
                      title='Close Menu'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <XMarkIcon className='w-5 text-gray-600' />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav  */}
                <nav>
                  <ul className='space-y-4'>
                    <li>
                      <Link to='/' className='default'>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/statistics'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                        Statistics
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/application'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                         Applied Jobs
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/blogs'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                        Blogs
                      </Link>
                    </li>
                    <button className='bg-purple-500 p-2 rounded-full text-white'>Start Applying</button>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
        </div>
        </div>

    );
};

export default Header;