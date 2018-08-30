import React from 'react'
import { Link } from 'gatsby'
import { Grid, Row, Col } from 'react-flexbox-grid';


import '../css/header.css'

const Header = ({ siteTitle }) => (
  <header id="mainHeaderContainer">
    <Grid fluid>
      <Row center="md" middle="md">
        <Col xs={12}>
          <div className="hamburger">
            <Row center="xs" middle="xs">
                <Col xs>
                  <p>=</p>
                </Col>
                <Col xs>
                  <p>JFFC</p>
                </Col>
                <Col xs>
                  <p>Get Tickets</p>
                </Col>
            </Row>
          </div>
        </Col>
        <Col xs={12} md={12}>
          <ul className="NavLinks">
            <li><Link to="/"> Home</Link></li>
            <li><Link to="/speakers/">Speakers</Link></li>
            <li><Link to="/schedule/">Schedule</Link></li>
            <li><Link to="/about/">About</Link></li>
            <li><Link to="/faqs/">FAQs</Link></li>
            <li><Link to="/sponsor/">Sponsors</Link></li>
          </ul>
        </Col>
      </Row>
    </Grid>
  </header>
)

export default Header
