import React, { Component } from 'react';
import { NavLink, useLocation } from'react-router-dom';
import { MdDashboard, MdOutlineCalendarMonth } from "react-icons/md";
import { TbTargetArrow } from "react-icons/tb";

const menuItems = [
  { id: 1, title: 'Dashboard', path: '/', icon: <MdDashboard className="text-3xl mb-3" />},
  { id: 2, title: 'Month Goals', path: '/month', icon: <MdOutlineCalendarMonth className="text-3xl mb-3" />},
  { id: 3, title: 'All Goals', path: '/all', icon: <TbTargetArrow className="text-3xl mb-3" />},
];

class Menu extends Component {
    render() {
        return (
            <nav className="h-auto pt-8">
                <ul className="flex flex-col items-center">
                {menuItems.map((menuItem) => (
                    <li key={menuItem.id} className="w-8/12">                    
                        <NavLink to={menuItem.path} className={({ isActive }) => `menu-item py-3 flex flex-col items-center bg-white w-full text-sm mb-8 rounded transition-all hover:text-greydark ${isActive ? 'active text-greydark shadow-custom' : 'text-greylight'}`}>
                            {menuItem.icon}
                            {menuItem.title}
                        </NavLink>
                    </li>
                ))}
                </ul>
            </nav>
        );
    }
  }
  
  export default Menu;