import { Container, Row, Col,Button, Form, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands} from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link } from 'react-router-dom';
import React, { Component, useEffect, useState } from 'react';

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


import smsn from '../../Assets/smsnotification.png';


import push from '../../Assets/push-notifications.png';


function MyVerticallyCenteredModal(props) {
    return (

        <div className='puh-noti'>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >

<div className='sms-md-clo'>
        <Modal.Header closeButton>
            
          <Modal.Title id="contained-modal-title-vcenter">
          
          </Modal.Title>
         
        </Modal.Header>
        </div>

        <Modal.Body>
            <div className='pushnoti'>
            <FontAwesomeIcon icon={solid('check')} />
          <h4>Notification Sent</h4>
          <p>
          Lorem Ipsum is simply dummy text of the printing dummy and dummy typesetting industry.
          </p>

          <Button onClick={props.onHide}>OK</Button>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
      </Modal>
      </div>

    );
  }



function Smsnotification() {

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
                <Link to={'/Smsnotification'} className='active'> <img src={dash7} alt='' /> SMS Notification</Link>
              </li>
              <li>
                <Link to={'/Reports'}> <img src={dash8} alt='' /> Reports</Link>
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


            <div className='note-form-all'>
              
               <Row>
                <Col md={6}>
                    <div className='push-form'>

                        <div className='ph-inner'>

                            <div className='push-heading'>
                                <h3>SMS Notification</h3>
                                <p>Welcome back! Enter your title and content</p>
                            </div>

                    <Form>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Title</Form.Label>

                            <Form.Control type="email" placeholder="Title here" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">

                            <Form.Label>Notification Content</Form.Label>

                              <Form.Control
                                    as="textarea"
                                    placeholder="Enter notification content"
                                    style={{ height: '100px' }}
                                    />

                        </Form.Group>

                        <Button variant="primary" type="button" onClick={() => setModalShow(true)}>
                            Send Notifications
                        </Button>
                        </Form>
                       
                        </div>
                    </div>
                </Col>

                <Col md={6}>
                  <div className='push-in'>
                  <img src={smsn} alt='' /> 
                  </div>

                </Col>




               </Row>




            </div>

            



           


          </Col>

          </Row>
              
         </div>


      </div>
      
            </>
       
     
      
    
    );
    
  
}
  
  
  export default Smsnotification;
  