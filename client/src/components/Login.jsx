import React from 'react'
import Bookshop from '../assets/Bookshop.png'

export default function Login() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 p-6 shadow-lg bg-gradient-to-r from-pink-800 via-red-600 to-pink-800 rounded-md">
        <h1 className="text-3xl block text-center font-semibold text-lime-400"><i className="fa-solid fa-user"></i> Login</h1>
          {/* <!-- Username --> */}
          <div className="mt-3">
            <label for="username" className="block text-base mb-2 text-pink-400">Username/Email</label>
            <input type="text" id="user-login" className="border rounded-md w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-pink-600" placeholder="Enter your Username or email" />
          </div>
          {/* <!-- Password --> */}
          <div className="mt-3">
            <label for="password" className="block text-base mb-2 text-pink-400">Password</label>
            <input type="password" id="password-login" className="border rounded-md w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-lime-600" placeholder="Enter Password..." />
          </div>
          <div className="mt-3 flex justify-between items-center">
            <div>
              {/* <input type="checkbox"> */}
              <label className="text-yellow-400">Remember Me</label>
            </div>

            <div>
              <a href="#" className="text- text-yellow-400 font-semibold">Forgot Password?</a>
            </div>
          </div>
          {/* <!-- Login Button --> */}
          <div id="login-form" className="mt-5">
            <button type="submit" className="border-2 border-lime-400 bg-lime-400 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-lime-400 font-semibold"><i className="fa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;Login</button>
          </div>
          <div className="text-xs text-yellow-400 my-2">Don't have a account? <a href="/signup" className="text-yellow-400">Sign up</a></div>
      </div>
    </div>
  )
}

