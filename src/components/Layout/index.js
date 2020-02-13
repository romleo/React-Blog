import React from 'react';
import './style.css';
import Sidebar from '../Sidebar';

/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return(
    <div>
      <div className ="conteiner">
      {props.children}
      <Sidebar/>

    </div>


    <div>
      <h1>THIS IS FOOTER FOR ALL PAGES </h1>
    </div>

    </div>
      
      
  
   )

 }

export default Layout