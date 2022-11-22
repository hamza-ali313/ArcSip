import {  Row, Col, Button, Form } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
// import { Link } from 'react-router-dom';
import React, { useState } from 'react';





// import sitelogo from './Assets/logo.jpg'

import sina from '../../Assets/login-logo.png';
import weblogo from '../../Assets/logo.png';
import cent from '../../Assets/nada-white.png';

import { useNavigate } from "react-router-dom";







function Logout() {

  

    return (

        <div>


<div class="login-sec">   

     <div className='logout-all'>
      <div class="logout-banner">
        <div className='logout-heading'>
          <h2>LOGO</h2>
        </div>

        <div className='log-inner'>
         <h2>Logout</h2>
         <p>You have been successfully logged out.</p>


         <form action='nada'>
         <Button variant="primary" type="button">OK</Button>
         </form>

         </div>
      </div>
      </div>

</div>    




        </div>


    );
}




export default Logout;
