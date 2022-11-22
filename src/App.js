import {  Row, Col, Button, Form } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
// import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// AOS
// import AOS from 'aos';
import 'aos/dist/aos.css';

// SLICK
import '../node_modules/slick-carousel/slick/slick.css';
import '../node_modules/slick-carousel/slick/slick-theme.css';

// import sitelogo from './Assets/logo.jpg'

import facebook from './Assets/facebookbt.png';
import google from './Assets/googlebt.png';



import { useNavigate } from "react-router-dom";



// AOS.init({
//     offset: 200,
//     duration: 600,
//     easing: 'ease-in-sine',
//     delay: 200,
// });




function App() {

  

  return (

      <div>


      <div class="login-sec">

        <div className='logout-all'>
          <div class="login-banner">
            <div className='logout-heading'>

            </div>

            <div className='login-inr'>
              <h2>Sign In</h2>
              <p>Sign in to your account</p>

              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>E-mail or phone number</Form.Label>
                  <Form.Control type="email" placeholder="hussain@gmail.com" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="***********" />
                </Form.Group>



                <Button variant="primary" type="submit" className='logbrn'>
                  Submit
                </Button>

                <Link to={'/'}>   Forgot Password?</Link>

              </Form>

              <div className='login-btng'>

                <Button variant="primary" type="submit"> <img src={google} alt='' /> Sign up with Google</Button>

                <Button variant="primary" type="submit"> <img src={facebook} alt='' /> Sign up with Facebook</Button>

              </div>
              <div className='lnm'>
                <p>Don’t have an account?  <Link to={'/'}>  Sign up</Link> </p>
              </div>












       </div>
    </div>
    </div>

</div>    




      </div>


  );
}




export default App;
