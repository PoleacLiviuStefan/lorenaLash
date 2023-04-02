import React from 'react'
import { useNavigate } from 'react-router-dom'
const CursMainPreview = ({imagine,subTitlu,titlu,descriere,redirectionare,secondTitle}) => {
    const navigate=useNavigate();
  return (
    <div className='my-[5rem] w-[20rem] lg:w-[60rem] h-full  lg:py-0  lg:h-[30rem] bg-white flex flex-col lg:flex-row lg:justify-between items-center border-[1px] border-yellow-400 font-montSerrat shadow-xl'>
            <img src={imagine} className='top-0 w-full lg:w-[25rem] h-[20rem] lg:h-full bg-black' />
            <div className='relative top-0 py-[3rem] lg:py-0 lg:mt-0 w-[90%] lg:w-[35rem] flex flex-col items-center'>
                    <h4 className='lg:text-[22px] font-norican text-[#DAA520]'>{subTitlu}</h4>
                    <h3 className='text-[18px] lg:text-[32px] font-norican font-bold text-center'>{titlu}</h3>
                    <h4 className='lg:text-[22px] font-norican'>{secondTitle}</h4>
                    <p className='w-[80%] text-[14px] lg:text-[16px] text-justify mt-[1rem]'>
                         {descriere}
                    </p>
                    <button onClick={()=>{navigate(redirectionare);window.scrollTo({top:0,left:0})}} className='border-[1px] border-yellow-400 px-[4rem] py-[.5rem] mt-[2rem]'>Afla mai multe </button>
            </div>
     
        </div>
  )
}

export default CursMainPreview