import React, { Component } from 'react';
import { NavLink } from'react-router-dom';
import { CiLogout } from "react-icons/ci";


class Menu extends Component {
    render() {
        return (
            <ul className="h-auto flex flex-col items-center absolute bottom-8 w-full">
                <li className="w-8/12">                    
                    <NavLink className="menu-item text-greylight py-3 flex flex-col items-center bg-white w-full text-sm rounded transition-all hover:text-greydark">
                        <CiLogout className="text-3xl mb-3"/>
                        Logout
                    </NavLink>
                </li>
            </ul>
        );
    }
  }
  
  export default Menu;