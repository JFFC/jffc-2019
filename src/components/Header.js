import React from 'react'
import { Link } from 'gatsby'
import { Grid, Row, Col } from 'react-flexbox-grid';


import '../css/header.css'
import logo from '../images/jffc-logo-main@1x.png'

const Header = ({ siteTitle }) => (
  <header id="mainHeaderContainer">
    <Grid fluid>
      <Row start="xs" middle="md">
        <Col xs={12}>
          <div className="hamburger">
            <Row center="xs" middle="xs">
                <Col xs>
                  <p>=</p>
                </Col>
                <Col xs>
                  <img className="logo" src={logo} alt="JFFC2019"/>
                </Col>
                <Col xs>
                  <p>Get Tickets</p>
                </Col>
            </Row>
          </div>
        </Col>
        <Col xs={3} md={3}>
          <Row start="xs">
            <img className="logo" src={logo} alt="JFFC2019"/>
          </Row>
        </Col>
        <Col xs={9} md={9}>
          <Row start="xs">
            <ul className="NavLinks">
              <li><p>About</p></li>
              <li><p>Speakers</p></li>
              <li><p>Schedule</p></li>
              <li><p>About</p></li>
              <li><p>FAQs</p></li>
              <li><p>Sponsors</p></li>
            </ul>
          </Row>
        </Col>
      </Row>
    </Grid>
  </header>
)

export default Header
