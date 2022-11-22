import { Container, Row, Col,Button, Form, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands} from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link } from 'react-router-dom';
import React, { Component, useEffect, useState } from 'react';
import Slider from "react-slick";
import Dropdown from 'react-bootstrap/Dropdown';
import Pagination from 'react-bootstrap/Pagination';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';


import DropdownButton from 'react-bootstrap/DropdownButton';


import sina from '../../Assets/login-logo.png';
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
import block from '../../Assets/suggested-date.png';  

import updown from '../../Assets/up-down.png';
import men from '../../Assets/table-im-1.png';
import women from '../../Assets/table-im-2.png';
import profile from '../../Assets/my-profile.png';
import logout from '../../Assets/logout.png';

import yel from '../../Assets/yellow-eye.png';
import cl from '../../Assets/edit-cl.png';
import bl from '../../Assets/bl-block.png';
import del from '../../Assets/red-dust.png';
import drag from '../../Assets/drag.png';

import ad1 from '../../Assets/add-1.png';
import ad2 from '../../Assets/add-2.png';
import ad3 from '../../Assets/add-3.png';
import usedet from '../../Assets/user-detail.png';




function MyVerticallyCenteredModal(props) {
  return (

      <div className='puh-noti'>
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >

<div className='add-user'>
      <Modal.Header closeButton>
          
        <Modal.Title id="contained-modal-title-vcenter">
        Add Users
        </Modal.Title>
       
      </Modal.Header>
      </div>

      <Modal.Body>
          <div className='ad-all'>
            
            <div className='us-drag'>
            
        <Form.Control type="file" />
      
            <img src={drag} alt='' /> 
            <h5>Drag and Drop Image here</h5>
            </div>

            <div className='aduser-im'>
              <Row>

                <Col md={2}>
                  <div className='user-inner-im'>
                  <FontAwesomeIcon icon={solid('x')} />
                  <img src={ad1} alt='' /> 
                  </div>
                </Col>

                <Col md={2}>
                  <div className='user-inner-im'>
                  <FontAwesomeIcon icon={solid('x')} />
                  <img src={ad2} alt='' /> 
                  </div>
                </Col>

                <Col md={2}>
                  <div className='user-inner-im'>
                  <FontAwesomeIcon icon={solid('x')} />
                  <img src={ad3} alt='' /> 
                  </div>
                </Col>

                <Col md={2}>
                  <div className='plus-user'>
                  <Form.Control type="file" />
                  <FontAwesomeIcon icon={solid('plus')} />
                  <p>Add More</p>
                  
                  </div>
                </Col>
              </Row>
            </div>
           
            <div className='scrollbar' id='style-2'>
           <div className='user-ad-form'>
             
             <Row>


              <Col md={6}>
                <div className='fr-inner'>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="Thomas D" />
                </Form.Group>
                </div>
              </Col>

              <Col md={6}>
                <div className='fr-inner'>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Gallerson" />
                </Form.Group>
                </div>
              </Col>

             </Row>


             <Row>
              <Col md={6}>
                <div className='fr-inner'>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Phone number</Form.Label>
                  <Form.Control type="phone" placeholder="123-456-789-0" />
                </Form.Group>
                </div>
              </Col>

              <Col md={6}>
                <div className='fr-inner'>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Occupation</Form.Label>
                  <Form.Control type="text" placeholder="Occupation" />
                </Form.Group>
                </div>
              </Col>

              </Row>



              <Row>
              <Col md={6}>
                <div className='fr-inner'>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Gender</Form.Label>
                  <Form.Control type="text" placeholder="Male" />
                </Form.Group>
                </div>
              </Col>

              <Col md={6}>
                <div className='fr-inner'>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Sexual preference</Form.Label>
                  <Form.Control type="text" placeholder="Sexual preference" />
                </Form.Group>
                </div>
              </Col>

              </Row>

              <Row>
                <Col md={12}>
                <div className='fr-inner'>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Description</Form.Label>
                  <Form.Control as="textarea" placeholder='Enter description' rows={3} />
                </Form.Group>
                  </div>
                </Col>
              </Row>



              <Row>
                <Col md={6}>
                <div className='fr-inner fr-role'>
                <Form.Label>User Role</Form.Label>
                <InputGroup className="mb-3" placeholder='User Admin'>
        <Form.Control aria-label="Text input with dropdown button" />

        <DropdownButton
          variant="outline-secondary"
          id="input-group-dropdown-2"
          align="end"
        >
          <Dropdown.Item href="#">Example1</Dropdown.Item>
          <Dropdown.Item href="#">Example2</Dropdown.Item>
          <Dropdown.Item href="#">Example3</Dropdown.Item>
          <Dropdown.Item href="#">Example4</Dropdown.Item>
        </DropdownButton>
      </InputGroup>
                </div>
              
                </Col>
               
               <Col md={6}>
                <div className='user-birth'>
                <Row>
                  <Col md={4}>
                    <div className='fr-inner'>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Birthday</Form.Label>
                  <Form.Control type="text" placeholder="MM" />
                </Form.Group>
                    </div>
                  </Col>

                  <Col md={4}>
                    <div className='fr-inner'>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label></Form.Label>
                  <Form.Control type="text" placeholder="DD" />
                </Form.Group>
                    </div>
                  </Col>

                  <Col md={4}>
                    <div className='fr-inner'>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label></Form.Label>
                  <Form.Control type="text" placeholder="YYYY" />
                </Form.Group>
                    </div>
                  </Col>
                </Row>
                </div>
               </Col>



              </Row>

           </div>
           </div>

           
           <div className='user-bt-add'>
           <Button variant="primary" type="button" ><FontAwesomeIcon icon={solid('plus')} /> Add Users</Button>
           </div>
          
        </div>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
    </div>

  );
}





function MyUserDetail(props) {
  return (

      <div className='puh-noti'>
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >

<div className='add-user'>
      <Modal.Header closeButton>
          
        <Modal.Title id="contained-modal-title-vcenter">
       Users Details
        </Modal.Title>
       
      </Modal.Header>
      </div>

      <Modal.Body>

           <div className='user-renato'>
           <img src={usedet} alt='' /> 
           <FontAwesomeIcon icon={solid('plus')} />
           </div>
           <div className='user-cont-keul'>
           <h3>Renato Keuller</h3>
           <p>01234567899876543210</p>
           </div>

           <div className='user-rent'>
             
             <Row>


              <Col md={6}>
                <div className='fr-inner'>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="Jason" />
                </Form.Group>
                </div>
              </Col>

              <Col md={6}>
                <div className='fr-inner'>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Renato Keuller" />
                </Form.Group>
                </div>
              </Col>

             </Row>


             <Row>
              <Col md={6}>
                <div className='fr-inner'>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Age</Form.Label>
                  <Form.Control type="text" placeholder="28" />
                </Form.Group>
                </div>
              </Col>

              <Col md={6}>
                <div className='fr-inner'>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Gender</Form.Label>
                  <Form.Control type="text" placeholder="Male" />
                </Form.Group>
                </div>
              </Col>

              </Row>



              <Row>
              <Col md={6}>
              <div className='fr-inner fr-role use-fr-ren'>
                <Form.Label>Account Status (Packages)</Form.Label>
                

                <input
            type="date"
            name="num_4"
          />
    

    <Form.Label>User Role</Form.Label>
                
    <Form.Select aria-label="Default select example">
      <option>User Admin</option>
      <option value="1"> User</option>
      <option value="2"> User Admin</option>
     
    </Form.Select>




                </div>
              </Col>

              <Col md={6}>
                <div className='fr-inner su-limit'>
                      
                <Form.Label>User Limits</Form.Label>

                  <div className='super-li'>
               
                <Form.Select aria-label="Default select example">
      <option>Created Dates</option>
      <option value="1">Created Dates</option>
      <option value="2">Likes</option>
      <option value="3">Super Likes</option>
    </Form.Select>

    <Form.Control type="text" placeholder="10" />

    </div>


               
                  
                
               
                </div>
              </Col>
              </Row>




             

           </div>

           
           <div className='user-bt-add'>
           <Button variant="primary" type="button" > Save Edits</Button>
           </div>
          
        {/* </div> */}
      </Modal.Body>
      
    </Modal>
    </div>

  );
}


function User() {

  const [modalShow, setModalShow] = React.useState(false);

  const [userdetail, setUseDetail] = React.useState(false);
  


 
    
    return (

      <>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        
      />



<MyUserDetail
        show={userdetail}
        onHide={() => setUseDetail(false)}
        
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
                <Link to={'/User'} className='active'> <img src={dash3} alt='' /> Users</Link>
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



            <Row>
            <Col md={12} lg={12}>

                


              
                  <div className='activity-table-all dash-one'>

                    <div className='create-btn'>
                      <h3>Nada User</h3>

                      <Button variant="primary" type="button" onClick={() => setModalShow(true)}> <FontAwesomeIcon icon={solid('plus')} /> Add Users</Button>
                     
                    </div>

                    <div className='activity-btn-gr'>
                    
                    <div className='user-tab'>
                    <Tabs
                        defaultActiveKey="home"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                        >



                        <Tab eventKey="home" title="All User" className='wht-user'>


                        <div className='user-match all-active'>
                      <h4>All User</h4>
                      <div className='user-dob-int'>
                        
                        <div className='sh-ent'>
                          <p>Show</p>
                          <input
                                type="number"
                                name="num_1"
                            />
                        <p>Entries</p>
                        </div>

                        <div className='tb-search'>
                        <Form.Control type="text" placeholder="Search" />
                        </div>

                      </div>
                    </div>

                    <div className='nada-tbl dsh-on'>


    <Table>

      <thead>
        <tr>
          <th> <Link to={'/'}><img src={updown} alt='' />No</Link>  </th>
          <th> <Link to={'/'}><img src={updown} alt='' />User Id</Link>  </th>
          <th> <Link to={'/'}><img src={updown} alt='' />Image</Link>  </th>
          <th> <Link to={'/'}><img src={updown} alt='' />Name</Link>  </th>
          <th> <Link to={'/'}><img src={updown} alt='' /> Age</Link> </th>
          <th> <Link to={'/'}><img src={updown} alt='' /> Gender</Link> </th>
          <th> <Link to={'/'}><img src={updown} alt='' /> Account status</Link> </th>
          <th> <Link to={'/'}><img src={updown} alt='' /> Action</Link> </th>
        
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>01</td>

          <td>01234567899876543210</td>

          <td><img src={men} alt='' /></td>

          <td> Renato Keuller</td>

         <td>20</td>

         <td>Male</td>

          <td><Button variant="primary" type="submit" className="btn btn-primary premium">Premium</Button></td>

          <td>
            <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
      
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" onClick={() => setUseDetail(true)}><img src={yel} alt='' />    View</Dropdown.Item>
        <Dropdown.Item href="#/action-2"><img src={cl} alt='' />    Edit</Dropdown.Item>
        <Dropdown.Item href="#/action-3"><img src={bl} alt='' />    Block</Dropdown.Item>
        <Dropdown.Item href="#/action-4"><img src={del} alt='' />    Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </td>
        </tr>

        <tr>
          <td>02</td>

          <td>01234567899876543210</td>

          <td><img src={men} alt='' /></td>

          <td> Renato Keuller</td>

         <td>20</td>

         <td>Male</td>

          <td><Button variant="primary" type="submit" className="btn btn-primary premium">Premium</Button></td>

          <td>
            <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
      
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" onClick={() => setUseDetail(true)}><img src={yel} alt='' />    View</Dropdown.Item>
        <Dropdown.Item href="#/action-2"><img src={cl} alt='' />    Edit</Dropdown.Item>
        <Dropdown.Item href="#/action-3"><img src={bl} alt='' />    Block</Dropdown.Item>
        <Dropdown.Item href="#/action-4"><img src={del} alt='' />    Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </td>
        </tr>

        <tr>
          <td>03</td>

          <td>01234567899876543210</td>

          <td><img src={men} alt='' /></td>

          <td> Renato Keuller</td>

         <td>20</td>

         <td>Male</td>

          <td><Button variant="primary" type="submit" className="btn btn-primary rsv">Free</Button></td>

          <td>
            <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
      
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" onClick={() => setUseDetail(true)}><img src={yel} alt='' />    View</Dropdown.Item>
        <Dropdown.Item href="#/action-2"><img src={cl} alt='' />    Edit</Dropdown.Item>
        <Dropdown.Item href="#/action-3"><img src={bl} alt='' />    Block</Dropdown.Item>
        <Dropdown.Item href="#/action-4"><img src={del} alt='' />    Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </td>
        </tr>

        <tr>
          <td>04</td>

          <td>01234567899876543210</td>

          <td><img src={men} alt='' /></td>

          <td> Renato Keuller</td>

         <td>20</td>

         <td>Male</td>

          <td><Button variant="primary" type="submit" className="btn btn-primary rsv">Free</Button></td>

          <td>
            <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
      
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" onClick={() => setUseDetail(true)}><img src={yel} alt='' />    View</Dropdown.Item>
        <Dropdown.Item href="#/action-2"><img src={cl} alt='' />    Edit</Dropdown.Item>
        <Dropdown.Item href="#/action-3"><img src={bl} alt='' />    Block</Dropdown.Item>
        <Dropdown.Item href="#/action-4"><img src={del} alt='' />    Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </td>
        </tr>


        <tr>
          <td>05</td>

          <td>01234567899876543210</td>

          <td><img src={men} alt='' /></td>

          <td> Renato Keuller</td>

         <td>20</td>

         <td>Male</td>

          <td><Button variant="primary" type="submit" className="btn btn-primary rsv">Free</Button></td>

          <td>
            <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
      
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" onClick={() => setUseDetail(true)}><img src={yel} alt='' />    View</Dropdown.Item>
        <Dropdown.Item href="#/action-2"><img src={cl} alt='' />    Edit</Dropdown.Item>
        <Dropdown.Item href="#/action-3"><img src={bl} alt='' />    Block</Dropdown.Item>
        <Dropdown.Item href="#/action-4"><img src={del} alt='' />    Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </td>
        </tr>

        <tr>
          <td>06</td>

          <td>01234567899876543210</td>

          <td><img src={men} alt='' /></td>

          <td> Renato Keuller</td>

         <td>20</td>

         <td>Male</td>

          <td><Button variant="primary" type="submit" className="btn btn-primary rsv">Free</Button></td>

          <td>
            <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
      
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" onClick={() => setUseDetail(true)}><img src={yel} alt='' />    View</Dropdown.Item>
        <Dropdown.Item href="#/action-2"><img src={cl} alt='' />    Edit</Dropdown.Item>
        <Dropdown.Item href="#/action-3"><img src={bl} alt='' />    Block</Dropdown.Item>
        <Dropdown.Item href="#/action-4"><img src={del} alt='' />    Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </td>
        </tr>

         <tr>
          <td>07</td>

          <td>01234567899876543210</td>

          <td><img src={men} alt='' /></td>

          <td> Renato Keuller</td>

         <td>20</td>

         <td>Male</td>

          <td><Button variant="primary" type="submit" className="btn btn-primary rsv">Free</Button></td>

          <td>
            <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
      
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" onClick={() => setUseDetail(true)}><img src={yel} alt='' />    View</Dropdown.Item>
        <Dropdown.Item href="#/action-2"><img src={cl} alt='' />    Edit</Dropdown.Item>
        <Dropdown.Item href="#/action-3"><img src={bl} alt='' />    Block</Dropdown.Item>
        <Dropdown.Item href="#/action-4"><img src={del} alt='' />    Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </td>
        </tr>


        <tr>
          <td>08</td>

          <td>01234567899876543210</td>

          <td><img src={men} alt='' /></td>

          <td> Renato Keuller</td>

         <td>20</td>

         <td>Male</td>

          <td><Button variant="primary" type="submit" className="btn btn-primary premium">Premium</Button></td>

          <td>
            <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
      
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" onClick={() => setUseDetail(true)}><img src={yel} alt='' />    View</Dropdown.Item>
        <Dropdown.Item href="#/action-2"><img src={cl} alt='' />    Edit</Dropdown.Item>
        <Dropdown.Item href="#/action-3"><img src={bl} alt='' />    Block</Dropdown.Item>
        <Dropdown.Item href="#/action-4"><img src={del} alt='' />    Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </td>
        </tr>


        <tr>
          <td>09</td>

          <td>01234567899876543210</td>

          <td><img src={men} alt='' /></td>

          <td> Renato Keuller</td>

         <td>20</td>

         <td>Male</td>

          <td><Button variant="primary" type="submit" className="btn btn-primary premium">Premium</Button></td>

          <td>
            <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
      
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" onClick={() => setUseDetail(true)}><img src={yel} alt='' />    View</Dropdown.Item>
        <Dropdown.Item href="#/action-2"><img src={cl} alt='' />    Edit</Dropdown.Item>
        <Dropdown.Item href="#/action-3"><img src={bl} alt='' />    Block</Dropdown.Item>
        <Dropdown.Item href="#/action-4"><img src={del} alt='' />    Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </td>
        </tr>


        <tr>
          <td>10</td>

          <td>01234567899876543210</td>

          <td><img src={men} alt='' /></td>

          <td> Renato Keuller</td>

         <td>20</td>

         <td>Male</td>

          <td><Button variant="primary" type="submit" className="btn btn-primary premium">Premium</Button></td>

          <td>
            <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
      
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" onClick={() => setUseDetail(true)}><img src={yel} alt='' />    View</Dropdown.Item>
        <Dropdown.Item href="#/action-2"><img src={cl} alt='' />    Edit</Dropdown.Item>
        <Dropdown.Item href="#/action-3"><img src={bl} alt='' />    Block</Dropdown.Item>
        <Dropdown.Item href="#/action-4"><img src={del} alt='' />    Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </td>
        </tr>
    

      </tbody>
    </Table>

                    </div>










                        </Tab>





                        
                        <Tab eventKey="profile" title="Blocked User">

                        <div className='user-match all-active'>
                      <h4>All Blocked users</h4>
                    </div>

                    <div className='nada-tbl dsh-on'>


    <Table>

      <thead>
        <tr>
          <th> <Link to={'/'}><img src={updown} alt='' />No</Link>  </th>
          <th> <Link to={'/'}><img src={updown} alt='' />User Id</Link>  </th>
          <th> <Link to={'/'}><img src={updown} alt='' />Image</Link>  </th>
          <th> <Link to={'/'}><img src={updown} alt='' />Name</Link>  </th>
          <th> <Link to={'/'}><img src={updown} alt='' /> Age</Link> </th>
          <th> <Link to={'/'}><img src={updown} alt='' /> Gender</Link> </th>
          <th> <Link to={'/'}><img src={updown} alt='' /> Account status</Link> </th>
          <th> <Link to={'/'}><img src={updown} alt='' /> Action</Link> </th>
        
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>01</td>

          <td>01234567899876543210</td>

          <td><img src={men} alt='' /></td>

          <td> Renato Keuller</td>

         <td>20</td>

         <td>Male</td>

          <td><Button variant="primary" type="submit" className="btn btn-primary premium">Premium</Button></td>

          <td><Button variant="primary" type="submit" className="btn btn-primary blk"><img src={block} alt='' /> Unblock</Button></td>
        </tr>

        <tr>
          <td>02</td>

          <td>01234567899876543210</td>

          <td><img src={men} alt='' /></td>

          <td> Renato Keuller</td>

         <td>20</td>

         <td>Male</td>

          <td><Button variant="primary" type="submit" className="btn btn-primary premium">Premium</Button></td>

          <td><Button variant="primary" type="submit" className="btn btn-primary blk"><img src={block} alt='' /> Unblock</Button></td>
        </tr>

        <tr>
          <td>03</td>

          <td>01234567899876543210</td>

          <td><img src={men} alt='' /></td>

          <td> Renato Keuller</td>

         <td>20</td>

         <td>Male</td>

          <td><Button variant="primary" type="submit" className="btn btn-primary rsv">Free</Button></td>

          <td><Button variant="primary" type="submit" className="btn btn-primary blk"><img src={block} alt='' /> Unblock</Button></td>
        </tr>

        <tr>
          <td>04</td>

          <td>01234567899876543210</td>

          <td><img src={men} alt='' /></td>

          <td> Renato Keuller</td>

         <td>20</td>

         <td>Male</td>

          <td><Button variant="primary" type="submit" className="btn btn-primary rsv">Free</Button></td>

          <td><Button variant="primary" type="submit" className="btn btn-primary blk"><img src={block} alt='' /> Unblock</Button></td>
        </tr>


        <tr>
          <td>05</td>

          <td>01234567899876543210</td>

          <td><img src={men} alt='' /></td>

          <td> Renato Keuller</td>

         <td>20</td>

         <td>Male</td>

          <td><Button variant="primary" type="submit" className="btn btn-primary rsv">Free</Button></td>

          <td><Button variant="primary" type="submit" className="btn btn-primary blk"><img src={block} alt='' /> Unblock</Button></td>
        </tr>

        <tr>
          <td>06</td>

          <td>01234567899876543210</td>

          <td><img src={men} alt='' /></td>

          <td> Renato Keuller</td>

         <td>20</td>

         <td>Male</td>

          <td><Button variant="primary" type="submit" className="btn btn-primary rsv">Free</Button></td>

          <td><Button variant="primary" type="submit" className="btn btn-primary blk"><img src={block} alt='' /> Unblock</Button></td>
        </tr>

         <tr>
          <td>07</td>

          <td>01234567899876543210</td>

          <td><img src={men} alt='' /></td>

          <td> Renato Keuller</td>

         <td>20</td>

         <td>Male</td>

          <td><Button variant="primary" type="submit" className="btn btn-primary rsv">Free</Button></td>

          <td><Button variant="primary" type="submit" className="btn btn-primary blk"><img src={block} alt='' /> Unblock</Button></td>
        </tr>


        <tr>
          <td>08</td>

          <td>01234567899876543210</td>

          <td><img src={men} alt='' /></td>

          <td> Renato Keuller</td>

         <td>20</td>

         <td>Male</td>

          <td><Button variant="primary" type="submit" className="btn btn-primary premium">Premium</Button></td>

          <td><Button variant="primary" type="submit" className="btn btn-primary blk"><img src={block} alt='' /> Unblock</Button></td>
        </tr>


        <tr>
          <td>09</td>

          <td>01234567899876543210</td>

          <td><img src={men} alt='' /></td>

          <td> Renato Keuller</td>

         <td>20</td>

         <td>Male</td>

          <td><Button variant="primary" type="submit" className="btn btn-primary premium">Premium</Button></td>

          <td><Button variant="primary" type="submit" className="btn btn-primary blk"><img src={block} alt='' /> Unblock</Button></td>
        </tr>


        <tr>
          <td>10</td>

          <td>01234567899876543210</td>

          <td><img src={men} alt='' /></td>

          <td> Renato Keuller</td>

         <td>20</td>

         <td>Male</td>

          <td><Button variant="primary" type="submit" className="btn btn-primary premium">Premium</Button></td>

          <td><Button variant="primary" type="submit" className="btn btn-primary blk"><img src={block} alt='' /> Unblock</Button></td>
        </tr>
    

      </tbody>
    </Table>

                    </div>



                        </Tab>


                       
                        </Tabs>




                        
                    </div>


                    </div>
                   

                    

                  </div>


                  <div className='tb-pagi pag'>
                  
                  <p>Showing 0 to 0 of 0 entries</p>

                    <Pagination>
      {/* <Pagination.First /> */}

      <Pagination.Prev />

      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Item active>{2}</Pagination.Item>
      <Pagination.Item >{3}</Pagination.Item>
      <Pagination.Ellipsis />
      <Pagination.Item>{6}</Pagination.Item>
      {/* <Pagination.Item disabled>{14}</Pagination.Item> */}

      {/* <Pagination.Ellipsis />
      <Pagination.Item>{20}</Pagination.Item> */}
      <Pagination.Next />

      {/* <Pagination.Last /> */}
    </Pagination>
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
  
  
  export default User;
  