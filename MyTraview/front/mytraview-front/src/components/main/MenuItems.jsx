import { Close } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'

const MenuItems = ({showMenu, active}) => {
  return (
    <div>
        <ul className={active ? 'flex-col flex items-center fixed inset-0 uppercase p-8 backdrop-blur-lg bg-black/40 gap-8 justify-center left-1/4 md:hidden' : 'hidden'}>
          <Close onClick={showMenu} className='cursor-pointer'/>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/SeventeenDistrict'>17도</Link></li>
          <li><Link to='/ArticleCreatepage'>이벤트</Link></li>
          <li><Link to='/viewAllArticles'>추천글</Link></li>
          <li><Link to='/ArticleDetailPage'>About</Link></li>
          <li><Link to='/ArticleCreatePage'>Contact</Link></li>
        </ul>
    </div>
  )
}

export default MenuItems