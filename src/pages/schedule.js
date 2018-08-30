import React from 'react'
import { Link } from 'gatsby'

import AlternateContainer from '../components/alternatecontainer';

const SchedulePage = () => (
  <AlternateContainer>
    <h1>Schedule</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </AlternateContainer>
)

export default SchedulePage
