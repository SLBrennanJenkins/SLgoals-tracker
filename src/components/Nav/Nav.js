import React, { Component } from 'react';
import Menu from './Menu';
import Logout from './Logout';

class Nav extends Component {
  render() {
    return (
      <div className="navigation fixed left-0 top-0 bottom-0 w-[10%] bg-white shadow-custom">
        <Menu />
        <Logout />
      </div>
    );
  }
}

export default Nav;