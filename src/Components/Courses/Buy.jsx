import React,{useState,useEffect} from 'react'

const Buy = () => {
    const [curs,setCurs]=useState(localStorage.getItem("cumparaCurs"));
    
  return (
    <div className='relative w-full h-full flex justify-center items-center py-[10rem] bg-gray-200 z-20 font-montSerrat'>
        <div className='flex flex-col px-[2rem] py-[2rem]  bg-white rounded-[15px] w-[90%] lg:w-[40rem] h-full shadow-xl '>
        <form className='flex lg:flex-row flex-col lg:flex-wrap lg:justify-between  w-full '>
            <div className='flex flex-col  my-[.5rem]'>
                <label>Nume</label>
                <input type="text" className='border-[#0b2a24] border-[1px] w-full lg:w-[15rem] h-[2rem] text-[14px]' required />
            </div>
            <div className='flex flex-col my-[.5rem]'>
                <label>Prenume</label>
                <input type="text" className='border-[#0b2a24] border-[1px] w-full lg:w-[15rem] h-[2rem] text-[14px]' required />
            </div>
            <div className='flex flex-col my-[.5rem]'>
                <label>Telefon</label>
                <input type="text" className='border-[#0b2a24] border-[1px] w-full lg:w-[15rem] h-[2rem] text-[14px]' required />
            </div>
            <div className='flex flex-col my-[.5rem]'>
                <label>Email</label>
                <input type="email" className='border-[#0b2a24] border-[1px] w-full lg:w-[15rem] h-[2rem] text-[14px]' required />
            </div>
            
            <div className='flex flex-col my-[.5rem]'>
                <label>Adresa</label>
                <input type="text" className='border-[#0b2a24] border-[1px] w-full lg:w-[15rem] h-[2rem] text-[14px]' required />
            </div>
            <div className='flex flex-col my-[.5rem]'>
                <label>Tip Curs</label>
                <select  onChange={(e)=>setCurs(e.target.value)} className='border-[#0b2a24] border-[1px] w-full lg:w-[15rem] h-[2rem] text-[14px]'   >
                    <option  value="Curs De Baza"   selected={localStorage.getItem("cumparaCurs")==="Curs De Baza" && "selected"}>
                    CURS DE BAZA (AVANS)
                        </option>
                        <option value="Curs De Perfectionare"    selected={localStorage.getItem("cumparaCurs")==="Curs De Perfectionare" && "selected"}>
                    CURS DE PERFECTIONARE (AVANS)
                        </option>
                        <option value="Curs VIP De Baza" onClick={()=>setCurs("Curs VIP De Baza")}    selected={localStorage.getItem("cumparaCurs")==="Curs VIP De Baza" && "selected"}>
                    CURS VIP DE BAZA (AVANS)
                        </option>
                        <option  value="Curs Efecte Speciale"  selected={localStorage.getItem("cumparaCurs")==="Curs Efecte Speciale" && "selected"}>
                    CURS EFECTE SPECIALE (AVANS)
                        </option>
                </select>
            </div>
            <div className='flex flex-col w-full  my-[.5rem]'>
                <label>Mentiuni Speciale</label>
                <textarea type="text" className='border-[#0b2a24] border-[1px] w-full lg:w-[36rem] h-[10rem]' required />
            </div>
        </form>
       
        <div className='flex flex-col items-center mt-[2rem]'>
                <h3 className=' text-[18px] lg:text-[24px] font-bold'>COMANDA TA:</h3>
                <div className='relative flex justify-between w-full font-bold text-[20px] mt-[2rem] '>
                    <h4>Produs</h4>
                    <h4 className='mb-[.5rem]'>Total</h4>
                    <span className='absolute bottom-0 bg-black opacity-[15%] w-full h-[1px]'/>
                </div>
                <div className='flex justify-between w-full font-bold mt-[.5rem]'>
                    <h4>Avans {curs}</h4>
                    <h4>500 lei</h4>
                </div>
                <h4>*Plata online prin card bancar</h4>
                <button className='font-bold px-[3rem] py-[1rem] mt-[1rem] bg-[#0b2a24]  text-white'>PLASEAZA COMANDA</button>
        </div>
        </div>
    </div>
  )
}

export default Buy