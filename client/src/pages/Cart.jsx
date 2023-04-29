import React from 'react'
import NavBar from '../components/NavBar';

function Cart() {
  return (
    <>
    <NavBar/>
    <div className='p-5'>
    <div className='flex justify-center text-5xl'>Cart</div>

    <div className='flex items-center justify-between mt-4'>
        <button className='bg-white text-[#8a4af3] border-2 border-[#8a4af3] hover:bg-white'>Continue Shopping</button>
        <div className='flex underline text-lg hover:cursor-pointer'>
            <p>Items in your Cart : 3</p>
            <p className='ml-5'>WishList Item: 0</p>
        </div>
        <button>Checkout</button>
    </div>

    {/* central div */}
    <div>
        <div>
            list of products div
            <div></div>
            </div>
            <div>
                summary
            </div>
    </div>
    </div>
</>
  )
}

export default Cart