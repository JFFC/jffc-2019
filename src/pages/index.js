import React from 'react'
import MainContainer from '../components/MainContainer';
import ContentContainer from '../components/ContentContainer';
import { Grid, Row, Col } from 'react-flexbox-grid';

import mainlogo from '../images/jffc-logo-main@2x.png';

import '../css/hero.css';
import '../css/about.css';
import '../css/speaker.css';

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
        <Row>
          <Col xs={4} md={4} className="speakerCard">
            <p className="speakerName">Jiggy Villanueva</p>
            <p className="speakerTalk-1">Crafting Compelling Experiences Through Branding</p>
            <p className="speakerSpiel">Jiggy Villanueva is senior taking up Management Information Systems at ADMU. As a visual designer, Jiggy has worked with several student-run ventures and startups in telling their unique stories through branding and user experience design.</p>
          </Col>
          <Col xs={4} md={4} className="speakerCard">
            <p className="speakerName">Drei Alquiros</p>
            <p className="speakerTalk-1">Why Giving Up My Dream Job Was the Best Decision I've Ever Made</p>
            <p className="speakerSpiel">With over 8 years experience in the Web Development industry, Drei Alquiros has worked for big and small companies in the Philippines. Today, Drei is a Remote WordPress Tech Support and teaches Web Development to Senior High School students.</p>
          </Col>
          <Col xs={4} md={4} className="speakerCard">
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
        <Row>
          <Col xs={4} md={4} className="speakerCard">
            <p className="speakerName">Alexis Collado</p>
            <p className="speakerTalk-2">Product Design 101</p>
            <p className="speakerSpiel">Alexis Collado is a digital product designer at Kalibrr, helping transform the way candidates find jobs and companies hire talent. His podcast, Roots (https://rootspodcast.design), tells the stories of great Filipino designers he’s met. He is a core member and volunteer of UX Philippines, where he helps organize meet-ups and conferences about user experience and design.</p>
          </Col>
          <Col xs={4} md={4} className="speakerCard">
            <p className="speakerName">Samantha Rose Cruz</p>
            <p className="speakerTalk-2">CSS/SVG Animations</p>
            <p className="speakerSpiel">Samantha is a Product Designer and Front End Web Developer who has worked with startups and big companies locally and abroad. She currently works at Make Technology: a UX and Technology company by Ace Saatchi & Saatchi. She previously worked at Challonge: a tournament management app for sports and esports that serves millions of users around the world, and Proudcloud: a web engineering firm that builds technologies for startups and large enterprises. She also founded and manages ManilaCSS, aiming to promote CSS best practices, discover what's new, and gather professional and amateur developers to talk about anything under the CSS umbrella.</p>
          </Col>
          <Col xs={4} md={4} className="speakerCard">
            <p className="speakerName">Mike Jaren Yap</p>
            <p className="speakerTalk-2">Back to Basics: HTML and CSS Fundamentals</p>
            <p className="speakerSpiel">Mike Jaren Yap is a senior taking up Bachelor of Science in Computer Science specializing in Software Technology at De La Salle University. He is the founder and current president of the User Experience Society - DLSU. During his stint as the Director for UX Education and Consultancy, he produced various projects for clients and conceptualized UX-related talks and workshops held at the university. He previously worked for Cambridge University Press as a Front-End Developer Intern and part of the Design Team. He has also facilitated talks and workshops that advocate for UX Education and inspire others to become Leaders of Design and Innovation.</p>
          </Col>
        </Row>
      </Grid>
    </ContentContainer>
  </div>
)

export default IndexPage
