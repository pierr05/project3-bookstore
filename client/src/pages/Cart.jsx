import React from 'react'
import NavBar from '../components/NavBar';

function Cart() {
  return (
    <>
    <NavBar/>
    <div>
    <div className='flex justify-center text-5xl'>Cart</div>

    <div className='flex items-center justify-between mt-4'>
        <button>Continue Shopping</button>
        <button>Checkout</button>
    </div>
    </div>
</>
  )
}

export default Cart