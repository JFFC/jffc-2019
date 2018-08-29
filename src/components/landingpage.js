import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import Header from './header'

const LandingPage = ({ children }) => (
    <>
        <Helmet bodyAttributes={{style: 'background-color: #3A3A3A'}}/> 
        <Header/>
        <div style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 264,
        }}>
            {children}
        </div>
    </>
)

export default LandingPage
