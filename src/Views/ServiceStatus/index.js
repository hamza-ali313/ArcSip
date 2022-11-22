import { Container, Row, Col, Button, Form, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import { Link } from "react-router-dom";
import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Pagination from "react-bootstrap/Pagination";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import NavDropdown from "react-bootstrap/NavDropdown";

import dp from "../../Assets/dashboard-page.png";
import ch from "../../Assets/chat.png";
import rin from "../../Assets/ring.png";

import news from "../../Assets/news.png";
import bleye from "../../Assets/blue-eye.png";
import day from "../../Assets/day.png";
import night from "../../Assets/night.png";
import mur from "../../Assets/murphy.png";
import dolar from "../../Assets/dolar.png";
import oldphone from "../../Assets/oldphone.png";
import missed from "../../Assets/missedcall.png";
import outcal from "../../Assets/outbound.png";
import ctab from "../../Assets/call-table.png";

import speak from "../../Assets/speaker.png";
import cl from "../../Assets/cl.png";
import liv from "../../Assets/livecall.png";
import recent from "../../Assets/recent.png";
import que from "../../Assets/callerque.png";

import qemark from "../../Assets/questionmark.png";
import percent from "../../Assets/calllog.png";

import olred from "../../Assets/oldred.png";
import agent from "../../Assets/agentcall.png";
import ring from "../../Assets/ringing.png";
import sml from "../../Assets/smile.png";
import Sidebar from "../../Extends/Sidebar";
import Arclogo from "../../Assets/arc-logo.png";


const index = () => {


  return (
    <div className="nada-dashboard">
      <div className="dashboard-side-nav">
        <Row>
          <Col md={2} lg={2} className="side-fix">
            <Sidebar />
          </Col>

          <Col className="over-body" md={10} lg={10}>
            <div className="overall-body">
              <Row>
                <Col md={2}>
                  <div className="dashb-heading">
                    <img src={dp} alt="" />
                    <h3>Dashboard</h3>
                  </div>
                </Col>

                <Col md={10}>
                  <div className="top-bar">
                    <div className="dashboard-noti">
                      <ul>
                        <li>
                          {" "}
                          <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic">
                              <img src={ch} alt="" />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">
                                Action
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-2">
                                Another action
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-3">
                                Something else
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </li>

                        <li>
                          {" "}
                          <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic">
                              <img src={rin} alt="" />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">
                                Action
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-2">
                                Another action
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-3">
                                Something else
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </li>

                        <li>
                          <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic">
                              <img src={news} alt="" />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">
                                Action
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-2">
                                Another action
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-3">
                                Something else
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </li>
                      </ul>
                    </div>

                    <div className="dropavailable">
                      <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic">
                          <img src={bleye} alt="" /> Available
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">
                            Action
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                            Another action
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            Something else
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>

                    <div className="day-night">
                      <h4>Mode:</h4>

                      <Button type="submit" className="btn btn-primary day">
                        <img src={day} alt="" />{" "}
                      </Button>

                      <Button type="submit" className="btn btn-primary night">
                        <img src={night} alt="" />{" "}
                      </Button>
                    </div>

                    <div className="eva-murphy">
                      <img src={mur} alt="" />
                      <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic">
                          Eva Murphy
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">
                            Action
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                            Another action
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            Something else
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>

                    <div className="tot-crd">
                      <p>
                        Total Credits <img src={dolar} alt="" /> 28.94
                      </p>
                      <Button type="submit" className="btn btn-primary day">
                        <FontAwesomeIcon icon={solid("plus")} />
                        ADD{" "}
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
           
          <div className="service-status-inner">
            <div className="logo">
              <img src={Arclogo} />
            </div>
            <div className="blue-stripe">
              <div className="text">
                <p>All Systems Operational</p>
              </div>
              <div className="newsletter">
                <Link to="/">Subscribe to Newsletter</Link>
              </div>
            </div>
            <div className="about">
              <p className="welcome">Welcome</p>
              <div className="heading">
                <h3>About This Site</h3>
              </div>
              <div className="text">
                <p>
                  {" "}
                  is a long established fact that a reader will be distracted by
                  the readable content of a page when looking at its layout. The
                  point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum.
                </p>
                <p>
                  as their default model text, and a search for 'lorem ipsum'
                  will uncover many web sites still in their infancy. Various
                  versions have evolved over the years, sometimes by accident.
                </p>
              </div>
            </div>
            <Row className="lower-part">
              <Col md={6}>
                <div className="about-site">
                  <div className="heading">
                    <FontAwesomeIcon icon={solid("globe")} />
                    <h3>About Site</h3>
                  </div>
                  <div className="tables">
                    {/* striped bordered hover */}
                    <Table>
                      <tbody>
                        <tr>
                          <td>
                            <span>Outbound Calling <FontAwesomeIcon icon={regular('circle-question')} /></span>
                            <button>Operational</button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span>Inbound Calling  <FontAwesomeIcon icon={regular('circle-question')} /></span>
                            <button>Operational</button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span>SMS Service</span>
                            <button>Operational</button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span>Fax Service</span>
                            <button>Operational</button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span>Mobile App APIs</span>
                            <button>Operational</button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span>Developer APIs</span>
                            <button>Operational</button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span>SIP Connectivity</span>
                            <button>Operational</button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span>JustCall Dashboard</span>
                            <button>Operational</button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span>Outbound Calling</span>
                            <button>Operational</button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span>MMS Service</span>
                            <button>Operational</button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span>Contacts <FontAwesomeIcon icon={regular('circle-question')} /></span>
                            <button>Operational</button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span> Integrations</span>
                            <button>Operational</button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span> Third-Party</span>
                            <button>Operational</button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span>Authorization <FontAwesomeIcon icon={regular('circle-question')} /></span>
                            <button>Operational</button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span>Contact sync with CRMs, help desks and other integrations <FontAwesomeIcon icon={regular('circle-question')} /></span>
                            <button>Operational</button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span>Sales Dialer <FontAwesomeIcon icon={regular('circle-question')} /></span>
                            <button>Operational</button>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="past-incidents">
                  <div className="heading">
                    <FontAwesomeIcon icon={solid("clock-rotate-left")} />
                    <h3>Past Incidents</h3>
                  </div>
                  <div className="calender-sec">
                    <Row>
                      <Col md={6}>
                        <Link className="calender" to={"/"}>
                          <div className="calender-logo ">
                            <FontAwesomeIcon icon={regular("calendar-minus")} />
                          </div>
                          <div className="date">
                            <div className="main">Nov 4, 2022</div>
                            <div className="sub">
                              <p>No incidents reported today.</p>
                            </div>
                          </div>
                        </Link>{" "}
                      </Col>
                      <Col md={6}>
                        <Link className="calender" to={"/"}>
                          <div className="calender-logo ">
                            <FontAwesomeIcon icon={regular("calendar-minus")} />
                          </div>
                          <div className="date">
                            <div className="main">Nov 4, 2022</div>
                            <div className="sub">
                              <p>No incidents reported today.</p>
                            </div>
                          </div>
                        </Link>{" "}
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <Link className="calender" to={"/"}>
                          <div className="calender-logo ">
                            <FontAwesomeIcon icon={regular("calendar-minus")} />
                          </div>
                          <div className="date">
                            <div className="main">Nov 4, 2022</div>
                            <div className="sub">
                              <p>No incidents reported today.</p>
                            </div>
                          </div>
                        </Link>{" "}
                      </Col>
                      <Col md={6}>
                        <Link className="calender" to={"/"}>
                          <div className="calender-logo ">
                            <FontAwesomeIcon icon={regular("calendar-minus")} />
                          </div>
                          <div className="date">
                            <div className="main">Nov 4, 2022</div>
                            <div className="sub">
                              <p>No incidents reported today.</p>
                            </div>
                          </div>
                        </Link>{" "}
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <Link className="calender" to={"/"}>
                          <div className="calender-logo ">
                            <FontAwesomeIcon icon={regular("calendar-minus")} />
                          </div>
                          <div className="date">
                            <div className="main">Nov 4, 2022</div>
                            <div className="sub">
                              <p>No incidents reported today.</p>
                            </div>
                          </div>
                        </Link>{" "}
                      </Col>
                      <Col md={6}>
                        <Link className="calender" to={"/"}>
                          <div className="calender-logo ">
                            <FontAwesomeIcon icon={regular("calendar-minus")} />
                          </div>
                          <div className="date">
                            <div className="main">Nov 4, 2022</div>
                            <div className="sub">
                              <p>No incidents reported today.</p>
                            </div>
                          </div>
                        </Link>{" "}
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <Link className="calender" to={"/"}>
                          <div className="calender-logo ">
                            <FontAwesomeIcon icon={regular("calendar-minus")} />
                          </div>
                          <div className="date">
                            <div className="main">Nov 4, 2022</div>
                            <div className="sub">
                              <p>No incidents reported today.</p>
                            </div>
                          </div>
                        </Link>{" "}
                      </Col>
                      <Col md={6}>
                        <Link className="calender" to={"/"}>
                          <div className="calender-logo ">
                            <FontAwesomeIcon icon={regular("calendar-minus")} />
                          </div>
                          <div className="date">
                            <div className="main">Nov 4, 2022</div>
                            <div className="sub">
                              <p>No incidents reported today.</p>
                            </div>
                          </div>
                        </Link>{" "}
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <Link className="calender" to={"/"}>
                          <div className="calender-logo ">
                            <FontAwesomeIcon icon={regular("calendar-minus")} />
                          </div>
                          <div className="date">
                            <div className="main">Nov 4, 2022</div>
                            <div className="sub">
                              <p>No incidents reported today.</p>
                            </div>
                          </div>
                        </Link>{" "}
                      </Col>
                      <Col md={6}>
                        <Link className="calender" to={"/"}>
                          <div className="calender-logo ">
                            <FontAwesomeIcon icon={regular("calendar-minus")} />
                          </div>
                          <div className="date">
                            <div className="main">Nov 4, 2022</div>
                            <div className="sub">
                              <p>No incidents reported today.</p>
                            </div>
                          </div>
                        </Link>{" "}
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <Link className="calender" to={"/"}>
                          <div className="calender-logo ">
                            <FontAwesomeIcon icon={regular("calendar-minus")} />
                          </div>
                          <div className="date">
                            <div className="main">Nov 4, 2022</div>
                            <div className="sub">
                              <p>No incidents reported today.</p>
                            </div>
                          </div>
                        </Link>{" "}
                      </Col>
                      <Col md={6}>
                        <Link className="calender" to={"/"}>
                          <div className="calender-logo ">
                            <FontAwesomeIcon icon={regular("calendar-minus")} />
                          </div>
                          <div className="date">
                            <div className="main">Nov 4, 2022</div>
                            <div className="sub">
                              <p>No incidents reported today.</p>
                            </div>
                          </div>
                        </Link>{" "}
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <Link className="calender" to={"/"}>
                          <div className="calender-logo ">
                            <FontAwesomeIcon icon={regular("calendar-minus")} />
                          </div>
                          <div className="date">
                            <div className="main">Nov 4, 2022</div>
                            <div className="sub">
                              <p>No incidents reported today.</p>
                            </div>
                          </div>
                        </Link>{" "}
                      </Col>
                      <Col md={6}>
                        <Link className="calender" to={"/"}>
                          <div className="calender-logo ">
                            <FontAwesomeIcon icon={regular("calendar-minus")} />
                          </div>
                          <div className="date">
                            <div className="main">Nov 4, 2022</div>
                            <div className="sub">
                              <p>No incidents reported today.</p>
                            </div>
                          </div>
                        </Link>{" "}
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <Link className="calender" to={"/"}>
                          <div className="calender-logo ">
                            <FontAwesomeIcon icon={regular("calendar-minus")} />
                          </div>
                          <div className="date">
                            <div className="main">Nov 4, 2022</div>
                            <div className="sub">
                              <p>No incidents reported today.</p>
                            </div>
                          </div>
                        </Link>{" "}
                      </Col>
                      <Col md={6}>
                        <Link className="calender" to={"/"}>
                          <div className="calender-logo ">
                            <FontAwesomeIcon icon={regular("calendar-minus")} />
                          </div>
                          <div className="date">
                            <div className="main">Nov 4, 2022</div>
                            <div className="sub">
                              <p>No incidents reported today.</p>
                            </div>
                          </div>
                        </Link>{" "}
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
            <div className="powered-sec">
              <div className="history">
                <Link to={"/"}>
                  <FontAwesomeIcon icon={solid("arrow-left-long")} />
                  <p>Incident History</p>
                </Link>
              </div>
              <div className="powered-by">
                <p>Powered by Atlassian Statuspage</p>
              </div>
            </div>
          </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default index;
