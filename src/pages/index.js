import React from 'react'
import { Link } from 'gatsby'
import TeaserContainer from '../components/TeaserContainer';
import { Grid, Row, Col } from 'react-flexbox-grid';

const TeaserPage = () => (
  <TeaserContainer>
    <Grid fluid style={{color: "#EFEFEF"}}>
      <Row center="xs">
        <Col xs={12} md={12} style={{marginTop: 150}}>
          <h1 style={{fontFamily: "Inovato", fontSize: 80}}>Junior Form Function & Class 2019</h1>
        </Col>
        <Col xs={12} md={12} style={{marginTop: 50, marginBottom: 50}}>
          <p>January 26 - 27, 2019 / De La Salle University - Manila</p>
        </Col>
        <Col xs={12} md={7} style={{marginBottom: 150}}>
          <div style={{margin: '0 auto'}}>
          <h2 style={{fontFamily: "Inovato", fontSize: 48}}>The premier student web design conference is coming soon.</h2>
            </div>
          <a href="http://www.google.com" style={{color: "#EFEFEF"}}>Registration opens September 1, 2018.</a>
        </Col>
      </Row>
    </Grid>
  </TeaserContainer>
)

export default TeaserPage
