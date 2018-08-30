import React from 'react'
import { Link } from 'gatsby'

import * as AlternateContainer from '../components/alternatecontainer';

const FaqsPage = () => (
  <AlternateContainer>
    <h1>Frequently Asked Questions</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </AlternateContainer>
)

export default FaqsPage
