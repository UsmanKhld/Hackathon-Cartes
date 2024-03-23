import React, { useState } from 'react';
import Sidenav from '../Sidenav/Sidenav'
import './DashHome.css'

export const DashHome = () => {
  return (
    <div className='flex flex-row'> 
        <Sidenav />
        <div className='flex dash-bg justify-start items-center'>
        <main>
                <div className='flex flex-col justify-start gap-x-7 items-start shadow-lg mb-4 h-200 w-200 rounded-xl bg-white px-5 py-5 translate-y-1.5'>
                    <div className=' font-bold text-4xl mb-5'>Products available</div> 
                        <div className=' flex justify-between'>
                            <button className='form_buttons_dash'>Order Apples</button>
                            <button className='form_buttons_dash'>Order Apples</button>
                            <button className='form_buttons_dash'>Order Apples</button>
                            <button className='form_buttons_dash'>Order Apples</button>
                            <button className='form_buttons_dash'>Order Apples</button>
                            
                        </div>
                        <div className=' flex justify-between'>
                            <button className='form_buttons_dash'>Order Apples</button>
                            <button className='form_buttons_dash'>Order Apples</button>
                            <button className='form_buttons_dash'>Order Apples</button>
                            <button className='form_buttons_dash'>Order Apples</button>
                            <button className='form_buttons_dash'>Order Apples</button>
                            
                        </div>
                </div>
        </main>
        <div className=' h-200 w-96 ml-4 rounded-xl bg-white '>
            <div className='px-5 py-5'>
                <p className='font-bold text-lg'>Cart</p>
            </div>
            
        </div>
        </div>
    </div>
  )
}

export default DashHome