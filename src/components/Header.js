import React from 'react'
import { Link } from 'gatsby'
import { Grid, Row, Col } from 'react-flexbox-grid';


import '../css/header.css'
import logo from '../images/jffc-logo-main@1x.png'

const Header = ({ siteTitle }) => (
  <header id="mainHeaderContainer">
    <Grid fluid>
      <Row start="xs" middle="xs">
     
        <Col xs={4} md={2}>
          <Row start="xs">
            <img className="logo" src={logo} alt="JFFC2019"/>
          </Row>
        </Col>
        <Col xs={8} md={9}>
          <Row start="xs">
            <ul className="NavLinks">
              <li><a href="#about">About</a></li>
              <li><a href="#speakers">Speakers</a></li>
              <li><a href="#schedule">Schedule</a></li>
              <li><a href="#faqs">FAQs</a></li>
              <li><a href="#sponsors">Sponsors</a></li>
            </ul>
          </Row>
        </Col>
      </Row>
    </Grid>
  </header>
)

export default Header
