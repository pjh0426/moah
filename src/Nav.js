// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import React from "react";
import './index.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
// import { LinkContainer } from "react-router-bootstrap";
import logo from './images/Moah_logo_web_bg.jpg';

const AppNav = () => {
	console.log('appNav');

    return (
	 <Navbar className="navbar-dark navbar-custom" expand="lg">
	  <Navbar.Brand href="#home">
		<img src={logo} alt="" className="logo_img"/>
	  </Navbar.Brand>
	  <Navbar.Toggle aria-controls="basic-navbar-nav" />
	  <Navbar.Collapse id="basic-navbar-nav">
		<Nav className="mr-auto">
		  <Nav.Link href="/home">Who's us</Nav.Link>
		  <Nav.Link href="/project">Projects</Nav.Link>
		  <Nav.Link href="/Posts">Posts</Nav.Link>
		  {/* <Nav.Link href="/contact">Contact us</Nav.Link> */}
		  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
			<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
			<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
			<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
			<NavDropdown.Divider />
			<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
		  </NavDropdown>
		</Nav>
	  </Navbar.Collapse>
	 </Navbar>
    );
}

export default AppNav;
