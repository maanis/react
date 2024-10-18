import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CartItems from './CartItems'
import { cartTab } from '../stores/cartSlice'
function CartTab() {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart.items)
    const cartStatus = useSelector(state => state.cart.cartTabStatus)
    console.log(cartStatus)
    // console.log(cart)
    function handleClose() {
        dispatch(cartTab())
    }
    return (
        <div className={`fixed top-[70px] bottom-0 ${cartStatus ? "right-0" : "right-[-1280px]"} transition-all duration-300  lg:w-96 md:w-96 sm:w-full grid grid-rows-[60px_1fr_60px] bg-gray-800`} style={{ height: 'calc(100vh - 70px)' }}>
            <h2 className='text-center text-2xl text-white mt-3'>Product Carts</h2>
            <div className=' p-4 overflow-y-auto'>
                {cart.map((item, key) => {
                    return (
                        <CartItems data={item} key={key} />
                    )
                })}
            </div>
            <div className="grid grid-cols-2">
                <button className='bg-black text-white text-xl' onClick={handleClose}>Close</button>
                <button className='bg-orange-500 text-white text-xl'>Checkout</button>
            </div>
        </div>
    )
}

export default CartTab
