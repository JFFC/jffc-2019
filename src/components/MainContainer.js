import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './Header'
import '../css/fonts.css'

const MainContainer = ({ children }) => (
    <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
        render={data => (
        <>
            <Helmet
            title={data.site.siteMetadata.title} 
            /> 
            <Header/>
            <div style={{
                margin: '0 auto',
            }}>
                {children}
            </div>
        </>
        )}   
    />
)

export default MainContainer