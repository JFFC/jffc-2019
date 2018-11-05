import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './Header'
import '../css/fonts.css'
import '../css/main.css'

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
                paddingTop: 230,
                maxWidth: 1170,
            }}>
                {children}
            </div>
        </>
        )}   
    />
)

export default MainContainer