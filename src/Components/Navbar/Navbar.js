import React, {Component, useState} from "react";
import {MenuItems} from './MenuItems';
import {Button} from '../Button';
import './Navbar.css';
import logo from '../../images/Moah_logo_web_bg.jpg';

const Navbar = () => {
    const [clicked, setClicked] = useState(false);

    return (
        <nav className='NavbarItems'>
            <div className='navbar-logo'>
		        <img src={logo} alt="" className="logo_img"/>
            </div>
            <div className='menu-icon' onClick={()=>setClicked(!clicked)}>
                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
            {/* <Button>Sign Up</Button> */}
        </nav>
    );
  };

 
export default Navbar;
