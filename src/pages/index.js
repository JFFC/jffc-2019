import React from 'react'
import MainContainer from '../components/MainContainer';
import ContentContainer from '../components/ContentContainer';
import { Grid, Row, Col } from 'react-flexbox-grid';


import mainlogo from '../images/jffc-logo-main@2x.png';
import '../css/hero.css';


const IndexPage = () => (
  <div>
    <MainContainer>
      <Grid fluid>
        <Row>
          <Col xs={12} md={12} className="mainHeroText">
            <h1>
              Join the premier student web design conference in Asia.
            </h1>
          </Col>
        </Row>
        <Row className="mainHeroSubtext">
          <Col xs={12} md={12}>
            <ul>
              <li><p>January 26-27, 2019</p></li>
              <li><p>De La Salle University - Manila</p></li>
              <li><p>Taft Avenue, Manila</p></li>
            </ul>
          </Col>
        </Row>
        <Row className="mainHeroCTA">
          <Col xs={12} md={12}>
            <button>
              BUY TICKETS
            </button>
          </Col>
        </Row>
      </Grid>
    </MainContainer>

    <ContentContainer>
      <Grid fluid>
      
      </Grid>
    </ContentContainer>
  </div>
)

export default IndexPage
