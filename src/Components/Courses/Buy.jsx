import React from 'react'

const Buy = () => {
  return (
    <div className='relative w-full h-full flex justify-center items-center py-[10rem] bg-gray-200 z-20 font-montSerrat'>
        <div className='flex flex-col px-[2rem] py-[2rem]  bg-white rounded-[15px] w-[90%] lg:w-[40rem] h-full shadow-xl '>
        <form className='flex lg:flex-row flex-col lg:flex-wrap lg:justify-between  w-full '>
            <div className='flex flex-col'>
                <label>Nume</label>
                <input type="text" className='border-[#0b2a24] border-[1px] w-full lg:w-[15rem] h-[2rem] text-[14px]' required />
            </div>
            <div className='flex flex-col'>
                <label>Prenume</label>
                <input type="text" className='border-[#0b2a24] border-[1px] w-full lg:w-[15rem] h-[2rem] text-[14px]' required />
            </div>
            <div className='flex flex-col'>
                <label>Telefon</label>
                <input type="text" className='border-[#0b2a24] border-[1px] w-full lg:w-[15rem] h-[2rem] text-[14px]' required />
            </div>
            <div className='flex flex-col'>
                <label>Email</label>
                <input type="email" className='border-[#0b2a24] border-[1px] w-full lg:w-[15rem] h-[2rem] text-[14px]' required />
            </div>
            
            <div className='flex flex-col'>
                <label>Adresa</label>
                <input type="text" className='border-[#0b2a24] border-[1px] w-full lg:w-[15rem] h-[2rem] text-[14px]' required />
            </div>
            <div className='flex flex-col'>
                <label>Tip Curs</label>
                <select   className='border-[#0b2a24] border-[1px] w-full lg:w-[15rem] h-[2rem] text-[14px]'   >
                    <option     selected={localStorage.getItem("cumparaCurs")==="Curs De Baza" && "selected"}>
                    CURS DE BAZA (AVANS)
                        </option>
                        <option     selected={localStorage.getItem("cumparaCurs")==="Curs De Perfectionare" && "selected"}>
                    CURS DE PERFECTIONARE (AVANS)
                        </option>
                        <option     selected={localStorage.getItem("cumparaCurs")==="Curs VIP De Baza" && "selected"}>
                    CURS VIP DE BAZA (AVANS)
                        </option>
                        <option    selected={localStorage.getItem("cumparaCurs")==="Curs Efecte Speciale" && "selected"}>
                    CURS EFECTE SPECIALE (AVANS)
                        </option>
                </select>
            </div>
            <div className='flex flex-col w-full'>
                <label>Mentiuni Speciale</label>
                <textarea type="text" className='border-[#0b2a24] border-[1px] w-full lg:w-[35rem] h-[10rem]' required />
            </div>
        </form>
       
        <div className='flex flex-col items-center mt-[2rem]'>
                <h3 className=' text-[18px] lg:text-[24px] font-bold'>COMANDA TA:</h3>
        </div>
        </div>
    </div>
  )
}

export default Buy