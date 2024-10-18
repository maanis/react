import React from 'react'
import { products } from '../items'
import ProductItem from './ProductItem';

function Home() {
    console.log(products);
    return (
        <>
            <div className='grid lg:grid-cols-4 gap-5 md:grid-cols-3 sm:grid-cols-2 mt-6 pb-4 mx-auto transition-all w-10/12'>
                {products.map((items, id) => {
                    return <div key={id}>
                        <ProductItem data={items} key={id} />

                    </div>
                })}
            </div>
        </>
    )
}

export default Home
