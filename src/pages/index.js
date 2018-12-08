import React from 'react'
import MainContainer from '../components/MainContainer';
import ContentContainer from '../components/ContentContainer';
import FooterContainer from '../components/FooterContainer';
import { Grid, Row, Col } from 'react-flexbox-grid';

import '../css/hero.css';
import '../css/about.css';
import '../css/speaker.css';
import '../css/faq.css';
import '../css/sponsors.css';
import '../css/subhero.css';
import '../css/footer.css';

import uxsoc from '../images/sponsors/uxsoc.png';
import tomweb from '../images/sponsors/tomweb.png';
import pwdo from '../images/sponsors/pwdo.png';
import pcoa from '../images/sponsors/pcoa.png';
import jffclogo from '../images/logos/jffcmain.png';
import dlsu from '../images/sponsors/ccs.jpg';

const IndexPage = () => (
  <div>
    <MainContainer>
      <Grid fluid className="mainHero">
        <Row>
          <Col xs={12} md={6} className="mainHeroText">
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
            <a href="http://juniorformfunctionclass2019.eventbrite.com">
                <button type="button">
                  BUY TICKETS
                </button>
              </a>
          </Col>
        </Row>
      </Grid>
    </MainContainer>

    <ContentContainer>
      <Grid fluid className="about">
        <Row>
          <Col xs={12} md={12} className="aboutAnchor">
            <a id="about" href="#about">About - What is JFFC?</a>
          </Col>
          <Row>
            <Col xs={12} md={7} className="aboutHeader">
              <h2>Gathering students with passion for the web</h2>
            </Col>
          </Row>
          <Col xs={12} md={12} className="aboutBody">
            <p>Junior Form Function & Class (JFFC) is an annual 2-day event and is Asia’s premiere student web design conference providing opportunities and learning experiences which help students develop their design skills further.</p>
            <p> JFFC derives from <span className="aboutHighlight">Form Function & Class</span> (FFC), an annual event by the <span className="aboutHighlight">Philippine Web Designers Organization</span> (PWDO), with the goal of uplifting the state of web design in the country.</p>
          </Col>
        </Row>
        <Row className="aboutEntry">
          <Col xs={12} md={12} className="aboutAnchor">
            <a id="about-2" href="#about-2">About - What is JFFC 2019?</a>
          </Col>
          <Row>
            <Col xs={12} md={7} className="aboutHeader">
              <h2>Enabling Students to be future-ready with the Web</h2>
            </Col>
          </Row>
          
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
            <a id="speakers" href="#speakers">Speakers</a>
          </Col>
          <Col xs={12} md={12} className="speakerHeader">
            <h2>2019's Web Enablers of the Youth</h2>
          </Col>
        </Row>

        <Row>
          <Col xs={9} md={12}>
            <p id="speakerHeader-1" href="#speakerHeader-1">Plenary Speakers - Day 1</p>
          </Col>
        </Row>
        <Row id="plenary" href="#plenary" start="md">
          <Col xs md={4} className="speakerCard">
            <div className="photoContainer">
              <div className="jiggy duotonespeaker"></div>
            </div>
            <p className="speakerName">Jiggy Villanueva</p>
            <p className="speakerTalk-1">Brand You: The Importance of Designing Your Own Identity</p>
            <p className="speakerSpiel">Jiggy Villanueva is a senior taking up Management Information Systems at Ateneo de Manila University. As a visual designer, Jiggy has worked with several student-run ventures and startups in telling their unique stories through branding and user experience design.</p>
          </Col>
          <Col xs md={4} className="speakerCard">
            <div className="photoContainer">
              <div className="drei duotonespeaker"></div>
            </div>
            <p className="speakerName">Drei Alquiros</p>
            <p className="speakerTalk-1">Why Giving Up My Dream Job Was the Best Decision I've Ever Made</p>
            <p className="speakerSpiel">With over 8 years experience in the Web Development industry, Drei Alquiros has worked for big and small companies in the Philippines. Today, Drei is a Remote WordPress Tech Support and teaches Web Development to Senior High School students.</p>
          </Col>
          <Col xs md={4} className="speakerCard">
            <div className="photoContainer">
              <div className="mark duotonespeaker"></div>            
            </div>
            <p className="speakerName">Mark Lester Lacsamana</p>
            <p className="speakerTalk-1">The You in UX</p>
            <p className="speakerSpiel">Mark Lester Lacsamana is a designer for Kalibrr and previously for OLX Philippines - designing mobile experiences and solving problems on a day-to-day basis. Mark is also a speaker, is active with design communities as well as founding some, and helps out in advocacies on Human Rights and Public health.</p>
          </Col>
          <Col xs md={4} className="speakerCard">
            <div className="photoContainer">
              <div className="nico duotonespeaker"></div>            
            </div>
            <p className="speakerName">Nico Encarnacion</p>
            <p className="speakerTalk-1">Enhance Your Workflow. Build a Design Arsenal.</p>
            <p className="speakerSpiel">Nico is a UX Manager at Make Technology. He loves tinkering with the latest design tools, learning new UX design methods, and improving team efficiency through collaboration as much as he loves cats and the outdoors.</p>
          </Col>
          <Col xs md={4} className="speakerCard">
            <div className="photoContainer">
              <div className="rhea duotonespeaker"></div>            
            </div>
            <p className="speakerName">Rhea Guntalilib</p>
            <p className="speakerTalk-1">Digital Accessibility in Inclusive Design</p>
            <p className="speakerSpiel">Rhea is currently an Accessibility Consultant at Level Access Inc, a San Francisco based digital accessibility consulting firm. Being the only blind student at her school then, it was through accessible technologies that she managed to finish school and graduate as one of the class' Magna Cum Laude.</p>
          </Col>
        </Row>

        <Row>
          <Col xs={9} md={12}>
            <p id="speakerHeader-2" href="#speakerHeader-2">Workshop Facilitators - Day 2</p>
          </Col>
        </Row>
        <Row id="workshop" href="#workshop">
          <Col xs md className="speakerCard">
            <div className="photoContainer">
              <div className="alexis duotoneworkshop"></div>
            </div>
            <p className="speakerName">Alexis Collado</p>
            <p className="speakerTalk-2">Digital Product Design for Startups</p>
            <p className="speakerSpiel">Alexis Collado is a digital product designer at Kalibrr, helping transform the way candidates find jobs and companies hire talent. His podcast, Roots (https://rootspodcast.design), tells the stories of great Filipino designers he’s met. He is a core member and volunteer of UX Philippines, where he helps organize meet-ups and conferences about user experience and design.</p>
          </Col>
          <Col xs md className="speakerCard">
            <div className="photoContainer">
              <div className="sam duotoneworkshop"></div>
            </div>
            <p className="speakerName">Samantha Rose Cruz</p>
            <p className="speakerTalk-2">Building Better Interfaces and User Experiences Through Animation</p>
            <p className="speakerSpiel">Sam is a Product Designer and Front End Web Developer working at Make Technology. Sam has worked for both startups and big companies in the past like Challonge and Proudcloud. Sam also founded ManilaCSS - a community to promote CSS best practices and gather developers to talk anything under the CSS umbrella.</p>
          </Col>
          <Col xs md className="speakerCard">
            <div className="photoContainer">
              <div className="mj duotoneworkshop"></div>            
            </div>
            <p className="speakerName">Mike Jaren Yap</p>
            <p className="speakerTalk-2">Web Crash Course: Learning HTML and CSS Fundamentals</p>
            <p className="speakerSpiel">Mike Jaren Yap is a senior taking up BS-MS Computer Science at De La Salle University. As the current president of (and a co-founder) User Experience Society - DLSU, MJ developed various projects and workshops inside campus. MJ aims to inspire others to become “Leaders of Design and Innovation” through talks.</p>
          </Col>
        </Row>
      </Grid>
    </ContentContainer>

    <ContentContainer>
      <Grid fluid className="faq">
        <Row>
          <Col xs={12} md={12} className="faqAnchor">
            <a id="faq" href="#faq">FAQ</a>
          </Col>
          <Row>
            <Col xs={12} md={7} className="faqHeader">
              <h2>What do you need to know about the event?</h2>
            </Col>
          </Row>
          
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
            
          </Col>
          <Col xs={12} md={12} className="faqSectionHeader">
            <h3>Are tickets refundable?</h3>
          </Col>
          <Col xs={12} md={12} className="faqBody">
            <p>All ticket sales are considered final. However, tickets are transferable provided that the person you will transfer the ticket to is also a student.</p>

            <p>Please send us an email at <a href="mailto:jffcasia@pwdo.org"><span className="aboutHighlight">jffcasia@pwdo.org</span></a> with the name, contact details, and the school of the person you wish to transfer the ticket to, along with reference number of the Eventbrite transaction or the reference number of your GCash or PayMaya offline payment.</p>

            <br/>
            <p>Didn't find answers to your inquiry? Drop us a line at <a href="mailto:jffcasia@pwdo.org"><span className="aboutHighlight">jffcasia@pwdo.org</span></a></p>
          </Col>
        </Row>
      </Grid>
    </ContentContainer>

    <ContentContainer>
      <Grid fluid className="sponsors">
        <Row>
          <Col xs={12} md={12} className="sponsorsAnchor">
            <a id="sponsors" href="#sponsors">Sponsors</a>
          </Col>
          <Col xs={12} md={12} className="sponsorsHeader">
            <h2>Junior Form Function & Class is brought to you by the following:</h2>
          </Col>
        </Row>
        <Row around="md" className="copresentor">
          <Col>
            <img src={uxsoc} height={100} alt="UX Society DLSU"></img>
          </Col>
          <Col>
            <img src={tomweb} height={100} alt="TomasinoWeb"></img>
          </Col>
          <Col>
            <img src={pwdo} height={120} alt="Philippine Web Designers Organization"></img>
          </Col>
          <Col>
            <img src={pcoa} height={100} alt="Philippine Computing Organizations Alliance"></img>
          </Col>
          <Col>
            <img src={dlsu} height={100} alt="De La Salle University College of Computer Studies"></img>
          </Col>
        </Row>
        <Row className="major">
        
        </Row>
        <Row className="minor">
        
        </Row>
        <Row className="media">
        
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <p>Interested in partnering with us? Browse our <a href="http://bit.ly/jffc-2019-sponsorship"><span className="aboutHighlight">partnership primer</span></a> or contact us at <a href="mailto:jffcasia@pwdo.org"><span className="aboutHighlight">jffcasia@pwdo.org</span></a></p>
          </Col>
        </Row>
      </Grid>
    </ContentContainer>

    <ContentContainer>
      <Grid fluid className="subHero">
        <div className="subHeroSpacer">
          <Row>
            <Col xs={12} md={12} className="subHeroText">
              <h1>
                Prepared to be future-ready?
              </h1>
            </Col>
          </Row>
          <Row className="subHeroCTA">
            <Col xs={12} md={12}>
              <a href="http://juniorformfunctionclass2019.eventbrite.com">
                <button type="button">
                  BUY TICKETS
                </button>
              </a>
            </Col>
          </Row>
        </div>
      </Grid>
    </ContentContainer>

    <FooterContainer>
      <Grid fluid className="footer">
        <Row center="xs" middle="xs" start="md">
          <Col xs={4} md>
            <img className="logo" src={jffclogo} alt="Junior Form Function & Class" />
          </Col>
          <Col xs={8} md className="footerText">
            <p>Junior Form Function & Class 2019 is brought to you by <span id="twColor">TomasinoWeb</span>, <span id="uxColor">User Experience Society - DLSU</span>, and <span id="pcColor">The Philippine Computing Organizations Alliance</span></p>
          </Col>
        </Row>
      </Grid>
    </FooterContainer>
    
  </div>
)

export default IndexPage
