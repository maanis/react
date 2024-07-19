import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function Layout() {
    return (
        <div>
            <Header />
            <div className='w-full bg-zinc-700 overflow-y-auto' style={{ height: "calc(100vh - 75px - 35px)" }}><Outlet /></div>
            <Footer />
        </div>
    )
}

export default Layout
