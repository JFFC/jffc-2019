import React from 'react'

import Header from './Header'
import '../css/fonts.css'


const AlternateContainer = ({ children }) => (
    <>
        <Header/>
        <div style={{
            margin: '0 auto',
            paddingTop: 230,
        }}>
            {children}
        </div>
    </>
)

export default AlternateContainer