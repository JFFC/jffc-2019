import React from 'react'
import { Link } from 'gatsby'

import * as AlternateContainer from '../components/alternatecontainer';

const SpeakersPage = () => (
  <AlternateContainer>
    <h1>Speakers</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </AlternateContainer>
)

export default SpeakersPage
