import React from 'react'

export default function Login() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 p-10 shadow-lg bg-gradient-to-r from-pink-300 via-pink-400 to-pink-500 rounded-md">
        <h1 className="text-3xl block text-center font-semibold text-white"><i className="fa-solid fa-user"></i> Login</h1>
          {/* <!-- Username --> */}
          <div className="mt-3">
            <label for="username" className="block text-base mb-2 text-white">Username/Email</label>
            <input type="text" id="user-login" className="border rounded-lg w-full text-base px-2 py-1  w-50 h-10 focus:outline-none focus:ring-0 focus:border-pink-600" placeholder="Enter your Username or email" />
          </div>
          {/* <!-- Password --> */}
          <div className="mt-3">
            <label for="password" className="block text-base mb-2 text-white">Password</label>
            <input type="password" id="password-login" className="border rounded-lg w-full text-base px-2 py-1 w-50 h-10 focus:outline-none focus:ring-0 focus:border-pink-600" placeholder="Enter Password..." />
          </div>
          <div className="mt-3 flex justify-between items-center">
            <div>
              {/* <input type="checkbox"> */}
              <label className="text-white">Remember Me</label>
            </div>

            <div>
              <a href="#" className="text- text-white font-semibold">Forgot Password?</a>
            </div>
          </div>
          {/* <!-- Login Button --> */}
          <div id="login-form" className="mt-5">
            <button type="submit" className="border-2 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-white font-semibold"><i className="fa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;Login</button>
          </div>
          <div className="text-xs text-white my-2">Don't have a account? <a href="/signup" className="text-white">Sign up</a></div>
      </div>
    </div>
  )
}

