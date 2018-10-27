import React from 'react'
import MainContainer from '../components/MainContainer';
import ContentContainer from '../components/ContentContainer';
import { Grid, Row, Col } from 'react-flexbox-grid';

import mainlogo from '../images/jffc-logo-main@2x.png';

import '../css/hero.css';
import '../css/about.css';
import '../css/speaker.css';
import '../css/faq.css';

import jiggy from '../images/speakers/plenary/jiggy.jpg';
import drei from '../images/speakers/plenary/drei.jpg';
import mark from '../images/speakers/plenary/mark.jpg';

import alexis from '../images/speakers/workshop/alexis.jpg';
import sam from '../images/speakers/workshop/sam.jpg';
import mj from '../images/speakers/workshop/mj.jpg';

const IndexPage = () => (
  <div>
    <MainContainer>
      <Grid fluid className="mainHero">
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
      <Grid fluid className="about">
        <Row>
          <Col xs={12} md={12} className="aboutAnchor">
            <a id="about">About - What is JFFC?</a>
          </Col>
          <Col xs={12} md={12} className="aboutHeader">
            <h2>Gathering students with passion for the web</h2>
          </Col>
          <Col xs={12} md={12} className="aboutBody">
            <p>Junior Form Function & Class (JFFC) is an annual 2-day event and is Asia’s premiere student web design conference providing opportunities and learning experiences which help students develop their design skills further.</p>
            <p> JFFC derives from <span className="aboutHighlight">Form Function & Class</span> (FFC), an annual event by the <span className="aboutHighlight">Philippine Web Designers Organization</span> (PWDO), with the goal of uplifting the state of web design in the country.</p>
          </Col>
        </Row>
        <Row className="aboutEntry">
          <Col xs={12} md={12} className="aboutAnchor">
            <a>About - What is JFFC 2019?</a>
          </Col>
          <Col xs={12} md={12} className="aboutHeader">
            <h2>Enabling Students to be future-ready with the Web</h2>
          </Col>
          <Col xs={12} md={12} className="aboutBody">
            <p>An event to unite the youth and prepare them of what’s ahead. Junior Form Function and Class, this 2019, envisions students to be “Future-forward” - enabling them to be the future leaders of the Web.</p>
            <div className="aboutList">
              <p>This year, JFFC is organised by:</p>
              <ul>
                <li><span id="twColor">TomasinoWeb</span></li>
                <li><span id="uxColor">User Experience Society - DLSU</span></li>
                <li><span id="pcColor">Philippine Computing Organizations Alliance</span></li>
              </ul>
            </div>
          </Col>
        </Row>
      </Grid>
    </ContentContainer>

    <ContentContainer>
      <Grid fluid className="speaker">
        <Row>
          <Col xs={12} md={12} className="speakerAnchor">
            <a id="speakers">Speakers</a>
          </Col>
          <Col xs={12} md={12} className="speakerHeader">
            <h2>2019's Web Enablers of the Youth</h2>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={12}>
            <p id="speakerHeader-1">Plenary Speakers - Day 1</p>
          </Col>
        </Row>
        <Row id="plenary">
          <Col xs={4} md={4} className="speakerCard">
            <div className="jiggy duotonespeaker"></div>
            <p className="speakerName">Jiggy Villanueva</p>
            <p className="speakerTalk-1">Crafting Compelling Experiences Through Branding</p>
            <p className="speakerSpiel">Jiggy Villanueva is a senior taking up Management Information Systems at Ateneo de Manila University. As a visual designer, Jiggy has worked with several student-run ventures and startups in telling their unique stories through branding and user experience design.</p>
          </Col>
          <Col xs={4} md={4} className="speakerCard">
            <div className="drei duotonespeaker"></div>
            <p className="speakerName">Drei Alquiros</p>
            <p className="speakerTalk-1">Why Giving Up My Dream Job Was the Best Decision I've Ever Made</p>
            <p className="speakerSpiel">With over 8 years experience in the Web Development industry, Drei Alquiros has worked for big and small companies in the Philippines. Today, Drei is a Remote WordPress Tech Support and teaches Web Development to Senior High School students.</p>
          </Col>
          <Col xs={4} md={4} className="speakerCard">
            <div className="mark duotonespeaker"></div>            
            <p className="speakerName">Mark Lester Lacsamana</p>
            <p className="speakerTalk-1">The You in UX</p>
            <p className="speakerSpiel">Mark Lester Lacsamana is a designer for Kalibrr and previously for OLX Philippines - designing mobile experiences and solving problems on a day-to-day basis. Mark is also a speaker, is active with design communities as well as founding some, and helps out in advocacies on Human Rights and Public health.</p>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={12}>
            <p id="speakerHeader-2">Workshop Facilitators - Day 2</p>
          </Col>
        </Row>
        <Row id="workshop">
          <Col xs={4} md={4} className="speakerCard">
            <div className="alexis duotoneworkshop"></div>
            <p className="speakerName">Alexis Collado</p>
            <p className="speakerTalk-2">Product Design 101</p>
            <p className="speakerSpiel">Alexis Collado is a digital product designer at Kalibrr, helping transform the way candidates find jobs and companies hire talent. His podcast, Roots (https://rootspodcast.design), tells the stories of great Filipino designers he’s met. He is a core member and volunteer of UX Philippines, where he helps organize meet-ups and conferences about user experience and design.</p>
          </Col>
          <Col xs={4} md={4} className="speakerCard">
            <div className="sam duotoneworkshop"></div>
            <p className="speakerName">Samantha Rose Cruz</p>
            <p className="speakerTalk-2">CSS/SVG Animations</p>
            <p className="speakerSpiel">Sam is a Product Designer and Front End Web Developer working at Make Technology. Sam has worked for both startups and big companies in the past like Challonge and Proudcloud. Sam also founded ManilaCSS - a community to promote CSS best practices and gather developers to talk anything under the CSS umbrella.</p>
          </Col>
          <Col xs={4} md={4} className="speakerCard">
            <div className="mj duotoneworkshop"></div>            
            <p className="speakerName">Mike Jaren Yap</p>
            <p className="speakerTalk-2">Back to Basics: HTML and CSS Fundamentals</p>
            <p className="speakerSpiel">Mike Jaren Yap is a senior taking up BS-MS Computer Science at De La Salle University. As the current president of (and a co-founder) User Experience Society - DLSU, MJ developed various projects and workshops inside campus. MJ aims to inspire others to become “Leaders of Design and Innovation” through talks.</p>
          </Col>
        </Row>
      </Grid>
    </ContentContainer>

    <ContentContainer>
      <Grid fluid className="faq">
        <Row>
          <Col xs={12} md={12} className="faqAnchor">
            <a id="faq">FAQ</a>
          </Col>
          <Col xs={12} md={12} className="faqHeader">
            <h2>What do you need to know about the event?</h2>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={12} className="faqSectionHeader">
            <h3>Is this event for students only?</h3>
          </Col>
          <Col xs={12} md={12} className="faqBody">
            <p>YES. Junior Form Function & Class is only for students. For industry professionals, there is FFC organised by the Philippine Web Designers Organization. JFFC is organized by TomasinoWeb, User Experience Society - DLSU, and the Philippine Computing Organizations Alliance with support from the Philippine Web Designers Organization.</p>
          </Col>
          <Col xs={12} md={12} className="faqSectionHeader">
            <h3>How can I pay for my tickets?</h3>
          </Col>
          <Col xs={12} md={12} className="faqBody">
            <div className="faqList">
              <span>There are several payment methods to get Junior Form Function & Class tickets:</span>
              <ul>
                <li>PayPal</li>  
                <li>Credit Card</li>  
                <li>PayMaya</li>
                <li>GCash</li>
              </ul>
            </div>
            <br/>
            <p>You can also buy tickets from our Campus Ambassadors in the following schools and organizations:</p>
            <div className="faqList">
              <span>De La Salle University - Manila</span>
              <ul>
                <li>User Experience Society - DLSU</li>
              </ul>
            </div>

            <div className="faqList">
              <span>Ateneo de Manila University</span>
              <ul>
                <li>User Experience Society - ADMU</li>
                <li>Developers' Society</li>
              </ul>
            </div>
            
            <div className="faqList">
              <span>University of Santo Tomas</span>
              <ul>
                <li>UST Computer Science Society</li>
                <li>Tomasino Web</li>
              </ul>
            </div>
            
            <div className="faqList">
              <span>De La Salle Santiago Zobel</span>
              <ul>
                <li>Developers' Society</li>
              </ul>
            </div>
            
            <br/>
            <p>Didn't find answers to your inquiry? Drop us a line at <strong>jffcasia@pwdo.org</strong></p>
            
          </Col>
        </Row>
      </Grid>
    </ContentContainer>
  </div>
)

export default IndexPage
