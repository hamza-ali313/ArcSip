import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import bleye from "../Assets/blue-eye.png";
import qemark from "../Assets/questionmark.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  brands,
  solid,
  regular,
} from "@fortawesome/fontawesome-svg-core/import.macro";

const Dailer = () => {
  const [active, setActive] = useState(false);
  const [Number, setNumber] = useState("");
  function ToggleDailer() {
    setActive(!active ? true : false);
  }
  function cancel(){
     setNumber(Number.slice(0,Number.length-1))
     console.log(Number)
  }

  return (
    <div
      className={`dailer-sec-component ${active ? "show-hide-dailer" : " "}`}
    >
      <div className="">
        <button className="dailer" onClick={() => ToggleDailer()}>
          <FontAwesomeIcon icon={solid("phone")} /> <span>Dailer</span>
        </button>
      </div>
      <div className="hiding-dailer">
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
                <div class="digit" id="one" onClick={() => setNumber(Number + '1')}>
                  1
                </div>
                <div class="digit" id="two" onClick={() => setNumber(Number + '2')}>
                  2<div class="sub">ABC</div>
                </div>
                <div class="digit" id="three" onClick={() => setNumber(Number + '3')}>
                  3<div class="sub">DEF</div>
                </div>
              </Row>

              <div class="row">
                <div class="digit" id="four" onClick={() => setNumber(Number + '4')}>
                  4<div class="sub">GHI</div>
                </div>
                <div class="digit" id="five" onClick={() => setNumber(Number + '5')}>
                  5<div class="sub">JKL</div>
                </div>
                <div class="digit" onClick={() => setNumber(Number + '6')}>
                  6<div class="sub">MNO</div>
                </div>
              </div>

              <div class="row">
                <div class="digit" onClick={() => setNumber(Number + '7')}>
                  7<div class="sub">PQRS</div>
                </div>
                <div class="digit" onClick={() => setNumber(Number + '8')}>
                  8<div class="sub">TUV</div>
                </div>
                <div class="digit" onClick={() => setNumber(Number + '9')}>
                  9<div class="sub">WXYZ</div>
                </div>
              </div>

              <div class="row">
                <div class="digit" onClick={() => setNumber(Number + '*')}>*</div>
                <div class="digit" onClick={() => setNumber(Number + '0')}>0</div>
                <div class="digit" onClick={() => setNumber(Number + '#')}>#</div>
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
                <Button type="submit" className="btn btn-primary active">
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
                  <FontAwesomeIcon icon={solid("address-book")} /> Contact
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
      </div>
    </div>
  );
};

export default Dailer;
