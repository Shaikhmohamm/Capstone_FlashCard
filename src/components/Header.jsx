import React from 'react'
import logo from '../assets/logo.png'
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div>
      <div>
        <img className='w-[10vw]' src={logo} alt="logo" />
      </div>
      <div className='flex font-bold gap-3'>
        <Link to='/'  >Create Flash Card</Link>
        <Link to='/showflashcard'>Show Flash Card</Link>
      </div>
    </div>
  )
}

export default Header