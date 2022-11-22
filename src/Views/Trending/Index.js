import { Container, Row, Col,Button, Form, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands} from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link } from 'react-router-dom';
import React, { Component, useEffect, useState } from 'react';
import Slider from "react-slick";
import Dropdown from 'react-bootstrap/Dropdown';

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
 
 
import puls from '../../Assets/puls-icon.png';
import usewhite from '../../Assets/user-white.png';
import sugdate from '../../Assets/suggested-date.png';
import on1 from '../../Assets/online-user1.png';
import eye from '../../Assets/eye-icon.png';
import on2 from '../../Assets/online-user2.png';
import on3 from '../../Assets/online-user3.png';
import on4 from '../../Assets/online-user4.png';
import ld from '../../Assets/load.png';
import profile from '../../Assets/my-profile.png';
import logout from '../../Assets/logout.png';

function Trending() {
  


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
                <Link to={'/Trending'} className='active'> <img src={dash2} alt='' />  Trending</Link>
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
              


              <div className='treending-page-all'>
              <div className='whos-trending'>
              <h4>Who’s Trending</h4>
            </div>
                 
              <Tabs
                        defaultActiveKey="home"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                        >




                        <Tab eventKey="home" title="Top Liked Date Owners" >

                          
            

			<div className='trending-all'>

            

           
                
            
            <div className='user-online'>
            <Row>
                
                <Col md={3}>
                  <div className='onuser-all active'>
                  <div className='online-user'>
                  <img src={on1} alt='' />
                 <span>01</span>
                  <h5>Ranny Penj</h5>
                  </div>
                  <div className='user-eye-icon'>
                    <span><img src={eye} alt='' /></span>  
                  </div>
                  <div className='user-like'>
                  <p>37 Likes</p>
                  </div>


                  </div>
                </Col>


                <Col md={3}>
                  <div className='onuser-all'>
                  <div className='online-user'>
                  <img src={on2} alt='' />
                 <span>02</span>
                  <h5>Pimp Stephen</h5>
                  </div>
                  <div className='user-eye-icon'>
                    <span><img src={eye} alt='' /></span>  
                  </div>
                  <div className='user-like'>
                  <p>28 Likes</p>
                  </div>


                  </div>
                </Col> 
                
                <Col md={3}>
                  <div className='onuser-all'>
                  <div className='online-user'>
                  <img src={on3} alt='' />
                 <span>03</span>
                  <h5>Ranny Penj</h5>
                  </div>
                  <div className='user-eye-icon'>
                    <span><img src={eye} alt='' /></span>  
                  </div>
                  <div className='user-like'>
                  <p>16 Likes</p>
                  </div>


                  </div>
                </Col>

                <Col md={3}>
                  <div className='onuser-all'>
                  <div className='online-user'>
                  <img src={on4} alt='' />
                 <span>04</span>
                  <h5>Pimp Stephen</h5>
                  </div>
                  <div className='user-eye-icon'>
                    <span><img src={eye} alt='' /></span>  
                  </div>
                  <div className='user-like'>
                  <p>12 Likes</p>
                  </div>


                  </div>
                </Col>





            </Row>

            </div>




            <div className='user-online'>
            <Row>
                
                <Col md={3}>
                  <div className='onuser-all'>
                  <div className='online-user'>
                  <img src={on2} alt='' />
                 <span>05</span>
                  <h5>Pimp Stephen</h5>
                  </div>
                  <div className='user-eye-icon'>
                    <span><img src={eye} alt='' /></span>  
                  </div>
                  <div className='user-like'>
                  <p>28 Likes</p>
                  </div>


                  </div>
                </Col>


                <Col md={3}>
                  <div className='onuser-all'>
                  <div className='online-user'>
                  <img src={on3} alt='' />
                 <span>06</span>
                  <h5>Ranny Penj</h5>
                  </div>
                  <div className='user-eye-icon'>
                    <span><img src={eye} alt='' /></span>  
                  </div>
                  <div className='user-like'>
                  <p>16 Likes</p>
                  </div>


                  </div>
                </Col> 
                
                <Col md={3}>
                  <div className='onuser-all'>
                  <div className='online-user'>
                  <img src={on4} alt='' />
                 <span>07</span>
                  <h5>Ranny Penj</h5>
                  </div>
                  <div className='user-eye-icon'>
                    <span><img src={eye} alt='' /></span>  
                  </div>
                  <div className='user-like'>
                  <p>12 Likes</p>
                  </div>


                  </div>
                </Col>

                <Col md={3}>
                  <div className='onuser-all'>
                  <div className='online-user'>
                  <img src={on2} alt='' />
                 <span>08</span>
                  <h5>Pimp Stephen</h5>
                  </div>
                  <div className='user-eye-icon'>
                    <span><img src={eye} alt='' /></span>  
                  </div>
                  <div className='user-like'>
                  <p>28 Likes</p>
                  </div>


                  </div>
                </Col>





            </Row>

            </div>




            <div className='user-online'>
            <Row>
                
                <Col md={3}>
                  <div className='onuser-all'>
                  <div className='online-user'>
                  <img src={on3} alt='' />
                 <span>09</span>
                  <h5>Ranny Penj</h5>
                  </div>
                  <div className='user-eye-icon'>
                    <span><img src={eye} alt='' /></span>  
                  </div>
                  <div className='user-like'>
                  <p>16 Likes</p>
                  </div>


                  </div>
                </Col>


                <Col md={3}>
                  <div className='onuser-all'>
                  <div className='online-user'>
                  <img src={on2} alt='' />
                 <span>10</span>
                  <h5>Pimp Stephen</h5>
                  </div>
                  <div className='user-eye-icon'>
                    <span><img src={eye} alt='' /></span>  
                  </div>
                  <div className='user-like'>
                  <p>28 Likes</p>
                  </div>


                  </div>
                </Col> 
                
                <Col md={3}>
                  <div className='onuser-all'>
                  <div className='online-user'>
                  <img src={on3} alt='' />
                 <span>11</span>
                  <h5>Ranny Penj</h5>
                  </div>
                  <div className='user-eye-icon'>
                    <span><img src={eye} alt='' /></span>  
                  </div>
                  <div className='user-like'>
                  <p>16 Likes</p>
                  </div>


                  </div>
                </Col>

                <Col md={3}>
                  <div className='onuser-all'>
                  <div className='online-user'>
                  <img src={on4} alt='' />
                 <span>12</span>
                  <h5>Pimp Stephen</h5>
                  </div>
                  <div className='user-eye-icon'>
                    <span><img src={eye} alt='' /></span>  
                  </div>
                  <div className='user-like'>
                  <p>12
                     Likes</p>
                  </div>


                  </div>
                </Col>





            </Row>

            <div className='load-im'>

            <img src={ld} alt='' />
            <p>Loading</p>

            </div>

            </div>

             
            </div>


             </Tab>

                            
			  
                        <Tab eventKey="profile" title="Top Suggested Daters">
                              
				<div className='trending-all'>

           

           
                
            
            <div className='user-online'>
            <Row>
                
                <Col md={3}>
                  <div className='onuser-all active'>
                  <div className='online-user'>
                  <img src={on1} alt='' />
                 <span>01</span>
                  <h5>Ranny Penj</h5>
                  </div>
                  <div className='user-eye-icon'>
                    <span><img src={eye} alt='' /></span>  
                  </div>
                  <div className='user-like'>
                  <p>37 Suggestion</p>
                  </div>


                  </div>
                </Col>


                <Col md={3}>
                  <div className='onuser-all'>
                  <div className='online-user'>
                  <img src={on2} alt='' />
                 <span>02</span>
                  <h5>Pimp Stephen</h5>
                  </div>
                  <div className='user-eye-icon'>
                    <span><img src={eye} alt='' /></span>  
                  </div>
                  <div className='user-like'>
                  <p>20 Suggestion</p>
                  </div>


                  </div>
                </Col> 
                
                <Col md={3}>
                  <div className='onuser-all'>
                  <div className='online-user'>
                  <img src={on3} alt='' />
                 <span>03</span>
                  <h5>Ranny Penj</h5>
                  </div>
                  <div className='user-eye-icon'>
                    <span><img src={eye} alt='' /></span>  
                  </div>
                  <div className='user-like'>
                  <p>17 Suggestion</p>
                  </div>


                  </div>
                </Col>

                <Col md={3}>
                  <div className='onuser-all'>
                  <div className='online-user'>
                  <img src={on4} alt='' />
                 <span>04</span>
                  <h5>Pimp Stephen</h5>
                  </div>
                  <div className='user-eye-icon'>
                    <span><img src={eye} alt='' /></span>  
                  </div>
                  <div className='user-like'>
                  <p>16 Suggestion</p>
                  </div>


                  </div>
                </Col>





            </Row>

            </div>




            <div className='user-online'>
            <Row>
                
                <Col md={3}>
                  <div className='onuser-all'>
                  <div className='online-user'>
                  <img src={on2} alt='' />
                 <span>05</span>
                  <h5>Pimp Stephen</h5>
                  </div>
                  <div className='user-eye-icon'>
                    <span><img src={eye} alt='' /></span>  
                  </div>
                  <div className='user-like'>
                  <p>15 Suggestion</p>
                  </div>


                  </div>
                </Col>


                <Col md={3}>
                  <div className='onuser-all'>
                  <div className='online-user'>
                  <img src={on3} alt='' />
                 <span>06</span>
                  <h5>Ranny Penj</h5>
                  </div>
                  <div className='user-eye-icon'>
                    <span><img src={eye} alt='' /></span>  
                  </div>
                  <div className='user-like'>
                  <p>14 Suggestion</p>
                  </div>


                  </div>
                </Col> 
                
                <Col md={3}>
                  <div className='onuser-all'>
                  <div className='online-user'>
                  <img src={on4} alt='' />
                 <span>07</span>
                  <h5>Ranny Penj</h5>
                  </div>
                  <div className='user-eye-icon'>
                    <span><img src={eye} alt='' /></span>  
                  </div>
                  <div className='user-like'>
                  <p>13 Suggestion</p>
                  </div>


                  </div>
                </Col>

                <Col md={3}>
                  <div className='onuser-all'>
                  <div className='online-user'>
                  <img src={on2} alt='' />
                 <span>08</span>
                  <h5>Pimp Stephen</h5>
                  </div>
                  <div className='user-eye-icon'>
                    <span><img src={eye} alt='' /></span>  
                  </div>
                  <div className='user-like'>
                  <p>12 Suggestion</p>
                  </div>


                  </div>
                </Col>





            </Row>

            </div>




            <div className='user-online'>
            <Row>
                
                <Col md={3}>
                  <div className='onuser-all'>
                  <div className='online-user'>
                  <img src={on3} alt='' />
                 <span>09</span>
                  <h5>Ranny Penj</h5>
                  </div>
                  <div className='user-eye-icon'>
                    <span><img src={eye} alt='' /></span>  
                  </div>
                  <div className='user-like'>
                  <p>11 Suggestion</p>
                  </div>


                  </div>
                </Col>


                <Col md={3}>
                  <div className='onuser-all'>
                  <div className='online-user'>
                  <img src={on2} alt='' />
                 <span>10</span>
                  <h5>Pimp Stephen</h5>
                  </div>
                  <div className='user-eye-icon'>
                    <span><img src={eye} alt='' /></span>  
                  </div>
                  <div className='user-like'>
                  <p>7 Suggestion</p>
                  </div>


                  </div>
                </Col> 
                
                <Col md={3}>
                  <div className='onuser-all'>
                  <div className='online-user'>
                  <img src={on3} alt='' />
                 <span>11</span>
                  <h5>Ranny Penj</h5>
                  </div>
                  <div className='user-eye-icon'>
                    <span><img src={eye} alt='' /></span>  
                  </div>
                  <div className='user-like'>
                  <p>5 Suggestion</p>
                  </div>


                  </div>
                </Col>

                <Col md={3}>
                  <div className='onuser-all'>
                  <div className='online-user'>
                  <img src={on4} alt='' />
                 <span>12</span>
                  <h5>Pimp Stephen</h5>
                  </div>
                  <div className='user-eye-icon'>
                    <span><img src={eye} alt='' /></span>  
                  </div>
                  <div className='user-like'>
                  <p>1 Suggestion</p>
                  </div>


                  </div>
                </Col>





            </Row>

            <div className='load-im'>

            <img src={ld} alt='' />
            <p>Loading</p>

            </div>

            </div>
             
            </div>


                        </Tab>



                       
                        </Tabs>




                        <div className='trend-bt'>

<Button variant="primary" type="submit" className="btn btn-primary active"><img src={usewhite} alt='' /> Top Liked Date Owners</Button>

<Button variant="primary" type="submit" className="btn btn-primary "><img src={sugdate} alt='' />Top Suggested Daters</Button>

</div>







              </div>

            


          </Col>

          </Row>
              
         </div>


      </div>
       
     
      
    
    );
    
  
}
  
  
  export default Trending;
  