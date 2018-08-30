import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../css/fonts.css'
import '../css/main.css'

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