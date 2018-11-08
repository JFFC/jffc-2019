import React from 'react'
import { Link } from 'gatsby'
import { Grid, Row, Col } from 'react-flexbox-grid';

import ResponsiveMenu from 'react-responsive-navbar';

import { FiMenu, FiX } from 'react-icons/fi';

import '../css/header.css'
import jffclogo from '../images/logos/jffcmain.png'

const Header = ({ siteTitle }) => (
  <header id="mainHeaderContainer">
    <Grid fluid>
      <Row start="xs" middle="xs">
        <Col xs={12} md={12}>
          <ResponsiveMenu
            menuOpenButton={<FiMenu className="menuButton" />}
            menuCloseButton={<FiX id="closeButton" className="menuButton" />}
            changeMenuOn="500px"
            largeMenuClassName="large-menu-classname"
            smallMenuClassName="small-menu-classname"

            menu={
              <Row center="xs" middle="xs" className="menu">
                <Col xs={12} md={3}>
                  <Row center="xs" start="md">
                    <img className="logo" src={jffclogo} alt="JFFC2019"/>
                    <img className="logo2" src={jffclogo} alt="JFFC2019"/>
                  </Row>
                </Col>
                <Col xs={12} md={8}>
                  <Row center="xs" start="md" >
                    <ul className="NavLinks">
                      <li><a href="#about">About</a></li>
                      <li><a href="#speakers">Speakers</a></li>
                      <li><a href="#faq">FAQs</a></li>
                      <li><a href="#sponsors">Sponsors</a></li>
                    </ul>
                  </Row>
                </Col>
              </Row>
              
            }
          />
        </Col>

      </Row>
        
        
    </Grid>
  </header>
)

export default Header
