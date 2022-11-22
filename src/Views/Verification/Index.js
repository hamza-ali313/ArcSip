import { Container, Row, Col,Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands} from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link } from 'react-router-dom';
import React, { Component, useEffect, useState } from 'react';
import Slider from "react-slick";


import sina from '../../Assets/login-logo.png';
import weblogo from '../../Assets/logo.png';

  

function Verification(props) {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  
   
    return (

      <div className='about'>
        

        <div className="top-logo">
  <a href="index.php">
  <img src={weblogo} alt='' />
  </a>
</div>

<div className="login-sec">
  <Row flex-row>
    
    <Col md={6}>
      <div className="login-form verification-form">
        <h2>Verification</h2>
        <p>code has send to <a href="">admin@gmail.com</a></p>
        <form>
          <div className="d-flex mb-3">
{/*             
          <Form.Control type="text" placeholder="" />
          <Form.Control type="text" placeholder="" />
          <Form.Control type="text" placeholder="" />
          <Form.Control type="text" placeholder="" /> */}

          <input
            type="text"
            maxLength={1}
            autofill={true}
          />

          <input
            type="text"
            maxLength={1}
            autofill={true}
          />

          <input
            type="text"
            maxLength={1}
            autofill={true}
          />

          <input
            type="text"
            maxLength={1}
            autofill={true}
          />

            {/* <input type="tel" maxlength="1" pattern="[0-9]" className="form-control">
            <input type="tel" maxlength="1" pattern="[0-9]" className="form-control">
            <input type="tel" maxlength="1" pattern="[0-9]" className="form-control">
            <input type="tel" maxlength="1" pattern="[0-9]" className="form-control"> */}
          </div>
          <div className="form-group">
            <p>Haven’t recived the verification code ? <a href="">Resend</a></p>
            
          </div>
          {/* <div className="otp-group">
      {[1, 2, 3, 4].map((digit, idx) => (
        <input
          key={idx}
          type="text"
          inputMode="numeric"
          autoComplete="one-time-code"
          pattern="\d{1}"
          maxLength={1}
          id={digit}
          className="otp-input"
          value={value2}
        />
      ))}
    </div> */}
          {/* <button type="submit" className="btn btn-primary">Verify</button> */}

          <Button variant="primary" type="submit" className="btn btn-primary">   <Link  to={'/Dashboardone'}>  Verify</Link> </Button>

         
        </form>
      </div>
    </Col>


    <Col md={6}>
      <div className="login-banner">
      <img src={sina} alt='' />
      </div>
    </Col>

  </Row>  
</div>    

 

      </div>
       
     
      
    
    );
    
  
}
  
  
  export default Verification;
  