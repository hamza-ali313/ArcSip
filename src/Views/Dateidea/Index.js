import { Container, Row, Col,Button, Form, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands} from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link } from 'react-router-dom';
import React, { Component, useEffect, useState } from 'react';
import Slider from "react-slick";
import Dropdown from 'react-bootstrap/Dropdown';
import Pagination from 'react-bootstrap/Pagination';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
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
  
import updown from '../../Assets/up-down.png';
import profile from '../../Assets/my-profile.png';
import logout from '../../Assets/logout.png';
import dt from '../../Assets/dat.png';
import cl from '../../Assets/edit-cl.png';
import del from '../../Assets/red-dust.png';
import whplus from '../../Assets/white-plus.png';
import dtid from '../../Assets/date-idea.png';
import miner from '../../Assets/dt-md.png';

import dit1 from '../../Assets/dt-md1.png';
import dit2 from '../../Assets/dt-md2.png';
import dit3 from '../../Assets/dt-md3.png';
import dit4 from '../../Assets/dt-md4.png';
import dit5 from '../../Assets/dt-md5.png';
import rem from '../../Assets/exclamation.png';




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
        Add Date Idea
        </Modal.Title>
       
      </Modal.Header>
      </div>

      <Modal.Body>
          <div className='ad-all'>
            
            <div className='dte-id'>

            <img src={dtid} alt='' />

             <div className='dat-cemrea'>

        <Form.Control type="file" />
        <p>Change Photo</p>
        <FontAwesomeIcon icon={solid('camera')} />
        </div>
           
            
            </div>

            <div className='aduser-im'>
              <Row>

                <Col md={2}>
                  <div className='dt-mde'>
                  <img src={miner} alt='' />
                  <FontAwesomeIcon icon={solid('x')} />
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
           
           
           <div className='user-ad-form descrip'>


           <Row>
                <Col md={12}>
                <div className='fr-inner descp'>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Description</Form.Label>
                  <Form.Control as="textarea" placeholder='Lorem ipsum dolor' rows={3} />
                </Form.Group>
                  </div>
                </Col>
              </Row>
             
             <Row>
              <Col md={6}>
                <div className='fr-inner'>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Date Title</Form.Label>
                  <Form.Control type="text" placeholder="Let’s go for a walking date" />
                </Form.Group>
                </div>
              </Col>

              <Col md={6}>
                <div className='fr-inner'>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Date Location</Form.Label>
                  <Form.Control type="text" placeholder="Germany" />
                </Form.Group>
                </div>
              </Col>

             </Row>



             


             <Row>
              <Col md={6}>
                <div className='fr-inner'>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Start Date</Form.Label>
                  <Form.Control type="date" placeholder="123-456-789-0" />
                </Form.Group>
                </div>
              </Col>

              <Col md={6}>
                <div className='fr-inner'>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>End Date</Form.Label>
                  <Form.Control type="date" placeholder="Occupation" />
                </Form.Group>
                </div>
              </Col>

              </Row>



              <Row>
              <Col md={6}>
                <div className='fr-inner'>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Date Start Time</Form.Label>
                  <Form.Control type="time" placeholder="Male" />
                </Form.Group>
                </div>
              </Col>

              <Col md={6}>
                <div className='fr-inner'>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Date End Time</Form.Label>
                  <Form.Control type="time" placeholder="Sexual preference" />
                </Form.Group>
                </div>
              </Col>

              </Row>


           </div>
           

           
           <div className='user-bt-add'>
           <Button variant="primary" type="button" > Add Date Idea</Button>
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



function MyDateIdea(props) {
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
        Edit Date Idea
        </Modal.Title>
       
      </Modal.Header>
      </div>

      <Modal.Body>

      <div className='ad-all'>
       


       <div className='idea-date-head'>
        <h4>Let’s go for evening talk</h4>
         <small> 23 Jan, 2023  -  6:00PM</small>
       </div>



      <div className='dte-id'>

          <img src={dtid} alt='' />

          <div className='dat-cemrea'>

          <Form.Control type="file" />
          <p>Change Photo</p>
          <FontAwesomeIcon icon={solid('camera')} />
          </div>


          </div>

          <div className='aduser-im'>
            <Row>

              <Col md={2}>
                <div className='dt-mde'>
                <img src={miner} alt='' />
                <FontAwesomeIcon icon={solid('x')} />
                </div>
              </Col>

              <Col md={2}>
                <div className='dt-mde'>
                <img src={dit1} alt='' />
                <FontAwesomeIcon icon={solid('x')} />
                </div>
              </Col>

              <Col md={2}>
                <div className='dt-mde'>
                <img src={dit2} alt='' />
                <FontAwesomeIcon icon={solid('x')} />
                </div>
              </Col>

              <Col md={2}>
                <div className='dt-mde'>
                <img src={dit3} alt='' />
                <FontAwesomeIcon icon={solid('x')} />
                </div>
              </Col>


              <Col md={2}>
                <div className='dt-mde'>
                <img src={dit4} alt='' />
                <FontAwesomeIcon icon={solid('x')} />
                </div>
              </Col>

            </Row>
            
            <Row>
              
            <Col md={2}>
                <div className='dt-mde'>
                <img src={dit5} alt='' />
                <FontAwesomeIcon icon={solid('x')} />
                </div>
              </Col>

            


              <Col md={2}>
                <div className='plus-user'>
                <Form.Control type="file" />
                <FontAwesomeIcon icon={solid('plus')} />
                <p>Add More</p>
                </div>
              </Col>
              <div className='rem-any'>
                <p> <img src={rem} alt='' /> Remove any photo to add new one!</p>
              </div>
            </Row>


             
          </div>

                
           <div className='user-ad-form descrip'>
                  
                  <Row>
                  <Col md={6}>
                    <div className='fr-inner'>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Date Title</Form.Label>
                      <Form.Control type="text" placeholder="Let’s go for a walking date" />
                    </Form.Group>
                    </div>
                  </Col>

                  <Col md={6}>
                    <div className='fr-inner'>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Date Location</Form.Label>
                      <Form.Control type="text" placeholder="Germany" />
                    </Form.Group>
                    </div>
                  </Col>

                  </Row>

                  <Row>
                    <Col md={12}>
                    <div className='fr-inner descp'>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Description</Form.Label>
                      <Form.Control as="textarea" placeholder='Lorem ipsum dolor' rows={3} />
                    </Form.Group>
                      </div>
                    </Col>
                  </Row>


                  


                  <Row>
                  <Col md={6}>
                    <div className='fr-inner'>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Start Date</Form.Label>
                      <Form.Control type="date" placeholder="123-456-789-0" />
                    </Form.Group>
                    </div>
                  </Col>

                  <Col md={6}>
                    <div className='fr-inner'>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>End Date</Form.Label>
                      <Form.Control type="date" placeholder="Occupation" />
                    </Form.Group>
                    </div>
                  </Col>

                  </Row>



                  <Row>
                  <Col md={6}>
                    <div className='fr-inner'>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Date Start Time</Form.Label>
                      <Form.Control type="time" placeholder="Male" />
                    </Form.Group>
                    </div>
                  </Col>

                  <Col md={6}>
                    <div className='fr-inner'>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Date End Time</Form.Label>
                      <Form.Control type="time" placeholder="Sexual preference" />
                    </Form.Group>
                    </div>
                  </Col>

                  </Row>


                </div>

           
           <div className='user-bt-add'>
           <Button variant="primary" type="button" > Save Edits</Button>
           </div>
            </div>
        {/* </div> */}
      </Modal.Body>
      
    </Modal>
    </div>

  );
}








function Dateidea() {

  const [modalShow, setModalShow] = React.useState(false);

  const [usedate, setDateIdea] = React.useState(false);


    
    
    return (



    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        
      />


    <MyDateIdea
        show={usedate}
        onHide={() => setDateIdea(false)}
        
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
                <Link to={'/Dateidea'} className='active'> <img src={dash5} alt='' /> Date Ideas</Link>
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

                    <div className='create-btn dat-mar'>
                      <h3>Date Ideas</h3>
                      <div className='add-dateidea'>
                    <Button variant="primary" type="button" onClick={() => setModalShow(true)}><img src={whplus} alt='' /> Add Date Idea</Button>
                    </div>
                    </div>

                   

                    

                    <div className='activity-btn-gr'>
                    
                    <div className='user-tab'>
                    

                        <div className='user-match all-active'>
                      
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

                    <div className='nada-tbl dsh-on date'>


    <Table>

      <thead>
        <tr>
          <th> <Link to={'/'}><img src={updown} alt='' />No</Link>  </th>
          <th> <Link to={'/'}><img src={updown} alt='' />Date Id</Link>  </th>
          <th> <Link to={'/'}><img src={updown} alt='' />Date Title</Link>  </th>
          <th> <Link to={'/'}><img src={updown} alt='' /> First Photo</Link> </th>
          <th> <Link to={'/'}><img src={updown} alt='' /> Date Location</Link> </th>
          <th> <Link to={'/'}><img src={updown} alt='' /> # OF Time used</Link> </th>
          <th> <Link to={'/'}><img src={updown} alt='' /> Date Time </Link> </th>
          <th> <Link to={'/'}><img src={updown} alt='' /> Action</Link> </th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>01</td>

          <td>01234567899876543210</td>

          <td> Renato Keuller</td>
            
          <td><img src={dt} alt='' /></td>

          <td>Germany</td>

         <td>5</td>


          <td><FontAwesomeIcon icon={solid('clock')} /><small> 2022 - 04 - 20 | 20:22:34 </small></td>

          <td>
            <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
      
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-2" onClick={() => setDateIdea(true)}><img src={cl} alt='' />    Edit</Dropdown.Item>
        <Dropdown.Item href="#/action-4"><img src={del} alt='' />    Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </td>
        </tr>

        <tr>
          <td>02</td>

          <td>01234567899876543210</td>

          <td> Renato Keuller</td>
            
          <td><img src={dt} alt='' /></td>

          <td>Germany</td>

         <td>6</td>


          <td><FontAwesomeIcon icon={solid('clock')} /><small> 2022 - 04 - 20 | 20:22:34 </small></td>

          <td>
            <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
      
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-2" onClick={() => setDateIdea(true)}><img src={cl} alt='' />    Edit</Dropdown.Item>
        <Dropdown.Item href="#/action-4"><img src={del} alt='' />    Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </td>
        </tr>

        <tr>
          <td>03</td>

          <td>01234567899876543210</td>

          <td> Renato Keuller</td>
            
          <td><img src={dt} alt='' /></td>

          <td>Germany</td>

         <td>3</td>


          <td><FontAwesomeIcon icon={solid('clock')} /><small> 2022 - 04 - 20 | 20:22:34 </small></td>

          <td>
            <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
      
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-2" onClick={() => setDateIdea(true)}><img src={cl} alt='' />    Edit</Dropdown.Item>
        <Dropdown.Item href="#/action-4"><img src={del} alt='' />    Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </td>
        </tr>

        <tr>
          <td>04</td>

          <td>01234567899876543210</td>

          <td> Renato Keuller</td>
            
          <td><img src={dt} alt='' /></td>

          <td>Germany</td>

         <td>4</td>


          <td><FontAwesomeIcon icon={solid('clock')} /><small> 2022 - 04 - 20 | 20:22:34 </small></td>

          <td>
            <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
      
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-2" onClick={() => setDateIdea(true)}><img src={cl} alt='' />    Edit</Dropdown.Item>
        <Dropdown.Item href="#/action-4"><img src={del} alt='' />    Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </td>
        </tr>


        <tr>
          <td>05</td>

          <td>01234567899876543210</td>

          <td> Renato Keuller</td>
            
          <td><img src={dt} alt='' /></td>

          <td>Germany</td>

         <td>2</td>


          <td><FontAwesomeIcon icon={solid('clock')} /><small> 2022 - 04 - 20 | 20:22:34 </small></td>

          <td>
            <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
      
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-2" onClick={() => setDateIdea(true)}><img src={cl} alt='' />    Edit</Dropdown.Item>
        <Dropdown.Item href="#/action-4"><img src={del} alt='' />    Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </td>
        </tr>

        <tr>
          <td>06</td>

          <td>01234567899876543210</td>

          <td> Renato Keuller</td>
            
          <td><img src={dt} alt='' /></td>

          <td>Germany</td>

         <td>4</td>


          <td><FontAwesomeIcon icon={solid('clock')} /><small> 2022 - 04 - 20 | 20:22:34 </small></td>

          <td>
            <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
      
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-2" onClick={() => setDateIdea(true)}><img src={cl} alt='' />    Edit</Dropdown.Item>
        <Dropdown.Item href="#/action-4"><img src={del} alt='' />    Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </td>
        </tr>

        <tr>
          <td>07</td>

          <td>01234567899876543210</td>

          <td> Renato Keuller</td>
            
          <td><img src={dt} alt='' /></td>

          <td>Germany</td>

         <td>5</td>


          <td><FontAwesomeIcon icon={solid('clock')} /><small> 2022 - 04 - 20 | 20:22:34 </small></td>

          <td>
            <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
      
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-2" onClick={() => setDateIdea(true)}><img src={cl} alt='' />    Edit</Dropdown.Item>
        <Dropdown.Item href="#/action-4"><img src={del} alt='' />    Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </td>
        </tr>


        <tr>
          <td>08</td>

          <td>01234567899876543210</td>

          <td> Renato Keuller</td>
            
          <td><img src={dt} alt='' /></td>

          <td>Germany</td>

         <td>8</td>


          <td><FontAwesomeIcon icon={solid('clock')} /><small> 2022 - 04 - 20 | 20:22:34 </small></td>

          <td>
            <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
      
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-2" onClick={() => setDateIdea(true)}><img src={cl} alt='' />    Edit</Dropdown.Item>
        <Dropdown.Item href="#/action-4"><img src={del} alt='' />    Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </td>
        </tr>


        <tr>
          <td>09</td>

          <td>01234567899876543210</td>

          <td> Renato Keuller</td>
            
          <td><img src={dt} alt='' /></td>

          <td>Germany</td>

         <td>10</td>


          <td><FontAwesomeIcon icon={solid('clock')} /><small> 2022 - 04 - 20 | 20:22:34 </small></td>

          <td>
            <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
      
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-2" onClick={() => setDateIdea(true)}><img src={cl} alt='' />    Edit</Dropdown.Item>
        <Dropdown.Item href="#/action-4"><img src={del} alt='' />    Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </td>
        </tr>


        <tr>
          <td>10</td>

          <td>01234567899876543210</td>

          <td> Renato Keuller</td>
            
          <td><img src={dt} alt='' /></td>

          <td>Germany</td>

         <td>2</td>


          <td><FontAwesomeIcon icon={solid('clock')} /><small> 2022 - 04 - 20 | 20:22:34 </small></td>

          <td>
            <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
      
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-2" onClick={() => setDateIdea(true)}><img src={cl} alt='' />    Edit</Dropdown.Item>
        <Dropdown.Item href="#/action-4"><img src={del} alt='' />    Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </td>
        </tr>
    

      </tbody>
    </Table>

                    </div>



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
  
  
  export default Dateidea;
  