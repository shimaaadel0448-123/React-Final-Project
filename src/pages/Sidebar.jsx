import React from 'react'
import {
  BsGem,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillPaletteFill,
  BsPeopleFill,
  BsCartCheckFill,
  BsMenuButtonWideFill,
  BsFillGearFill
} from 'react-icons/bs'

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <BsGem className='icon_header' /> Diamond
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <a href="">
            <BsGrid1X2Fill className='icon' /> Dashboard
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsFillArchiveFill className='icon' /> Products
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsFillPaletteFill className='icon' /> Designs
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsPeopleFill className='icon' /> Clients
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsCartCheckFill className='icon' /> Orders
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsMenuButtonWideFill className='icon' /> Reports
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsFillGearFill className='icon' /> Settings
          </a>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar
