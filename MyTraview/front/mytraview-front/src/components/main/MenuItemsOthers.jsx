import { Close } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'

const MenuItemsOthers = ({showMenu, active}) => {
  return (
    <div>
        <ul className={active ? 'flex-col flex items-center fixed inset-0 uppercase p-8 backdrop-blur-lg bg-black/40 gap-8 justify-center left-1/4 md:hidden' : 'hidden'}>
          <Close onClick={showMenu} className='cursor-pointer'/>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/EventPage">Event Sale</Link></li>
          <li><Link to='/SignInPage'>Sign In</Link></li>
          <li><Link to='/SignUpPage'>Sign Up</Link></li>
        </ul>
    </div>
  )
}

export default MenuItemsOthers