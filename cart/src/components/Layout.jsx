import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header'
import CartTab from './CartTab'
import { useDispatch, useSelector } from 'react-redux'

function Layout() {

    const cartStatus = useSelector(state => state.cart.cartTabStatus)
    const dispatch = useDispatch()
    return (
        <>
            <div className='bg-slate-100 h-full'>
                <main>
                    <Header />
                    <div className={` ${cartStatus ? "w-[1200px]" : ""} transition-all duration-500  max-w-full`}>
                        <Outlet />
                    </div>
                </main>
                <div>
                    <CartTab />
                </div>
            </div>
        </>
    )
}

export default Layout
