import React, { useState } from 'react';
import { useMutation } from '@apollo/client'
import { ADD_USER } from '../utils/mutations'
import Auth from '../utils/auth'
function CreateAccount() {
  const [userFormData, setUserFormData] = useState({firstName:"", lastName:"",email:"", password:"",});
  
  const [addUser, { error, data }] = useMutation(ADD_USER);
  const handleInputChange = (event) =>
  {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
    console.log(userFormData)
  };

  


  const handleSubmit = async(event) => {
    event.preventDefault();
    console.log (userFormData)
    try
    {
      const { data } = await addUser({
        variables: { ...userFormData },
      });
      Auth.login(data.addUser.token);
    } catch (err)
    {
      console.error(err);
    }
    setUserFormData({
      firstName: "",
      lastName:"",
      email: "",
      password: "",
    });
    // Here you can perform validation and submit the form data to your backend server.
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-50 p-8 shadow-lg bg-gradient-to-r  from-pink-300 via-pink-400 to-pink-500 rounded-md">
        <h1 className="text-3xl block text-center font-semibold text-white"><i className="fa-solid fa-user"></i> Sign Up</h1>
    <form onSubmit={handleSubmit}>
      <div className='flex flex-col'>
      <div className='text-white'>
        <label htmlFor="first-name-input">First Name:</label>
        <input
          type="text"
          id="first-name-input"
          name="firstName"
          onChange={handleInputChange}
          value={userFormData.firstName}
          placeholder='First Name'
        />
      </div>
      <div className='mt-2 text-white'>
        <label htmlFor="last-name-input">Last Name:</label>
        <input
          type="text"
          id="last-name-input"
          name='lastName'
          value={userFormData.lastName}
          placeholder='Last Name'
          onChange={handleInputChange}
        />
      </div>
      <div className=' flex flex-col py-2 text-white '>
        <label htmlFor="email-input">Email:</label>
        <input
          type="email"
          id="email-input"
          name='email'
          className="w-70 h-11 rounded-lg"
          value={userFormData.email}
          placeholder='  Email'
          onChange={handleInputChange}
        />
      </div>
      <div className=' flex flex-col py-2 text-white'>
        <label htmlFor="password-input">Password:</label>
        <input
          type="password"
          id="password-input"
          className="w-70 h-11 rounded-lg"
          name='password'
          value={userFormData.password}
          placeholder='  Password'
          onChange={handleInputChange}
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
