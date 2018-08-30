import React from 'react'
import MainContainer from '../components/MainContainer';
import { Grid, Row, Col } from 'react-flexbox-grid';



const IndexPage = () => (
  <MainContainer>
    <Grid fluid>
      <Row>
        <Col xs={12} md={12} />
        <Col xs={12} md={12}>
          <p style={{color: "#EFEFEF"}}>January 26 - 27, 2019</p>
        </Col>
        <Col xs={12} md={7}>
          <h1 style={{
            color: "#EFEFEF",
            fontFamily: "Inovato",
            fontWeight: "400",
          }}>
            Join the premier student web design conference in Asia.
          </h1>
        </Col>
        <Col xs={12} md={5}>
          <Row center="md" bottom="md">
          <p>logo</p>
          </Row>
        </Col>
        <Col xs={12} md={12}>
          <a href="http://www.google.com" style={{color: "#EFEFEF"}}>Get your tickets now.</a>
        </Col>
      </Row>
    </Grid>
  </MainContainer>
)

export default IndexPage
