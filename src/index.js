import React, { Component, useEffect } from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Header from './Extends/Header';
import Footer from './Extends/Footer';
import Verification from './Views/Verification/Index';
import Dashboard from './Views/Dashboard/Index';
import Analytics from './Views/Analytics/Index';
import Phonenumber from './Views/Phonenumber/Index';
import Trending from './Views/Trending/Index';
import User from './Views/User/Index';
import Date from './Views/Date/Index';
import Dateidea from './Views/Dateidea/Index';                     
import Reports from './Views/Reports/Index';
import PushNotification from './Views/PushNotification/Index';
import Smsnotification from './Views/Smsnotification/Index';
import Myprofile from './Views/Myprofile/Index';
import ServiceStatus from "./Views/ServiceStatus/index"
import Logout from './Views/Logout/Index';
import Dailer from "../src/Extends/Dailer";


import reportWebVitals from './reportWebVitals';

import { Container, Row, Col } from 'react-bootstrap';



// IMPORT PAGES
// import Aboutus from "./Views/Aboutus/Index";
// import ScrollToTop from './Views/ScrollToTop/Index';

import { useLocation } from 'react-router';



class Main extends React.Component {

  render() {
    return (
      <BrowserRouter basename='/nada'>
        
            <header className="pageheader">
              <Header />
            </header>
            <Dailer/>
            <Routes>
            <Route path="/" element={<App />} className='ppp'/>
      
             <Route path="/verification" element={<Verification />} />

             <Route path="/dashboard" element={<Dashboard />} />

             <Route path="/Analytics" element={<Analytics />} />

             <Route path="/Phonenumber" element={<Phonenumber />} />

             <Route path="/Trending" element={<Trending />} />

             <Route path="/User" element={<User />} />

             <Route path="/Date" element={<Date />} />

             <Route path="/Dateidea" element={<Dateidea />} />

             <Route path="/Reports" element={<Reports />} />
             
             <Route path="/PushNotification" element={<PushNotification />} />

             <Route path="/Smsnotification" element={<Smsnotification />} />

             <Route path="/Myprofile" element={<Myprofile />} />
            
             <Route path="/Logout" element={<Logout />} />
             
             <Route path="/ServiceStatus" element={<ServiceStatus />} />
            </Routes>
          
            <Footer>
              <Footer />
            </Footer>
          
      </BrowserRouter>
    );
  }
}
ReactDOM.render(<Main />, document.getElementById("root"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();