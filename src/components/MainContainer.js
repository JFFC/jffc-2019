import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './Header'
import '../css/fonts.css'
import '../css/main.css'

import og2 from '../images/logos/og2.png';


const MainContainer = ({ slug, children }) => (
    <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            siteUrl
          }
        }
        og: file(relativePath: {eq: "og.png"}) {
            absolutePath
        }
      }
    `}
        render={data => (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Junior Form Function & Class 2019</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="author" content="User Experience Society - DLSU 2018"/>
                <meta name="robots" content="index, follow"/>
                <meta name="description" content="Junior Form Function & Class is the premiere student web design conference in Asia."/>
                <meta property="og:type" content="profile"/>
                <meta property="og:title" content="Junior Form Function & Class 2019"/>
                <meta property="og:url" content="https://jffc.asia"/>
                <meta property="og:description" content="Junior Form Function & Class is the premiere student web design conference in Asia."/>
                <meta property="og:image" content={`${data.site.siteMetadata.siteUrl}/static/og2.png`}/>
                <meta property="og:image:width" content="300"/>
                <meta property="og:image:height" content="300"/>

                <meta property="twitter:card" content="summary"/>
                <meta property="twitter:site" content="@juniorffcph"/>
                <meta property="twitter:title" content="Junior Form Function & Class 2019"/>
                <meta property="twitter:description" content="Junior Form Function & Class is the premiere student web design conference in Asia."/>
            </Helmet>
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