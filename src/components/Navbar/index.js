import React, { useState } from 'react';
import {NavLink}from 'react-router-dom';
import './style.css';

/**
* @author
* @function Navbar
**/

const Navbar = (props) => {


  const[search,setSearch]=useState(false);

 const submitSearch = (e) =>{
  e.preventDefault();
  alert('Search');

}

const openSearch=()=> {
   setSearch(true);

}

const searchClass= search ? 'serchInput active':'serchInput';

  return(
    <div  className="navbar">
      <ul className="navbarMenu">
        <li><NavLink href="#">Home</NavLink></li>
        <li><NavLink href="#">About Us</NavLink></li>
        <li><NavLink href="#">Post</NavLink></li>
        <li><NavLink href="#">Contact Us</NavLink></li>
      </ul>
      <div className="search">
         <form onSubmit={submitSearch}>
           <input type="text"className={searchClass} placeholder="Search"/> 
           <img onClick={openSearch} className="searchicon"src={require("../../asserts/icons/Search.png")}alt="Search"/>
         </form>
       </div>

    </div>
   )

 }

export default Navbar