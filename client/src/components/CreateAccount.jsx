import React, { useState } from 'react';

function CreateAccount() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange  = (event) => {
    setPassword(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can perform validation and submit the form data to your backend server.
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-50 p-8 shadow-lg bg-gradient-to-r  from-pink-300 via-pink-400 to-pink-500 rounded-md">
        <h1 className="text-3xl block text-center font-semibold text-gray-200"><i className="fa-solid fa-user"></i> Sign Up</h1>
    <form onSubmit={handleSubmit}>
      <div className='flex flex-col'>
      <div className='text-white'>
        <label htmlFor="first-name-input">First Name:</label>
        <input
          type="text"
          id="first-name-input"
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </div>
      <div className='mt-2 text-white'>
        <label htmlFor="last-name-input">Last Name:</label>
        <input
          type="text"
          id="last-name-input"
          value={lastName}
          onChange={handleLastNameChange}
        />
      </div>
      <div className=' flex flex-col py-2 text-white '>
        <label htmlFor="email-input">Email:</label>
        <input
          type="email"
          id="email-input"
          className="w-70 h-11 rounded-lg"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div className=' flex flex-col py-2 text-white'>
        <label htmlFor="password-input">Password:</label>
        <input
          type="password"
          id="password-input"
          className="w-70 h-11 rounded-lg"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button type="submit" className='mt-2 text-white'>Create Account</button>
      </div>
    </form>
    </div>
    </div>
  );
}

export default CreateAccount;
