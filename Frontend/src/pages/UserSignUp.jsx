import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const UserSignUp = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userData, setUserData] = useState({});

  const submitHandler =  (e)=>{
    e.preventDefault();
    setUserData({
      fullName:{
        firstName: firstName,
        lastName: lastName
      },
      email: email,
      password: password
    })

    console.log(userData);
    setEmail('');
    setFirstName('');
    setLastName('');
    setPassword('');
  }

  return (
    <div>
      <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
              <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" alt="" />
              <form onSubmit={(e)=>{
                submitHandler(e)
              }} >

                <h3 className = 'text-lg font-medium mb-2'>What's your name ? </h3>
                <div className='flex gap-4 mb-6'>
                  <input 
                  required 
                  
                  className='bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-base placeholder:text-sm'
                  type="text" 
                  placeholder='First name' 
                  value={firstName}
                  onChange={(e)=>{
                    setFirstName(e.target.value)
                  }}
                  />

                  <input 
                  required 
                  
                  className='bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-base placeholder:text-sm'
                  type="text" 
                  placeholder='Last name' 
                  value={lastName}
                  onChange={(e)=>{
                    setLastName(e.target.value)
                  }}
                  />
                </div>

                <h3 className = 'text-lg font-medium mb-2'>What's your email ?</h3>
                <input 
                required 
                
                className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm'
                type="email" 
                placeholder='email@example.com' 
                value={email}
                  onChange={(e)=>{
                    setEmail(e.target.value)
                  }}
                />
      
                <h3 className = 'text-lg font-medium mb-2'>Enter Password</h3>
      
                <input 
                required
                 
                className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm'
                type="password" 
                placeholder = 'Kachua'  
                value={password}
                  onChange={(e)=>{
                    setPassword(e.target.value)
                  }}
                />
      
                <button
                className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-base placeholder:text-sm'
                >Login
                </button>
              </form>
              <p classsname='text-center'>Already have a account ? <Link to='/login' className='text-blue-600'>Login Here</Link></p>
            </div>
      
            <div className='text-[10px] leading-tight'>
              <p>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
            </div>
          </div>
    </div>
  )
}

export default UserSignUp
