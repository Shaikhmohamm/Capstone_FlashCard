import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const [title, setTitle] = useState('Create Flashcard');
  const location = useLocation();

  // useEffect to listen for changes in location
  useEffect(() => {
    // Update the title based on the current path
    if (location.pathname === '/') {
      setTitle('Create Flashcard');
    } else if (location.pathname === '/showflashcard') {
      setTitle('Show Flashcard');
    }
  }, [location.pathname]);

  return (
    <div>
      <div data-testid = 'test-logo' className='bg-white'>
        <img className='w-[10vw]' src={logo} alt="logo" />
      </div>
      <div className='p-2 mx-5 md:mx-10'>
        <div className='mb-2'>
          <h1 className='text-2xl font-bold'>
            {title}
          </h1>
        </div>
        <div  data-testid = 'test-header' className='flex text-lg gap-3'>
          <Link to='/'
            data-testid="test-create-flashcard-link"
            className={`font-semibold hover:text-red-500 transition-all transition-duration-300 ease-in 
          ${location.pathname === '/' ? 'text-red-500' : 'text-black'}`}
          >
            Create Flashcard
            <hr
              className={
                "border-[3px]" +
                (location.pathname === "/"
                  ? " relative top-[5px] transition-all transition-duration-300 ease-in-out border-red-500 translate-x-[0] "
                  : " transition-all transition-duration-300 ease-in-out translate-x-[105%] relative top-[5px] border-red-500")
              }
            />
          </Link>
          <Link to='/showflashcard'
            data-testid="test-show-flashcard-link"
            className={`font-semibold hover:text-red-500 transition-all transition-duration-300 ease-in 
          ${location.pathname === '/showflashcard' ? 'text-red-500' : 'text-black'}`}
          >
            Show Flashcard
          </Link>
        </div>
        <hr className=" border-slate-200 border-[3px] w-full" />
      </div>
    </div>
  );
}

export default Header;
