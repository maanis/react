import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import iconCart from '../assets/images/iconCart.png'
import { useSelector, useDispatch } from 'react-redux'
// import CartTab from './CartTab'
import { cartTab } from '../stores/cartSlice'

function Header() {
    const data = useSelector(state => state.cart.items)
    // console.log(data)
    const dispatch = useDispatch()
    function handleCart() {
        dispatch(cartTab())
    }
    const [cartQuantity, setCartQuantity] = useState(0)
    useEffect(() => {
        let tempQuan = 0
        data.forEach((item) => {
            tempQuan = tempQuan + item.quantity
            setCartQuantity(tempQuan)

        })
    }, [data])

    return (
        <>
            <div className='flex sticky w-full z-50 bg-white top-0  justify-between items-center  px-[20vw] h-[70px] shadow-lg'>
                <Link to='/' className='text-3xl  font-semibold'>Home</Link>
                <div className='relative cursor-pointer' onClick={handleCart}>
                    <img src={iconCart} alt="" className='w-7' />
                    <span className='absolute bg-[red] w-7 h-7 flex justify-center items-center rounded-full text-sm  p-3 top-3 left-[-11px] text-white '>{cartQuantity}</span>
                </div>
            </div>
        </>
    )
}

export default Header
