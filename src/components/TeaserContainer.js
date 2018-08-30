import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import './fonts.css'


const TeaserContainer = ({ children }) => (
    <StaticQuery
    query={graphql`
      query SiteTitleQuery2 {
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
            bodyAttributes={{style: 'background-color: #3A3A3A'}}
            /> 
            <div style={{
                margin: '0 auto',
            }}>
                {children}
            </div>
        </>
        )}   
    />
)

export default TeaserContainer