import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <img className='logo' src={assets.logo} alt="Logo" />
        
        {/* Optional Divider */}
        <div className="sidebar-divider"></div>
        
        <NavLink to='/add' className="sidebar-option">
          <img src={assets.add_icon} alt="" />
          <p>Add Items</p>
        </NavLink>
        
        <NavLink to='/list' className="sidebar-option">
          <img src={assets.order_icon} alt="" />
          <p>List Items</p>
          {/* Optional notification badge */}
          {/* <span className="badge">5</span> */}
        </NavLink>
        
        <NavLink to='/orders' className="sidebar-option">
          <img src={assets.order_icon} alt="" />
          <p>Orders</p>
          {/* Optional notification badge */}
          {/* <span className="badge">3</span> */}
        </NavLink>
        
        <img className='profile' src={assets.profile_image} alt="Profile" />
      </div>
    </div>
  )
}

export default Sidebar