import React from 'react'

import '../css/fonts.css'

const FooterContainer = ({ children }) => (
    <>
        <div style={{
            margin: '0 auto',
            maxWidth: 1170,
        }}>
            {children}
        </div>
    </>
)

export default FooterContainer