import React, { useState } from "react";
import logo from '../assets/arkle.png'
import { NavLink } from "react-router-dom";
import './Navbar.css';



const Navbar =() => {
    const [clicked,setClicked]=useState(false);
    const [dropdown,setDropdown]=useState(false);

    
   const  handleClick = () =>{
        setClicked(!clicked)
    };



return (
    <>
        <nav className="flex ">
           <NavLink to='/'><img src={logo} alt="arkle-logo" style={{width:'110px', marginTop:'-45px',marginLeft:'10px'}}/></NavLink> 
            <div className="li-nav" style={{fontSize:'1.2rem'}}>
                <ul id="navbar-1" className= {clicked? "#navbar-1 active" : "#navbar-1 flex"}>

                <li><NavLink to='/industries'>Industries</NavLink></li> 
                <li><NavLink to='/insights'>Capabilities</NavLink></li>
                <li><NavLink to='/carrers'>Careers</NavLink></li>
                <li><NavLink to='/contactus'>Contact us</NavLink></li> 
                </ul>
            </div>
            <div id="mobile" onClick={handleClick}>
                <i  style={{color:'black'}} id="bars" className={clicked ? 'fas fa-times' :'fas fa-bars'}></i>
            </div>
        
        </nav>
        
        </>
)
}



export default Navbar;