import React from 'react'
import Helmet from 'react-helmet'

import Header from './Header'
import '../css/fonts.css'


const AlternateContainer = ({ children }) => (
    <>
        <Header/>
        <div style={{
            margin: '0 auto',
            maxWidth: 960,
            paddingTop: 97,
        }}>
            {children}
        </div>
    </>
)

export default AlternateContainer