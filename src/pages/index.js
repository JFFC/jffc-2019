import React from 'react'
import { Link } from 'gatsby'

import LandingPage from '../components/landingpage';

const IndexPage = () => (
  <LandingPage>
    <div style={{maxWidth: 523}}>
      <p style={{color: "#EFEFEF"}}>January 26 - 27, 2019</p>
      <h1 style={{
        color: "#EFEFEF",
        fontFamily: "Inovato",
        fontWeight: "400"
       }}>
        Join the premier student web design conference in Asia.
      </h1>
      <p style={{color: "#EFEFEF"}}>Get your tickets now.</p>
    </div>
  </LandingPage>
)

export default IndexPage
