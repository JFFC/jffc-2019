import React from 'react'
import { Link } from 'gatsby'

import './header.css'

const Header = ({ siteTitle }) => (
  <div id="mainHeaderContainer">
    <div>
      <ul>
        <li><Link to="/"> Home</Link></li>
        <li><Link to="/faqs/">FAQs</Link></li>
        <li><Link to="/about/">About</Link></li>
        <li><Link to="/speakers/">Speakers</Link></li>
        <li><Link to="/schedule/">Schedule</Link></li>
        <li><Link to="/sponsor/">Sponsors</Link></li>
      </ul>
    </div>
  </div>
)

export default Header
