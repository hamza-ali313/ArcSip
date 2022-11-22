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
import men from '../../Assets/table-im-1.png';
import women from '../../Assets/table-im-2.png';
import profile from '../../Assets/my-profile.png';
import logout from '../../Assets/logout.png';

import cl from '../../Assets/edit-cl.png';
import del from '../../Assets/red-dust.png';
;


function Reports() {
  


  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1
  // };
  
    
    return (

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

                


              
                  <div className='activity-table-all dash-one'>

                    <div className='create-btn'>
                      <h3>Nada users</h3>
                     
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
          <th> <Link to={'/'}><img src={updown} alt='' />User who reported </Link>  </th>
          <th> <Link to={'/'}><img src={updown} alt='' />User who was reported</Link>  </th>
          <th> <Link to={'/'}><img src={updown} alt='' /> Action</Link> </th>
          
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>01</td>

          <td><img src={men} alt='' /> Jhonny Jason Roe</td>

          <td><img src={women} alt='' /> Stephine Rammy</td>

          <td>
            <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
      
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-2"><img src={cl} alt='' />    See report</Dropdown.Item>
        <Dropdown.Item href="#/action-4"><img src={del} alt='' />    Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </td>
        </tr>

        <tr>
          <td>02</td>

          <td><img src={men} alt='' /> Jhonny Jason Roe</td>

          <td><img src={women} alt='' /> Stephine Rammy</td>

          <td>
            <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
      
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-2"><img src={cl} alt='' />     See report</Dropdown.Item>
        <Dropdown.Item href="#/action-4"><img src={del} alt='' />    Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </td>
        </tr>


        <tr>
          <td>03</td>

          <td><img src={men} alt='' /> Jhonny Jason Roe</td>

          <td><img src={women} alt='' /> Stephine Rammy</td>

          <td>
            <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
      
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-2"><img src={cl} alt='' />     See report</Dropdown.Item>
        <Dropdown.Item href="#/action-4"><img src={del} alt='' />    Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </td>
        </tr>


       <tr>
          <td>04</td>

          <td><img src={men} alt='' /> Jhonny Jason Roe</td>

          <td><img src={women} alt='' /> Stephine Rammy</td>

          <td>
            <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
      
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-2"><img src={cl} alt='' />     See report</Dropdown.Item>
        <Dropdown.Item href="#/action-4"><img src={del} alt='' />    Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </td>
        </tr>


        <tr>
          <td>05</td>

          <td><img src={men} alt='' /> Jhonny Jason Roe</td>

          <td><img src={women} alt='' /> Stephine Rammy</td>

          <td>
            <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
      
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-2"><img src={cl} alt='' />     See report</Dropdown.Item>
        <Dropdown.Item href="#/action-4"><img src={del} alt='' />    Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </td>
        </tr>


        <tr>
          <td>06</td>

          <td><img src={men} alt='' /> Jhonny Jason Roe</td>

          <td><img src={women} alt='' /> Stephine Rammy</td>

          <td>
            <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
      
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-2"><img src={cl} alt='' />     See report</Dropdown.Item>
        <Dropdown.Item href="#/action-4"><img src={del} alt='' />    Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </td>
        </tr>

        <tr>
          <td>07</td>

          <td><img src={men} alt='' /> Jhonny Jason Roe</td>

          <td><img src={women} alt='' /> Stephine Rammy</td>

          <td>
            <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
      
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-2"><img src={cl} alt='' />     See report</Dropdown.Item>
        <Dropdown.Item href="#/action-4"><img src={del} alt='' />    Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </td>
        </tr>


        <tr>
          <td>08</td>

          <td><img src={men} alt='' /> Jhonny Jason Roe</td>

          <td><img src={women} alt='' /> Stephine Rammy</td>

          <td>
            <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
      
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-2"><img src={cl} alt='' />     See report</Dropdown.Item>
        <Dropdown.Item href="#/action-4"><img src={del} alt='' />    Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </td>
        </tr>

        <tr>
          <td>09</td>

          <td><img src={men} alt='' /> Jhonny Jason Roe</td>

          <td><img src={women} alt='' /> Stephine Rammy</td>

          <td>
            <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
      
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-2"><img src={cl} alt='' />     See report</Dropdown.Item>
        <Dropdown.Item href="#/action-4"><img src={del} alt='' />    Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </td>
        </tr>


        <tr>
          <td>10</td>

          <td><img src={men} alt='' /> Jhonny Jason Roe</td>

          <td><img src={women} alt='' /> Stephine Rammy</td>

          <td>
            <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
      
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-2"><img src={cl} alt='' />     See report</Dropdown.Item>
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
      
       
     
      
    
    );
    
  
}
  
  
  export default Reports;
  