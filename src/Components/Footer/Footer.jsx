import React from 'react'
import logo from './logo.png'
import waygital from './waygital.webp'
const Footer = () => {
  return (
    <div className='relative flex lg:flex-row flex-col  justify-center items-center bg-[#0b2a24] w-full h-full py-[7rem] text-white font-montSerrat'>
        <div className='w-[90%] lg:w-[60rem] flex flex-col items-center lg:grid lg:grid-cols-4 ' >
        <div className='flex flex-col'>
           <h4>LORENA DANOIU LASH SRL</h4>
           <h4>CUI: 46510830 | J40/13973/2022</h4>
           
        </div>
        </div>
        <div className='flex flex-col'>
        <a href="https://anpc.ro/ce-este-sal/"> <div className='bg-cover bg-sal w-[185px] h-[50px]' /></a>
                    <a href="https://ec.europa.eu/consumers/odr" ><div className='bg-cover bg-sol w-[185px] h-[50px]' /></a>
        </div>
        <a href="https://www.waygital.ro/" className='absolute bottom-2 flex'>powered by <img src={waygital} className='ml-2 w-[80px]'/></a>
    </div>
  )
}

export default Footer