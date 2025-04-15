import React from 'react'
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify
} from 'react-icons/bs'

function Header({ OpenSidebar }) {
  return (
    <header className='header'>
      <div className='menu-icon'>
        <BsJustify className='icon' onClick={OpenSidebar} />
      </div>

      <div className='header-left'>
        <div className='search-bar'>
          <BsSearch className='icon' />
        </div>
      </div>

      <div className='header-right'>
        <BsFillBellFill className='icon' title="Notifications" />
        <BsFillEnvelopeFill className='icon' title="Messages" />
        <BsPersonCircle className='icon' title="Account" />
      </div>
    </header>
  )
}

export default Header
