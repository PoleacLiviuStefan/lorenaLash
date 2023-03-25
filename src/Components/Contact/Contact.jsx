import React from 'react'
import {BsInstagram,BsFillPinMapFill} from 'react-icons/bs'
import {FiFacebook} from 'react-icons/fi'
const Contact = () => {
  return (
    <div className='w-full h-full flex flex-wrap'>
        <div className='flex '>
            <div className='flex justify-center items-center w-[60px] h-[60px] rounded-[50%] bg-black text-white'>
                <BsInstagram/>
            </div>
            <h4></h4>
        </div>
        <div className='flex '>
            <div className='flex justify-center items-center w-[60px] h-[60px] rounded-[50%] bg-black text-white'>
                <FiFacebook/>
            </div>
            <h4></h4>
        </div>
        <div className='flex '>
            <div className='flex justify-center items-center w-[60px] h-[60px] rounded-[50%] bg-black text-white'>
                <BsFillPinMapFill/>
            </div>
            <h4></h4>
        </div>
   
    </div>
  )
}

export default Contact