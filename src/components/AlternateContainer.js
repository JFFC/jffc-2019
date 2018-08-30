import React from 'react'
import Helmet from 'react-helmet'

import Header from './Header'
import './fonts.css'


const AlternateContainer = ({ children }) => (
    <>
        <Helmet bodyAttributes={{style: 'background-color: white'}}/> 
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