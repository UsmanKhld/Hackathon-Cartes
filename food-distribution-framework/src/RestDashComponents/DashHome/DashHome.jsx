import React, { useState } from 'react';
import Sidenav from '../Sidenav/Sidenav'
import './DashHome.css'

export const DashHome = () => {
    const [isHovered, setIsHovered] = useState(false);
  return (
    <div>
        <Sidenav />
        <div className='dash-bg flex justify-start ml-14 items-center'>
        <main>
                <div className='flex flex-col justify-start gap-x-7 '>
                    <div className='flex justify-center items-center shadow-lg flex-col mb-4 text-center h-80 w-200 rounded-xl bg-white'>
                            <p className=' font-bold text-4xl '>I am a Supplier</p> 

                        </div>
                        <div className='flex justify-center items-center shadow-lg flex-col mb-4 text-center h-80 w-200 rounded-xl bg-white'>
                        <p className=' font-bold text-4xl '>I am a Restaurant/Buyer</p>
                    </div>

                </div>
        </main>
        </div>
    </div>
  )
}

export default DashHome