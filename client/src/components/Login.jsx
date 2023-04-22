import React from 'react'
import Bookshop from'../assets/Bookshop.png'

export default function Login() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
<div className='hiddden sm:block'>
  <img className='w-full h-full object-cover' src={Bookshop} alt="" />
  </div>
<div className='bg-gray-400 flex flex-col justify-center'>
  <form className='max-w-[400px] w-full mx-auto bg-white p-4'>
    <h2 className='text-4xl font-bold text-center py-6'>Sign In</h2>
    <div className='flex flex-col py-2'>
      <label>Username</label>
      <input className='border p-2' type="text" />
    </div>
    <div className='flex flex-col py-2'>
      <label>Password</label>
      <input className='border p-2' type="password" />
    </div>
    <button className='border w-full my-5 py-2 bg-red-500 hover:bg-red-400 text-white'>Sign In</button>
    <div className='flex justify-between'>
      <p className='flex items-center '><input className='mr-2' type="checkbox" /> Remember Me</p>
      <p>Create an account</p>
    </div>
  </form>
</div>
</div>
)
}

