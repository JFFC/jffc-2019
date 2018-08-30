import React from 'react'
import { Link } from 'gatsby'

import AlternateContainer from '../components/alternatecontainer';

const AboutPage = () => (
  <AlternateContainer>
    <h1>About</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </AlternateContainer>
)

export default AboutPage
