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
import Chart from "./Chart";
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
import $ from "jquery";
import Sidebar from "../../Extends/Sidebar";

// import Chart from './Chart';

function Dashboard() {
  const [Number, setNumber] = useState("");
  function cancel() {
    setNumber(Number.slice(0, Number.length - 1));
    console.log(Number);
  }

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

            <div className="arc-dashboard-inner">
              <Row>
                <Col md={7}>
                  <div className="call-history-all">
                    <Row>
                      <Col md={6}>
                        <div className="calling-sys">
                          <img src={oldphone} alt="" />
                          <h5>
                            (6) <FontAwesomeIcon icon={solid("arrow-right")} />{" "}
                            <span>Live Calls</span>
                          </h5>
                        </div>
                      </Col>

                      <Col md={6}>
                        <div className="calling-sys missed">
                          <img src={missed} alt="" />
                          <h5>
                            (2) <FontAwesomeIcon icon={solid("arrow-left")} />{" "}
                            <span>Missed Call</span>
                          </h5>
                        </div>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6}>
                        <div className="calling-sys outboundcal">
                          <img src={outcal} alt="" />
                          <h5>
                            (6) <FontAwesomeIcon icon={solid("arrow-right")} />{" "}
                            <span>Live Calls</span>
                          </h5>
                        </div>
                      </Col>

                      <Col md={6}>
                        <div className="calling-sys answercal">
                          <img src={missed} alt="" />
                          <h5>
                            (2) <FontAwesomeIcon icon={solid("arrow-left")} />{" "}
                            <span>Missed Call</span>
                          </h5>
                        </div>
                      </Col>
                    </Row>
                  </div>

                  <div className="live-callinner-all">
                    <div className="live-heading">
                      <h3>Live Calls</h3>
                    </div>

                    <div className="ta-allbtn">
                      <ul>
                        <li>
                          <Button
                            variant="primary"
                            type="submit"
                            className="btn btn-primary livcall active"
                          >
                            <img src={liv} alt="" /> Live Calls <span>(6)</span>
                          </Button>
                        </li>

                        <li>
                          <Button
                            variant="primary"
                            type="submit"
                            className="btn btn-primary recnt"
                          >
                            {" "}
                            <img src={recent} alt="" /> Recent{" "}
                          </Button>
                        </li>

                        <li>
                          <Button
                            variant="primary"
                            type="submit"
                            className="btn btn-primary que"
                          >
                            {" "}
                            <img src={que} alt="" /> Caller in Queue
                          </Button>
                        </li>
                      </ul>
                      <div className="past">
                        <p>Past 30 Minutes</p>
                      </div>
                    </div>

                    <div className="nada-tbl dsh-on">
                      <Table>
                        <thead>
                          <tr>
                            <th>
                              {" "}
                              <Link to={"/"}> Call</Link>{" "}
                            </th>
                            <th>
                              {" "}
                              <Link to={"/"}> Name</Link>{" "}
                            </th>
                            <th>
                              {" "}
                              <Link to={"/"}> Id</Link>{" "}
                            </th>
                            <th>
                              {" "}
                              <Link to={"/"}> Time</Link>{" "}
                            </th>
                            <th>
                              {" "}
                              <Link to={"/"}> Going</Link>{" "}
                            </th>
                            <th>
                              {" "}
                              <Link to={"/"}> Action</Link>{" "}
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td>
                              <img className="lcal" src={cl} alt="" />
                            </td>

                            <td>
                              <img src={ctab} alt="" />
                              Audrey
                            </td>

                            <td>14402770156 </td>

                            <td> 3 Minutes ago</td>

                            <td>
                              <Button
                                type="submit"
                                className="btn btn-primary live"
                              >
                                Live
                              </Button>
                            </td>

                            <td>
                              <Button
                                variant="primary"
                                type="submit"
                                className="btn btn-primary monitorbt"
                              >
                                {" "}
                                Monitor <img src={speak} alt="" />
                              </Button>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <img className="lcal" src={cl} alt="" />
                            </td>

                            <td>
                              <img src={ctab} alt="" />
                              Audrey
                            </td>

                            <td>14402770156 </td>

                            <td> 3 Minutes ago</td>

                            <td>
                              <Button
                                type="submit"
                                className="btn btn-primary live"
                              >
                                Live
                              </Button>
                            </td>

                            <td>
                              <Button
                                variant="primary"
                                type="submit"
                                className="btn btn-primary monitorbt"
                              >
                                {" "}
                                Monitor <img src={speak} alt="" />
                              </Button>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <img className="lcal" src={cl} alt="" />
                            </td>

                            <td>
                              <img src={ctab} alt="" />
                              Audrey
                            </td>

                            <td>14402770156 </td>

                            <td> 3 Minutes ago</td>

                            <td>
                              <Button
                                type="submit"
                                className="btn btn-primary live"
                              >
                                Live
                              </Button>
                            </td>

                            <td>
                              <Button
                                variant="primary"
                                type="submit"
                                className="btn btn-primary monitorbt"
                              >
                                {" "}
                                Monitor <img src={speak} alt="" />
                              </Button>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <img className="lcal" src={cl} alt="" />
                            </td>

                            <td>
                              <img src={ctab} alt="" />
                              Audrey
                            </td>

                            <td>14402770156 </td>

                            <td> 3 Minutes ago</td>

                            <td>
                              <Button
                                type="submit"
                                className="btn btn-primary live"
                              >
                                Live
                              </Button>
                            </td>

                            <td>
                              <Button
                                variant="primary"
                                type="submit"
                                className="btn btn-primary monitorbt"
                              >
                                {" "}
                                Monitor <img src={speak} alt="" />
                              </Button>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <img className="lcal" src={cl} alt="" />
                            </td>

                            <td>
                              <img src={ctab} alt="" />
                              Audrey
                            </td>

                            <td>14402770156 </td>

                            <td> 3 Minutes ago</td>

                            <td>
                              <Button
                                type="submit"
                                className="btn btn-primary live"
                              >
                                Live
                              </Button>
                            </td>

                            <td>
                              <Button
                                variant="primary"
                                type="submit"
                                className="btn btn-primary monitorbt"
                              >
                                {" "}
                                Monitor <img src={speak} alt="" />
                              </Button>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <img className="lcal" src={cl} alt="" />
                            </td>

                            <td>
                              <img src={ctab} alt="" />
                              Audrey
                            </td>

                            <td>14402770156 </td>

                            <td> 3 Minutes ago</td>

                            <td>
                              <Button
                                type="submit"
                                className="btn btn-primary live"
                              >
                                Live
                              </Button>
                            </td>

                            <td>
                              <Button
                                variant="primary"
                                type="submit"
                                className="btn btn-primary monitorbt"
                              >
                                {" "}
                                Monitor <img src={speak} alt="" />
                              </Button>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <img className="lcal" src={cl} alt="" />
                            </td>

                            <td>
                              <img src={ctab} alt="" />
                              Audrey
                            </td>

                            <td>14402770156 </td>

                            <td> 3 Minutes ago</td>

                            <td>
                              <Button
                                type="submit"
                                className="btn btn-primary live"
                              >
                                Live
                              </Button>
                            </td>

                            <td>
                              <Button
                                variant="primary"
                                type="submit"
                                className="btn btn-primary monitorbt"
                              >
                                {" "}
                                Monitor <img src={speak} alt="" />
                              </Button>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <img className="lcal" src={cl} alt="" />
                            </td>

                            <td>
                              <img src={ctab} alt="" />
                              Audrey
                            </td>

                            <td>14402770156 </td>

                            <td> 3 Minutes ago</td>

                            <td>
                              <Button
                                type="submit"
                                className="btn btn-primary live"
                              >
                                Live
                              </Button>
                            </td>

                            <td>
                              <Button
                                variant="primary"
                                type="submit"
                                className="btn btn-primary monitorbt"
                              >
                                {" "}
                                Monitor <img src={speak} alt="" />
                              </Button>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <img className="lcal" src={cl} alt="" />
                            </td>

                            <td>
                              <img src={ctab} alt="" />
                              Audrey
                            </td>

                            <td>14402770156 </td>

                            <td> 3 Minutes ago</td>

                            <td>
                              <Button
                                type="submit"
                                className="btn btn-primary live"
                              >
                                Live
                              </Button>
                            </td>

                            <td>
                              <Button
                                variant="primary"
                                type="submit"
                                className="btn btn-primary monitorbt"
                              >
                                {" "}
                                Monitor <img src={speak} alt="" />
                              </Button>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <img className="lcal" src={cl} alt="" />
                            </td>

                            <td>
                              <img src={ctab} alt="" />
                              Audrey
                            </td>

                            <td>14402770156 </td>

                            <td> 3 Minutes ago</td>

                            <td>
                              <Button
                                type="submit"
                                className="btn btn-primary live"
                              >
                                Live
                              </Button>
                            </td>

                            <td>
                              <Button
                                variant="primary"
                                type="submit"
                                className="btn btn-primary monitorbt"
                              >
                                {" "}
                                Monitor <img src={speak} alt="" />
                              </Button>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </div>

                  <div className="log-total">
                    <div className="log-heading">
                      <h3></h3>
                    </div>

                    <div className="logpiechart">{/* <Chart /> */}</div>
                  </div>
                </Col>

                <Col md={5}>
                  <div className="dialer">
                    <div className="dialer-top">
                      <h4>Dialer</h4>

                      <div className="dialavail">
                        <img src={bleye} alt="" /> Available
                        <Form>
                          <Form.Check type="switch" id="custom-switch" />
                        </Form>
                      </div>
                    </div>

                    <div className="mob-dail">
                      <div class="container">
                        <div id="output">
                          <input
                            value={Number}
                            onChange={(e) => setNumber(e.target.value)}
                          />
                        </div>

                        <Row>
                          <div
                            class="digit"
                            id="one"
                            onClick={() => setNumber(Number + "1")}
                          >
                            1
                          </div>
                          <div
                            class="digit"
                            id="two"
                            onClick={() => setNumber(Number + "2")}
                          >
                            2<div class="sub">ABC</div>
                          </div>
                          <div
                            class="digit"
                            id="three"
                            onClick={() => setNumber(Number + "3")}
                          >
                            3<div class="sub">DEF</div>
                          </div>
                        </Row>

                        <div class="row">
                          <div
                            class="digit"
                            id="four"
                            onClick={() => setNumber(Number + "4")}
                          >
                            4<div class="sub">GHI</div>
                          </div>
                          <div
                            class="digit"
                            id="five"
                            onClick={() => setNumber(Number + "5")}
                          >
                            5<div class="sub">JKL</div>
                          </div>
                          <div
                            class="digit"
                            onClick={() => setNumber(Number + "6")}
                          >
                            6<div class="sub">MNO</div>
                          </div>
                        </div>

                        <div class="row">
                          <div
                            class="digit"
                            onClick={() => setNumber(Number + "7")}
                          >
                            7<div class="sub">PQRS</div>
                          </div>
                          <div
                            class="digit"
                            onClick={() => setNumber(Number + "8")}
                          >
                            8<div class="sub">TUV</div>
                          </div>
                          <div
                            class="digit"
                            onClick={() => setNumber(Number + "9")}
                          >
                            9<div class="sub">WXYZ</div>
                          </div>
                        </div>

                        <div class="row">
                          <div
                            class="digit"
                            onClick={() => setNumber(Number + "*")}
                          >
                            *
                          </div>
                          <div
                            class="digit"
                            onClick={() => setNumber(Number + "0")}
                          >
                            0
                          </div>
                          <div
                            class="digit"
                            onClick={() => setNumber(Number + " #")}
                          >
                            #
                          </div>
                        </div>

                        <div class="botrow">
                          <div className="clal">
                            <FontAwesomeIcon icon={solid("phone")} />{" "}
                          </div>
                          <FontAwesomeIcon
                            className="markbox"
                            icon={solid("x")}
                            className="fa fa-long-arrow-left dig"
                            onClick={() => cancel()}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="selet-flag-heading">
                      <p>Call Via</p>
                      <img src={qemark} alt="" />
                    </div>

                    <div className="dail-flag">
                      <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </div>

                    <div className="dialer-btn">
                      <ul>
                        <li>
                          <Button
                            type="submit"
                            className="btn btn-primary active"
                          >
                            {" "}
                            <FontAwesomeIcon icon={solid("phone")} /> Phone
                          </Button>
                        </li>
                        <li>
                          <Button type="submit" className="btn btn-primary">
                            {" "}
                            <FontAwesomeIcon icon={solid("right-left")} /> Logs
                          </Button>
                        </li>
                        <li>
                          <Button type="submit" className="btn btn-primary">
                            {" "}
                            <FontAwesomeIcon
                              icon={solid("address-book")}
                            />{" "}
                            Contact
                          </Button>
                        </li>
                        <li>
                          <Button type="submit" className="btn btn-primary">
                            {" "}
                            <FontAwesomeIcon icon={solid("message")} /> Message
                          </Button>
                        </li>
                        <li>
                          <Button type="submit" className="btn btn-primary">
                            {" "}
                            <FontAwesomeIcon icon={solid("gear")} /> Setting
                          </Button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <div className="call-chart">
                    <Chart />
                  </div>
                </Col>

                <Col md={6}>
                  <div className="call-detail-all">
                    <Row>
                      <Col md={6}>
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

                      <Col md={6}>
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

                      <Col md={6}></Col>
                    </Row>
                  </div>

                  <Row>
                    <Col md={6}>
                      <div className="calling-sys answercal">
                        <img src={missed} alt="" />
                        <h5>
                          (0) <span>Calls Answered</span>
                        </h5>
                      </div>
                    </Col>

                    <Col md={6}>
                      <div className="calling-sys avgtime">
                        <img src={olred} alt="" />
                        <h5>
                          {" "}
                          TBA <span>Avg. Answer Time</span>
                        </h5>
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <div className="calling-sys agent">
                        <img src={agent} alt="" />
                        <h5>
                          (0) <span>Calls Answered</span>
                        </h5>
                      </div>
                    </Col>

                    <Col md={6}>
                      <div className="calling-sys ring">
                        <img src={ring} alt="" />
                        <h5>
                          {" "}
                          TBA <span>Avg. Answer Time</span>
                        </h5>
                      </div>
                    </Col>
                  </Row>

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
                    <div className="not-miss">
                      <img src={sml} alt="" />
                      <h3>Good job with not missing a call!</h3>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Dashboard;
