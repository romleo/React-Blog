import React from 'react';
import './style.css';
import Card from '../UI/Card';

/**
* @author
* @function Sidebare
**/

const Sidebar = (props) => {
  return(
    <div className="sidebarConteiner">
     <Card style={{marginBottom:'20px'}}>
      <div className="cardHeader">
        <span>About US</span>
     </div>
      <div className>
        <img src="https://www.google.com/search?q=foldscope&tbm=isch&ved=2ahUKEwjKxqDbt73nAhUHsSoKHX6vCpcQ2-cCegQIABAA&oq=foldscope&gs_l=img.3..0j0i30l9.22228.36530..37228...2.0..0.142.2253.19j5......0....1..gws-wiz-img.....10..35i39j0i24j0i19j0i67j35i362i39.ClpFW8jQ63A&ei=vEo8Xsr4M4fiqgH-3qq4CQ&bih=558&biw=1280#imgrc=uHVPyf84ebdwMM&imgdii=24-dCiow1WK41M"/>

      </div>
     </Card>

     <Card>
      <div className="cardHeader">
        <span>Social Network</span>
     </div>
     </Card>




    </div>
  
   )

 }

export default Sidebar