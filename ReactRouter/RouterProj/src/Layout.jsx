import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'

function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>

    )
}

export default Layout
