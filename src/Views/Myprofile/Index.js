import { Container, Row, Col,Button, Form, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands} from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link } from 'react-router-dom';
import React, { Component, useEffect, useState } from 'react';
import Slider from "react-slick";
import Dropdown from 'react-bootstrap/Dropdown';

import Modal from 'react-bootstrap/Modal';

import weblogo from '../../Assets/logo.png';

import dash1 from '../../Assets/dashboard.png';
import dash2 from '../../Assets/trending.png';
import dash3 from '../../Assets/user.png';
import dash4 from '../../Assets/date.png';
import dash5 from '../../Assets/date-ideas.png';
import dash6 from '../../Assets/push-notification.png';
import dash7 from '../../Assets/sms-notification.png';
import dash8 from '../../Assets/reports.png';
import stuser from '../../Assets/stephin.png';


import profile from '../../Assets/my-profile.png';
import logout from '../../Assets/logout.png';
import you from '../../Assets/my-prof.png';
import edi from '../../Assets/edit.png';



function MyVerticallyCenteredModal(props) {
    return (

        <div className='email-prof'>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >

<div className='puh-md-clo'>
        <Modal.Header closeButton>
            
          <Modal.Title id="contained-modal-title-vcenter">
          
          </Modal.Title>
         
        </Modal.Header>
        </div>

        <Modal.Body>
            <div className='pushnoti yprofile'>
           
          <h4>Change Email</h4>
            
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Enter email</Form.Label>
          <Form.Control type="text" placeholder="jasonroeadamin@gmail.com" />                                          
           </Form.Group>
          </div>
          <div className='email-pro'>
           <Button variant="primary" type="button" > Change</Button>
           </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
      </Modal>
      </div>

    );
  }







function Myprofile() {
  
    const [modalShow, setModalShow] = React.useState(false);


  
  
    
    return (


        <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        
      />

      <div className='nada-dashboard'>
         <div className='dashboard-side-nav'>
       
            <Row>
            
            <Col md={2} lg={2}>

            <div className='dash-side-btn'>

              <div className='dash-logo'>
               
              <img src={weblogo} alt='' />

              </div>

              <div className='dash-inner-btn'>
         
            <ul className='dash-nav'>
              <li>
                <Link to={'/Dashboard'} > <img src={dash1} alt='' />  Dashboard</Link>
              </li>
              <li>
                <Link to={'/Trending'}> <img src={dash2} alt='' />  Trending</Link>
              </li>
              <li>
                <Link to={'/User'}> <img src={dash3} alt='' /> Users</Link>
              </li>
              <li>
                <Link to={'/Date'}> <img src={dash4} alt='' /> Dates</Link>
              </li>
              <li>
                <Link to={'/Dateidea'}> <img src={dash5} alt='' /> Date Ideas</Link>
              </li>
              <li>
                <Link to={'/PushNotification'}> <img src={dash6} alt='' /> Push Notification</Link>
              </li>
              <li>
                <Link to={'/Smsnotification'}> <img src={dash7} alt='' /> SMS Notification</Link>
              </li>
              <li>
                <Link to={'/Reports'} className='active'> <img src={dash8} alt='' /> Reports</Link>
              </li>

            </ul>
            </div>
              </div>
          </Col>

          
          <Col md={10} lg={10}>
             
             <div className='top-header'>
            <div className='head-user'>
            <img src={stuser} alt='' /> 
            <h6>Stephen Austin <span> Super Admin</span></h6>

            <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic"><i class="fa-duotone fa-chevron-down"></i>
      
      </Dropdown.Toggle>

      <Dropdown.Menu>
      <Dropdown.Item href="#/action-1"><img src={profile} alt='' /><Link to={'/Myprofile'}> My Profile </Link></Dropdown.Item>
      <Dropdown.Item href="#/action-2"><img src={logout} alt='' /><Link to={'/Logout'}> Logout </Link></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            </div>
             
            </div>



            <Row>
            <Col md={12} lg={12}>

                
               <div className='prifile-log'>

                    <Row>
                        <Col md={3}>
                        <div className='dte-id'>
                            <img src={you} alt='' />
                            <h4>Pimpi Roe</h4>
                             <small>Lorem Ipsum Here</small>
                            <div className='dat-cemrea cam-prof'>

                            <Form.Control type="file" />
                            <p>Change Photo</p>
                            <FontAwesomeIcon icon={solid('camera')} />
                            </div>


                            </div>
                        </Col>

                        <Col md={9}>
                            <div className='profile-fr'>
                                <div className='prf-heading'>
                                    <h3>Personal Information</h3>
                                </div>
                                <Row>
                                    <Col md={6}>
                                        <div className='prof-inner'>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text" placeholder="Jason Roe" />
                                        <img src={edi} alt='' onClick={() => setModalShow(true)} />
                                        </Form.Group>
                                        </div>
                                    </Col>

                                    <Col md={6}>
                                        <div className='prof-inner'>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text" placeholder="Admin" />
                                        <img src={edi} alt='' onClick={() => setModalShow(true)}/>
                                        </Form.Group>
                                        </div>
                                    </Col>


                                    <Col md={6}>
                                        <div className='prof-inner'>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="mail" placeholder="jasonroeadmin@gmail.com" />
                                        <img src={edi} alt='' onClick={() => setModalShow(true)}/>
                                        </Form.Group>
                                        </div>
                                    </Col>

                                    <Col md={6}>
                                        <div className='prof-inner'>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control type="text" placeholder="0 123-456-789 (0)" />
                                        <img src={edi} alt='' onClick={() => setModalShow(true)}/>
                                        </Form.Group>
                                        </div>
                                    </Col>
                                   
                                   <div className='myprofile-btn'>
                                   <Button variant="primary" type="button" > Save Changes</Button>
                                   </div>


                                </Row>
                            </div>
                        </Col>



                    </Row>






               </div> 

                  
              </Col>


            </Row>


          </Col>

          </Row>
              
         </div>


      </div>
      
       </>
     
      
    
    );
    
  
}

export default Myprofile;
  