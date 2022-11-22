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

import lyt from "../../Assets/analyt.png";

import team from "../../Assets/team.png";
import ch from "../../Assets/chat.png";
import rin from "../../Assets/ring.png";

import news from "../../Assets/news.png";
import bleye from "../../Assets/blue-eye.png";
import day from "../../Assets/day.png";
import night from "../../Assets/night.png";
import mur from "../../Assets/murphy.png";
import dolar from "../../Assets/dolar.png";
import fal from "../../Assets/flag.png";
import missed from "../../Assets/missedcall.png";
import outcal from "../../Assets/outbound.png";
import usama from "../../Assets/usama.png";

import picht from "../../Assets/nodata.png";
import cl from "../../Assets/cl.png";

import mdean from "../../Assets/made-any.png";
import recent from "../../Assets/recent.png";
import que from "../../Assets/callerque.png";

import qemark from "../../Assets/questionmark.png";
import percent from "../../Assets/calllog.png";

import olred from "../../Assets/oldred.png";
import agent from "../../Assets/agentcall.png";
import ring from "../../Assets/ringing.png";
import sml from "../../Assets/smile.png";
import Chart from "../Dashboard/Chart";
import InActiveChart from "./InActiveChart";
import Sidebar from "../../Extends/Sidebar";

// import Chart from './Chart';

function Analytics() {
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
                    <img src={lyt} alt="" />
                    <h3>Analytics</h3>
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

            <div className="arc-dashboard-inner">
              <Row>
                <Col md={12}>
                  <Row>
                    <Col md={6}>
                      <div className="active-chart">
                        <Chart />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="inactive">
                        <InActiveChart />
                      </div>
                    </Col>
                  </Row>
                  <div className="call-detail-all">
                    <Row>
                      <Col md={3}>
                        <div className="percent-call">
                          <div className="per-cal-im">
                            <img src={percent} alt="" />
                          </div>
                          <h5>
                            0% <span>Service Level</span>
                          </h5>

                          <div className="incoming-seccond">
                            <p>
                              Percentage of incoming calls answered in less than
                              <span>
                                <Form.Select aria-label="Default select example">
                                  <option>1</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </Form.Select>
                              </span>
                              Seconds
                            </p>
                          </div>
                        </div>
                      </Col>

                      <Col md={3}>
                        <div className="calling-sys pink">
                          <img src={outcal} alt="" />
                          <h5>
                            (0) <span>Calls Mode</span>
                          </h5>
                        </div>

                        <div className="calling-sys  missed">
                          <img src={missed} alt="" />
                          <h5>
                            (0) <span>Calls outside office hours</span>
                          </h5>
                        </div>
                      </Col>

                      <Col md={3}>
                        <div className="calling-sys agent">
                          <img src={agent} alt="" />
                          <h5>
                            (0) <span>Calls Answered</span>
                          </h5>
                        </div>

                        <div className="calling-sys ring">
                          <img src={ring} alt="" />
                          <h5>
                            {" "}
                            (0) <span>Avg. Answer Time</span>
                          </h5>
                        </div>
                      </Col>

                      <Col md={3}>
                        <div className="calling-sys avgtime">
                          <img src={olred} alt="" />
                          <h5>
                            {" "}
                            TBA <span>Avg. Answer Time</span>
                          </h5>
                        </div>

                        <div className="calling-sys answercal">
                          <img src={missed} alt="" />
                          <h5>
                            (0) <span>Calls Answered</span>
                          </h5>
                        </div>
                      </Col>
                    </Row>
                  </div>

                  <Row>
                    <Col md={3}>
                      <div className="calling-sys team">
                        <img src={team} alt="" />
                        <h5>
                          {" "}
                          0% <span>Team Connect rate</span>
                        </h5>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <div className="team-analytics">
                    <div className="te-anti">
                      <h3>Team/Number Analytics</h3>

                      <DropdownButton id="dropdown-basic-button" title="">
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Something else
                        </Dropdown.Item>
                      </DropdownButton>
                    </div>

                    <div className="nada-tbl dsh-on anly-ment">
                      <Table>
                        <thead>
                          <tr>
                            <th> Number </th>
                            <th> Outbound </th>
                            <th> Inbound </th>
                            <th> Missed </th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td>
                              <img className="tl-mem" src={fal} alt="" /> Prime
                              Web Solutions <span>(210) 939-9341</span>{" "}
                            </td>

                            <td>
                              72 <span>(ihr 16min 30sec)</span>{" "}
                            </td>

                            <td>
                              2 <span>(ihr 16min 30sec)</span>{" "}
                            </td>

                            <td>
                              <Button
                                type="submit"
                                className="btn btn-primary live"
                              >
                                0
                              </Button>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <img className="tl-mem" src={fal} alt="" /> Prime
                              Web Solutions <span>(210) 939-9341</span>{" "}
                            </td>

                            <td>
                              72 <span>(ihr 16min 30sec)</span>{" "}
                            </td>

                            <td>
                              2 <span>(ihr 16min 30sec)</span>{" "}
                            </td>

                            <td>
                              <Button
                                type="submit"
                                className="btn btn-primary live"
                              >
                                0
                              </Button>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <img className="tl-mem" src={fal} alt="" /> Prime
                              Web Solutions <span>(210) 939-9341</span>{" "}
                            </td>

                            <td>
                              72 <span>(ihr 16min 30sec)</span>{" "}
                            </td>

                            <td>
                              2 <span>(ihr 16min 30sec)</span>{" "}
                            </td>

                            <td>
                              <Button
                                type="submit"
                                className="btn btn-primary live"
                              >
                                0
                              </Button>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <img className="tl-mem" src={fal} alt="" /> Prime
                              Web Solutions <span>(210) 939-9341</span>{" "}
                            </td>

                            <td>
                              72 <span>(ihr 16min 30sec)</span>{" "}
                            </td>

                            <td>
                              2 <span>(ihr 16min 30sec)</span>{" "}
                            </td>

                            <td>
                              <Button
                                type="submit"
                                className="btn btn-primary live"
                              >
                                0
                              </Button>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <img className="tl-mem" src={fal} alt="" /> Prime
                              Web Solutions <span>(210) 939-9341</span>{" "}
                            </td>

                            <td>
                              72 <span>(ihr 16min 30sec)</span>{" "}
                            </td>

                            <td>
                              2 <span>(ihr 16min 30sec)</span>{" "}
                            </td>

                            <td>
                              <Button
                                type="submit"
                                className="btn btn-primary live"
                              >
                                0
                              </Button>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <img className="tl-mem" src={fal} alt="" /> Prime
                              Web Solutions <span>(210) 939-9341</span>{" "}
                            </td>

                            <td>
                              72 <span>(ihr 16min 30sec)</span>{" "}
                            </td>

                            <td>
                              2 <span>(ihr 16min 30sec)</span>{" "}
                            </td>

                            <td>
                              <Button
                                type="submit"
                                className="btn btn-primary live"
                              >
                                0
                              </Button>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <img className="tl-mem" src={fal} alt="" /> Prime
                              Web Solutions <span>(210) 939-9341</span>{" "}
                            </td>

                            <td>
                              72 <span>(ihr 16min 30sec)</span>{" "}
                            </td>

                            <td>
                              2 <span>(ihr 16min 30sec)</span>{" "}
                            </td>

                            <td>
                              <Button
                                type="submit"
                                className="btn btn-primary live"
                              >
                                0
                              </Button>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <img className="tl-mem" src={fal} alt="" /> Prime
                              Web Solutions <span>(210) 939-9341</span>{" "}
                            </td>

                            <td>
                              72 <span>(ihr 16min 30sec)</span>{" "}
                            </td>

                            <td>
                              2 <span>(ihr 16min 30sec)</span>{" "}
                            </td>

                            <td>
                              <Button
                                type="submit"
                                className="btn btn-primary live"
                              >
                                0
                              </Button>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <img className="tl-mem" src={fal} alt="" /> Prime
                              Web Solutions <span>(210) 939-9341</span>{" "}
                            </td>

                            <td>
                              72 <span>(ihr 16min 30sec)</span>{" "}
                            </td>

                            <td>
                              2 <span>(ihr 16min 30sec)</span>{" "}
                            </td>

                            <td>
                              <Button
                                type="submit"
                                className="btn btn-primary live"
                              >
                                0
                              </Button>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <img className="tl-mem" src={fal} alt="" /> Prime
                              Web Solutions <span>(210) 939-9341</span>{" "}
                            </td>

                            <td>
                              72 <span>(ihr 16min 30sec)</span>{" "}
                            </td>

                            <td>
                              2 <span>(ihr 16min 30sec)</span>{" "}
                            </td>

                            <td>
                              <Button
                                type="submit"
                                className="btn btn-primary live"
                              >
                                0
                              </Button>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </div>
                </Col>

                <Col md={6}>
                  <div className="team-analytics">
                    <div className="te-anti">
                      <h3>Team Member Analytics</h3>

                      <DropdownButton id="dropdown-basic-button" title="">
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Something else
                        </Dropdown.Item>
                      </DropdownButton>
                    </div>

                    <div className="nada-tbl dsh-on memb">
                      <Table>
                        <thead>
                          <tr>
                            <th> Name </th>
                            <th> Last Login </th>
                            <th> Inbound </th>
                            <th> Missed </th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td>
                              <img className="tl-mem" src={usama} alt="" />{" "}
                              <span>
                                Usama Akhtar <small>Available</small>
                              </span>{" "}
                            </td>

                            <td> Just Now </td>

                            <td>113</td>

                            <td>2</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <div className="today-missed">
                    <div className="mdcall">
                      <h4>Today's Missed Calls</h4>
                      <DropdownButton id="dropdown-basic-button" title="...">
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Something else
                        </Dropdown.Item>
                      </DropdownButton>
                    </div>
                    <div className="not-miss devider">
                      <Row>
                        <Col md={6}>
                          <div className="di-par">
                            <img src={picht} alt="" />
                            <p>
                              No data to show for <span>This Time Fram</span>{" "}
                            </p>
                          </div>
                        </Col>

                        <Col md={6}>
                          <div className="di-dcon">
                            <h3>
                              Not enough <span>data</span>
                            </h3>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Col>

                <Col md={6}>
                  <div className="today-missed">
                    <div className="mdcall">
                      <h4>Today's Missed Calls</h4>
                      <DropdownButton id="dropdown-basic-button" title="...">
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Something else
                        </Dropdown.Item>
                      </DropdownButton>
                    </div>
                    <div className="not-miss jobmis">
                      <img src={sml} alt="" />
                      <h3>Good job with not missing a call!</h3>
                    </div>
                  </div>
                </Col>
              </Row>

              <div className="today-missed">
                <div className="mdcall">
                  <h4>Call Disposition Analytics</h4>
                  <DropdownButton id="dropdown-basic-button" title="...">
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </DropdownButton>
                </div>
                <div className="not-miss dispos">
                  <div className="dismade">
                    <img src={mdean} alt="" />
                  </div>
                  <h3>
                    No Calls Made With Any{" "}
                    <span>Disposition Code In Selected Time Range </span>
                  </h3>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Analytics;
