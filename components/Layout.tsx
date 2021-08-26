import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

interface props {
    children?: React.ReactNode
}

const Layout = (prop: props) => {
    return (
        <div>
            <Navbar />
            {prop.children}
            {/* <Footer /> */}
        </div>
    )
}

export default Layout
