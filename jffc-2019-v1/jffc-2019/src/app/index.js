/*Application Core*/
import React, { Component } from 'react';
import {BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';

/*Application Resources*/
import '../assets/css/jffc-app.css';
import '../assets/css/jffc-lotus.css';

/*Application Containers*/
import Home from '../containers/home';
import FAQ from '../containers/faq';
import About from '../containers/about';
import Speaker from '../containers/speaker';
import Schedule from '../containers/schedule';
import Sponsor from '../containers/sponsor';

class App extends Component {

  componentDidMount() {
    document.body.id= "jffc-container";
  }

  render() {
    return (
      <Router>
        <div className="row header-l">
          <NavLink to="/" activeStyle={{color:'green'}} exact={true}>Home</NavLink>
          <NavLink to="/faqs">FAQs</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/speakers">Speakers</NavLink>
          <NavLink to="/schedule">Schedule</NavLink>
          <NavLink to="/sponsors">Sponsors</NavLink>
          <Route path="/" exact={true} strict component={Home}/>
          <Route path="/faqs" exact={true} strict component={FAQ}/>
          <Route path="/about" exact={true} strict component={About}/>
          <Route path="/speakers" exact={true} strict component={Speaker}/>
          <Route path="/schedule" exact={true} strict component={Schedule}/>
          <Route path="/sponsors" exact={true} strict component={Sponsor}/>
          <div className="col c12 cm12 s12">
         
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
