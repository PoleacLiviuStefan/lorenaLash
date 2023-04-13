import React from 'react'
import { useNavigate } from 'react-router-dom'
const CursMainPreview = ({imagine,subTitlu,titlu,descriere,redirectionare,secondTitle}) => {
    const navigate=useNavigate();
  return (
    <div className='relative my-[5rem] w-[20rem] lg:w-[60rem] h-full  lg:py-0  lg:h-[30rem] bg-white flex flex-col lg:flex-row lg:justify-between items-center border-[1px] border-yellow-400 font-montSerrat shadow-xl'>
     
            <img src={imagine} className='top-0 w-full lg:w-[25rem]  bg-black' />
            <div className='relative top-0 py-[3rem] lg:py-0 lg:mt-0 w-[90%] lg:w-[35rem] flex flex-col items-center'>
                    <h4 className='lg:text-[22px] font-norican text-[#DAA520]'>{subTitlu}</h4>
                    <h3 className='text-[18px] lg:text-[32px] font-oswald  font-extrabold text-center'>{titlu}</h3>
                    <h4 className='lg:text-[22px] font-norican'>{secondTitle}</h4>
                    <p className='w-[80%] text-[14px] lg:text-[16px] text-justify mt-[1rem]'>
                         {descriere}
                    </p>
                    <button onClick={()=>{navigate(redirectionare);window.scrollTo({top:0,left:0})}} className='border-[1px] border-yellow-400 px-[4rem] py-[.5rem] mt-[2rem]'>Afla mai multe </button>
                    <div className='absolute flex justify-center items-center right-6  bottom-[-45px] lg:bottom-[-2rem] w-[90px] lg:w-[105px] h-[90px] lg:h-[105px] rounded-[50%] bg-[#0b2a24] text-white z-30'  >
          <h4 className='flex flex-col items-center text-center text-[11px] lg:text-[13px] font-bold'>REDUCERE<span className='text-[18px] lg:text-[22px]'>10%</span> <span>19-26 Aprilie</span>  </h4>
          </div>
            </div>
     
        </div>
  )
}

export default CursMainPreview