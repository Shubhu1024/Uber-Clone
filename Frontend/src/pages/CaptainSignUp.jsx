import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const CaptainSignUp = () => {
  
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    
    const [vehicleColor, setVehicleColor] = useState('');
    const [vehiclePlate, setVehiclePlate] = useState('');
    const [vehicleCapacity, setVehicleCapacity] = useState('');
    const [vehicleType, setVehicleType] = useState('');

    const {captain, setCaptain} = useContext(CaptainDataContext);



    const submitHandler = async  (e)=>{
    e.preventDefault();
    const captainData = {
      fullname:{
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password,
      vehicle : {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);

    if(response.status === 201){
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem('token', data.token);
      navigate('/captain-home');
    }
    
    setEmail('');
    setFirstName('');
    setLastName('');
    setPassword('');
    setVehicleColor('');
    setVehicleCapacity('');
    setVehiclePlate('');
    setVehicleType('');
  }

  return (
    <div className='py-5 px-5 h-screen flex flex-col justify-between'>
            <div>
              <img className='w-20 mb-2' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />

              <form onSubmit={(e)=>{
                submitHandler(e)
              }} >

                <h3 className = 'text-lg w-full font-medium mb-2'>What's our Captain's name ? </h3>
                <div className='flex gap-4 mb-7'>
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

                <h3 className = 'text-lg font-medium mb-2'>What's our Captain's email ?</h3>
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

                <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
                <div className='flex gap-4 mb-6'>
                  <input
                    required
                    className='bg-[#eeeeee] w-1/3 rounded px-4 py-2 border text-base placeholder:text-sm'
                    type="text"
                    placeholder='Vehicle Color'
                    value={vehicleColor}
                    onChange={(e) => setVehicleColor(e.target.value)}
                  />
                  <input
                    required
                    className='bg-[#eeeeee] w-1/3 rounded px-4 py-2 border text-base placeholder:text-sm'
                    type="text"
                    placeholder='Vehicle Plate'
                    value={vehiclePlate}
                    onChange={(e) => setVehiclePlate(e.target.value)}
                  />
                  <input
                    required
                    className='bg-[#eeeeee] w-1/3 rounded px-4 py-2 border text-base placeholder:text-sm'
                    type="number"
                    min="1"
                    placeholder='Capacity'
                    value={vehicleCapacity}
                    onChange={(e) => setVehicleCapacity(e.target.value)}
                  />
                </div>
                <div className='mb-6'>
                  <label className='block mb-2 text-base font-medium'>Vehicle Type</label>
                  <select
                    required
                    className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-base'
                    value={vehicleType}
                    onChange={(e) => setVehicleType(e.target.value)}
                  >
                    <option value="">Select type</option>
                    <option value="car">Car</option>
                    <option value="auto">Auto</option>
                    <option value="moto">Moto</option>
                  </select>
                </div>
      
                <button
                className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-base placeholder:text-sm'
                >Create Captain Account
                </button>
              </form>
              <p classsname='text-center'>Already have a account ? <Link to='/captain-login' className='text-blue-600'>Login Here</Link></p>
            </div>
      
            <div className='text-[10px] leading-tight'>
              <p>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
            </div>
    </div>
  )
}

export default CaptainSignUp
