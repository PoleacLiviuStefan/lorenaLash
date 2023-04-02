import React from 'react'

const Member = ({nume,rol,descriere}) => {
  return (
    <div className='flex flex-col items-center lg:justify-center py-[2rem] px-[2rem] w-[20rem] lg:w-[25rem] bg-white h-[37rem] lg:h-[32rem] shadow-xl font-montSerrat my-[3rem]'>
        <h3 className='text-[24px] font-bold'>{nume}</h3>
        <h4 className='text-[#DAA520]'>{rol}</h4>
        <p className='text-gray-500 mt-[1rem]'>{descriere}</p>
    </div>
  )
}

export default Member