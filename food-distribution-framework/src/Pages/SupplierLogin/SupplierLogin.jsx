import React from 'react'
import './SupplierLogin.css'
import truck from '../../assets/Truck-unload.png'

export const SupplierLogin = () => {
  return (
    <div className='login_bg flex justify-center items-center'>
      <div className=' rounded-xl h-128 shadow-lg w-200 bg-white py-9 px-5 flex'>
        <div className='w-1/2'>
            <div className='flex justify-center text-6xl font-serif text-blue-700 mb-12 '>
                Sign Up
            </div>
            <form action='#'>
            <div className='inputs'>
                <div className='input'>
                <input type='text' placeholder='Email' className='input-field'/>
                <label htmlFor='input-field' className='input-label'>Email</label>
                <span className='input-highlight'></span>
                </div>
                <div className='input'>
                <input type='text' placeholder='Password' className='input-field'/>
                <label htmlFor='input-field' className='input-label'>Password</label>
                <span className='input-highlight'></span>
            </div>
          </div>
        </form>
        <button className='form_buttons'>Forgot Password</button>
        <a href='/'><button className='form_buttons'>Sign Up</button></a>
        </div>
        <div className='w-1/2'>
            <img className='image_edits object-cover' src={truck} alt='Truck unloading'/>
        </div>
      </div>
    </div>
  )
}

export default SupplierLogin