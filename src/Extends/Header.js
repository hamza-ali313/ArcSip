
import React, { Component, useState } from 'react';
import ReactDOM, { render } from 'react-dom';
import { Link, NavLink } from "react-router-dom";
import { Navbar, Container, Nav, Row, Col, Form, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands, solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro';


// LOGO
// import sitelogo from '../Assets/Logo.png';
// import ScrollToTop from '../Views/ScrollToTop/MySlider';

function Header() {
  
  const [expanded, setExpanded] = useState(false);
  
  
  const setExpand = () => {
    setExpanded(false);
    // window.scrollTo(0, 0);
  }
  

    return (
      <div className='main-header'>
      
        {/* <div className='top-row'>
          <Container>
            <div className='top-or'>
        <Link to={'/'}><FontAwesomeIcon icon={solid('phone')} />(123) 456-7891</Link>
        <Link className='head-loc' to={'/'}><FontAwesomeIcon icon={solid('location-dot')} />Lorem ipsum 123 Country, USA city xxx 0000</Link>
        <span><Link to={'/'}><FontAwesomeIcon icon={solid('envelope')} />whalleylawpllc@gmail.com</Link></span>
       
        </div>
        </Container>
        </div>


        <Navbar className='kgm-head' bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Your Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            <ul>
            <li><NavLink exact='true' as={Link} to={'/Aboutus'} onClick={setExpand}>About Us</NavLink></li>
            <li><NavLink exact='true' as={Link} to={'/'} onClick={setExpand}>Practice areas</NavLink></li>
            <li><NavLink exact='true' as={Link} to={'/'} onClick={setExpand}>Our team</NavLink></li>
            <li><NavLink exact='true' as={Link} to={'/'} onClick={setExpand}>Testimonials</NavLink></li>
            <li><NavLink exact='true' as={Link} to={'/'} onClick={setExpand}>Contact</NavLink></li>
            </ul>
            <ul>
              <li><NavLink exact='true' as={Link} to={'/'} onClick={setExpand}></NavLink></li>
            </ul>
            <ul className='ser-user'>
              <li><Link className='magnifuing-ic' to={'/'}><FontAwesomeIcon icon={solid('magnifying-glass')} /></Link></li>
              <li><Link to={'/'}><FontAwesomeIcon icon={solid('user')} /></Link></li>
            </ul>
          </Nav>
        </Navbar.Collapse>
      
        
      </Container>
    </Navbar> */}
      
    </div>
           
    );
  }
  
  export default Header;
  