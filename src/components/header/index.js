import React from './node_modules/react';
import './style.css';
/**
* @author
* @function Header
**/

const Header = (props) => {
  return(
    <header className="header">
      <nav className="headerMenu">
        <a href="#">Home</a>
        <a href="#">About US</a>
        <a href="#">Contact US</a>
     </nav>
     <div>
       social Media links
     </div>
    </header>
   )

 }

export default Header

