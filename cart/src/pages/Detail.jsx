import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom/dist'
import { addCart } from '../stores/cartSlice'
import { products } from '../items'
import iconCart from '../assets/images/iconCart.png'


function Detail() {
    const dispatch = useDispatch()
    const { slug } = useParams()
    const [details, setDetails] = useState([])
    const [quantity, setQuantity] = useState(1)
    const data = products.findIndex(e => e.slug === slug)
    useEffect(() => {
        setDetails(products[data])
    }, [slug])

    function handlePlus() {
        setQuantity(quantity + 1)
    }
    function handleMinus() {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    function handleAddToCart() {
        dispatch(addCart({
            productId: data,
            quantity: quantity
        }))
    }


    return (
        <div className='grid  lg:grid-cols-2 sm:grid-cols-1 place-content-center gap4 w-[65vw] mx-auto ' style={{ height: 'calc(100vh - 70px)' }}>
            <div>
                <img src={details.image} alt="" className='' />
            </div>
            <div>
                <h2 className='text-4xl lg:text-start md:text-center  uppercase font-bold mt-8'>{details.name}</h2>
                <h3 className='mt-3 lg:text-start md:text-center font-bold'>$<span className='text-2xl font-semibold '>{details.price}</span></h3>
                <div className='flex gap-1 lg:justify-start md:justify-center mt-4'>
                    <button className='text-2xl font-semibold bg-slate-200 p-3 rounded-md w-10  h-10 flex justify-center items-center active:scale-95 ' onClick={handleMinus}>-</button>
                    <p className='text-xl font-semibold bg-slate-100 p-3 rounded-md w-10  h-10 flex justify-center items-center'>{quantity}</p>
                    <button className='text-2xl font-semibold bg-slate-200 p-3 rounded-md w-10  h-10 flex justify-center items-center active:scale-95 ' onClick={handlePlus}>+</button>
                    <button className='bg-gray-700 p-2 ml-2 rounded-md text-sm text-white hover:bg-gray-900 flex gap-2' onClick={handleAddToCart}>
                        <img src={iconCart} alt="" className='w-5 text-white invert' />
                        Add To Cart
                    </button>
                </div>
                <p className='mt-3'>{details.description}</p>
            </div>
        </div>
    )
}

export default Detail
