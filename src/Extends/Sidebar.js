import { Container, Row, Col, Button, Form, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link } from 'react-router-dom';
import React, { Component, useEffect, useState } from 'react';
import Slider from "react-slick";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Pagination from 'react-bootstrap/Pagination';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';


import NavDropdown from 'react-bootstrap/NavDropdown';


import weblogo from '../Assets/arc-logo.png';

import arcicon1 from '../Assets/arcicon1.png';
import arcicon2 from '../Assets/arcicon2.png';
import arcicon3 from '../Assets/arcicon3.png';
import arcicon4 from '../Assets/arcicon4.png';
import arcicon5 from '../Assets/arcicon5.png';
import arcicon6 from '../Assets/arcicon6.png';
import arcicon7 from '../Assets/arcicon7.png';
import arcicon8 from '../Assets/arcicon8.png';
import flg from '../Assets/flag.png';


// import Chart from './Chart';

const Sidebar= () => {
const [toggleState ,setToggleState] = useState("dashboard")

const getActiveClass = (tabnum,classname) => toggleState === tabnum ? classname : "";

function toggleActiveTab(tabName){
  setToggleState(tabName)
}
  return (


    <div className='nada-dashboard'>
      <div className='dashboard-side-nav'>

        <Row>

     

            <div className='dash-side-btn'>


              <div className='dash-logo'>

                <img src={weblogo} alt='' />

              </div>

              <div className='dash-inner-btn'>
                <div className='arc-sidebar'>
                  <ul className='dash-nav'>
                    <li onClick={() => toggleActiveTab('dashboard')}>
                      <Link to={'/Dashboard'} className={`${getActiveClass('dashboard','tabActive')}`}> <img src={arcicon1} alt='' />  Dashboard</Link>
                    </li>
                    <li onClick={() => toggleActiveTab('Analytics')}>
                      <Link to={'/Analytics'} className={`${getActiveClass('Analytics','tabActive')}`}> <img src={arcicon2} alt='' /> Analytics</Link>

                    </li >
                    <li onClick={() => toggleActiveTab(' Phone-Numbers')}>
                      <Link to={'/'} className={`${getActiveClass(' Phone-Numbers','tabActive')}`}> <img src={arcicon3} alt='' /> Phone Numbers</Link>
                    </li>
                    <li onClick={() => toggleActiveTab('Teams')}>
                      <Link to={'/'} className={`${getActiveClass('Teams','tabActive')}`}>  <img src={arcicon4} alt='' />  Teams</Link>

                      {/* <span>
              <NavDropdown title="" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            </span> */}

                    </li>
                    <li onClick={() => toggleActiveTab('Contacts')}>
                      <Link to={'/'} className={`${getActiveClass('Contacts','tabActive')}`}> <img src={arcicon5} alt='' /> Contacts</Link>
                    </li>
                    <li onClick={() => toggleActiveTab('Call Logs')}>
                      <Link to={'/'} className={`${getActiveClass('Call Logs','tabActive')}`}> <img src={arcicon6} alt='' /> Call Logs</Link>
                    </li>
                    <li onClick={() => toggleActiveTab('SMS & MM')}>
                      <Link to={'/'} className={`${getActiveClass('SMS & MM','tabActive')}`}> <img src={arcicon7} alt='' /> SMS & MMS</Link>
                    </li>
                    <li onClick={() => toggleActiveTab('White-board')}>
                      <Link to={'/'} className={`${getActiveClass('White-board','tabActive')}`}> <img src={arcicon8} alt='' /> White board</Link>
                    </li>

                  </ul>
                </div>

                <div className='select-lang'>
                  <h5>Select Language</h5>

                  <Form.Select aria-label="Default select example">
                    <option img src={flg} alt=''  > English</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </div>
              </div>




            </div>


       


          

        </Row>

      </div>


    </div>



  );


}


export default Sidebar;