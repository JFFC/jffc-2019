import React from 'react'

import Header from './header'
import '../css/fonts.css'


const alternatecontainer = ({ children }) => (
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

export default alternatecontainer