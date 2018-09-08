import React from 'react'
import TeaserContainer from '../components/TeaserContainer';
import { Grid, Row, Col } from 'react-flexbox-grid';

import logo from '../images/logo-white-colored.png';

const TeaserPage = () => (
  <TeaserContainer>
    <Grid fluid style={{color: "#EFEFEF"}}>
      <Row center="xs">
        <Col xs={12} md={12} style={{marginTop: 150}}>
          <img className="logo" src={logo} alt="Junior Form Function & Class 2019 Logo"/>
        </Col>
        <Col xs={12} md={12} style={{marginTop: 50, marginBottom: 50}}>
          <p>January 26 - 27, 2019 / Venue TBA</p>
        </Col>
        <Col xs={12} md={7} style={{marginBottom: 150}}>
          <h2 style={{fontFamily: "Inovato", fontSize: 48}}>The premier student web design conference is coming soon.</h2>
          <p>Blind Bird Registration is now open.</p>
          <a href="https://www.facebook.com/JuniorFFCPh/" style={{color: "#EFEFEF"}}>Get your tickets on Eventbrite.</a> <br/>
          <a href="https://www.facebook.com/JuniorFFCPh/" style={{color: "#EFEFEF"}}>Like our FB page for further announcements.</a>
        </Col>
      </Row>
    </Grid>
  </TeaserContainer>
)

export default TeaserPage
