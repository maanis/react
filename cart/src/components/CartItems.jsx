import React, { useEffect, useState } from 'react'
import { products } from '../items'
import { useDispatch } from 'react-redux'
import { addCart } from '../stores/cartSlice'
import { cartQuantity } from '../stores/cartSlice'

function CartItems(props) {
    const dispatch = useDispatch()
    const { productId, quantity } = props.data
    const [details, setDetails] = useState([])
    useEffect(() => {
        setDetails(products[productId])
    }, [productId])

    function handleMinus() {
        dispatch(cartQuantity({
            productId: productId,
            quantity: quantity - 1
        }))
    }
    function handlePlus() {
        dispatch(cartQuantity({
            productId: productId,
            quantity: quantity + 1
            
        }))
    }


    return (
        <div className='flex px-2 py-1 text-white mt-2 rounded-md items-center bg-slate-700'>
            <div><img src={details.image} alt="" className='w-20' /></div>
            <h2>{details.name}</h2>
            <h2 className='mr-3'>$<span>{quantity * details.price}</span></h2>
            <button className='bg-white text-black font-semibold text-xl rounded-full p-2 h-8 flex justify-center items-center w-8' onClick={handleMinus}>-</button>
            <div className='mx-2'>{quantity}</div>
            <button className='bg-white text-black font-semibold text-xl rounded-full p-2 h-8 flex justify-center items-center w-8' onClick={handlePlus}>+</button>
        </div>
    )
}

export default CartItems
