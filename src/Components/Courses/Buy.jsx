import React,{useState,useEffect,useRef} from 'react'
import emailjs from '@emailjs/browser';
import { loadStripe } from '@stripe/stripe-js';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'


let stripePromise;

    const getStripe = () =>{
        if (!stripePromise) {
            stripePromise = loadStripe("pk_live_51MroBpCV1XqGrlRbJMZ8BZ6cFMqZjpa5yCxEknMWc2ioPxrO2V9VhGZm77CMOtYF1vo6hzw85kbC64bJwvIkg2OG00SxxOnm59");
        }

        return stripePromise;
    }
const Buy = () => {
    const [curs,setCurs]=useState(localStorage.getItem("cumparaCurs"));
    const [indexSelectedCourse,setIndexSelectedCourse]=useState(0)
    const [selectedDate,setSelectedDate]=useState(null)
    const form = useRef();
   


    const [pretCursSelectat,setPretCursSelectat]=useState(localStorage.getItem("cumparaCurs"))

    const perioadeCurs=[["29-30 Aprilie","13-14 Mai", "20-21 Mai"],["28 Aprilie","15 Mai"],["28 Aprilie","12 Mai"]] 
      useEffect(()=>{
        if(curs==="Curs De Baza (Avans)")
            {setPretCursSelectat("price_1Ms8gHCV1XqGrlRbYx4Lf8Ue")
          
      }
        else if(curs==="Curs De Baza (Integral)")
            {setPretCursSelectat("price_1MsWj1CV1XqGrlRbci4YtWlH")
    
      }
        else if(curs==="Curs De Baza + Kit Inclus (Integral)")
            {setPretCursSelectat("price_1MsWlfCV1XqGrlRbgWy00YU7")

}
        else if(curs==="Curs De Perfectionare 1 Zi (Avans)")
            {setPretCursSelectat("price_1MsWzkCV1XqGrlRbd7iQpnYi")
      
    }
         else if(curs==="Curs De Perfectionare 1 Zi (Integral)")
            {setPretCursSelectat("price_1MsWoUCV1XqGrlRb70dofstK")

}
        else if(curs==="Curs De Perfectionare 2 Zile (Avans)")
             {setPretCursSelectat("price_1MsiOmCV1XqGrlRbcY0edoc9")

            }
        else if(curs==="Curs De Perfectionare 2 Zile (Integral)")
            {setPretCursSelectat("price_1MsWpOCV1XqGrlRb0dtRQlWZ")

           }
        else if(curs==="Curs VIP De Baza 2 Zile (Avans)")
            {setPretCursSelectat("price_1MsB5TCV1XqGrlRbX7G01gnH")
         
}
        else if(curs==="Curs VIP De Baza 2 Zile (Integral)")
            {setPretCursSelectat("price_1MsWtECV1XqGrlRbgsXhEIve")

        }
        else if(curs==="Curs VIP De Baza 3 Zile (Avans)")
            {setPretCursSelectat("price_1MsX18CV1XqGrlRb08i536NA")

    }
        else if(curs==="Curs VIP De Baza 3 Zile (Integral)")
            {setPretCursSelectat("price_1MsWv7CV1XqGrlRb4eSCbORv")

    }
        else if(curs==="Curs Efecte Speciale 1 Zi (Avans)")
            {setPretCursSelectat("price_1MsB6FCV1XqGrlRbuhnUfQtB")
          
            console.log(indexSelectedCourse)
}
        else if(curs==="Curs Efecte Speciale 1 Zi (Integral)")
            {setPretCursSelectat("price_1MsWwhCV1XqGrlRbdhr200nv")

console.log(indexSelectedCourse)
}
        console.log("pretCursSelect");
      },[curs])

        const item= {
            price: pretCursSelectat,
            quantity: 1,

        }
    
    const checkoutOptions= {
        lineItems: [item],
        mode: "payment",
        successUrl: `${window.location.origin}/success`,
        cancelUrl: `${window.location.origin}/cancel`
    }
    
    const redirectToChekout= async()=>{
        console.log("redirectToCheckout")

        const stripe =await getStripe()
        const {error} = await stripe.redirectToCheckout(checkoutOptions)
        console.log("Stripe checkout error",error)
    }
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_e9isnzl', 'template_z9lx9pb', form.current, 'JBlV6SrZcJJiJKOe2')
          .then((result) => {
             
            redirectToChekout();
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div className='relative w-full h-full flex justify-center items-center py-[10rem] bg-gray-200 z-20 font-montSerrat'>
        <div className='flex flex-col px-[2rem] py-[2rem]  bg-white rounded-[15px] w-[90%] lg:w-[40rem] h-full shadow-xl '>
        <form ref={form} onSubmit={sendEmail} className='flex lg:flex-row flex-col lg:flex-wrap lg:justify-between  w-full '>
            <div className='flex flex-col  my-[.5rem]'>
                <label>Nume</label>
                <input name="user_nume" type="text" className='border-[#0b2a24] p-2 border-[1px] w-full lg:w-[15rem] h-[2rem] text-[14px]' required />
            </div>
            <div className='flex flex-col my-[.5rem]'>
                <label>Prenume</label>
                <input name="user_prenume" type="text" className='border-[#0b2a24] p-2  border-[1px] w-full lg:w-[15rem] h-[2rem] text-[14px]' required />
            </div>
            <div className='flex flex-col my-[.5rem]'>
                <label>Telefon</label>
                <input name="user_telefon" type="text" minLength={10} className='border-[#0b2a24] p-2  border-[1px] w-full lg:w-[15rem] h-[2rem] text-[14px]' required />
            </div>
            <div className='flex flex-col my-[.5rem]'>
                <label>Email</label>
                <input name="user_email" type="email" className='border-[#0b2a24] p-2  border-[1px] w-full lg:w-[15rem] h-[2rem] text-[14px]' required />
            </div>
            
            <div className='flex flex-col my-[.5rem]'>
                <label>Adresa</label>
                <input name="user_adresa" type="text" className='border-[#0b2a24] p-2  border-[1px] w-full lg:w-[15rem] h-[2rem] text-[14px]' required />
            </div>
            
            <div className='flex flex-col my-[.5rem]'>
                <label>Tip Curs</label>
                <select name="tip_curs"  onChange={(e)=>{setCurs(e.target.value); setIndexSelectedCourse(e.target.value==="Curs De Baza (Avans)" ? 0 : e.target.value==="Curs De Baza (Integral)" ? 0 : e.target.value==="Curs De Baza + Kit Inclus (Integral)" ? 0 : e.target.value==="Curs De Perfectionare 1 Zi (Avans)" ? 1 : e.target.value==="Curs De Perfectionare 1 Zi (Integral)" ? 1 : e.target.value==="Curs De Perfectionare 2 Zile (Avans)" ? 1 : e.target.value==="Curs De Perfectionare 2 Zile (Integral)" ? 1 : e.target.value==="Curs VIP De Baza 2 Zile (Avans)" ? -1 : e.target.value==="Curs VIP De Baza 2 Zile (Integral)"?  -1: e.target.value==="Curs VIP De Baza 3 Zile (Avans)"? -1 : e.target.value==="Curs VIP De Baza 3 Zile (Integral)" ?-1: e.target.value==="Curs Efecte Speciale 1 Zi (Avans)" ? 2 : 2 ) }} className='border-[#0b2a24]  border-[1px] w-full lg:w-[15rem] h-[2rem] text-[14px]'   >
                    <option  value="Curs De Baza (Avans)" onClick={()=>setCurs("Curs De Baza (Avans)")}   selected={localStorage.getItem("cumparaCurs")==="Curs De Baza (Avans)" && "selected"}>
                    CURS DE BAZA (AVANS)
                        </option>
                        <option  value="Curs De Baza (Integral)" onClick={()=>setCurs("Curs De Baza (Integral)")} >
                    CURS DE BAZA (INTEGRAL)
                        </option>
                        <option  value="Curs De Baza + Kit Inclus (Integral)" onClick={()=>setCurs("Curs De Baza + Kit Inclus (Integral)")}  >
                    CURS DE BAZA + KIT INCLUS (INTEGRAL)
                        </option>
                        <option value="Curs De Perfectionare 1 Zi (Avans)" onClick={()=>setCurs("Curs De Perfectionare 1 Zi (Avans)")}   selected={localStorage.getItem("cumparaCurs")==="Curs De Perfectionare" && "selected"}>
                    CURS DE PERFECTIONARE 1 ZI (AVANS)
                        </option>
                        <option value="Curs De Perfectionare 1 Zi (Integral)"  onClick={()=>setCurs("Curs De Perfectionare 1 Zi (Integral)")}  >
                    CURS DE PERFECTIONARE 1 ZI (INTEGRAL)
                        </option>
                        <option value="Curs De Perfectionare 2 Zile (Avans)" onClick={()=>setCurs("Curs De Perfectionare 2 Zile (Avans)")}    >
                    CURS DE PERFECTIONARE 2 ZILE (AVANS)
                        </option>
                        <option value="Curs De Perfectionare 2 Zile (Integral)"  onClick={()=>setCurs("Curs De Perfectionare 2 Zile (Integral)")}   >
                    CURS DE PERFECTIONARE 2 ZILE (INTEGRAL)
                        </option>
                        <option value="Curs VIP De Baza 2 Zile (Avans)" onClick={()=>setCurs("Curs VIP De Baza 2 Zile (Avans)")}    selected={localStorage.getItem("cumparaCurs")==="Curs VIP De Baza" && "selected"}>
                    CURS VIP DE BAZA 2 ZILE (AVANS)
                        </option>
                        <option value="Curs VIP De Baza 2 Zile (Integral)" onClick={()=>setCurs("Curs VIP De Baza 2 Zile (Integral)")}  >
                    CURS VIP DE BAZA 2 ZILE (INTEGRAL)
                        </option>
                        <option value="Curs VIP De Baza 3 Zile (Avans)" onClick={()=>setCurs("Curs VIP De Baza 3 Zile (Avans)")}    >
                    CURS VIP DE BAZA 3 ZILE (AVANS)
                        </option>
                        <option value="Curs VIP De Baza 3 Zile (Integral)" onClick={()=>setCurs("Curs VIP De Baza 3 Zile (Integral)")}    >
                    CURS VIP DE BAZA 3 ZILE (INTEGRAL)
                        </option>
                        <option  value="Curs Efecte Speciale 1 Zi (Avans)" onClick={()=>setCurs("Curs Efecte Speciale 1 Zi (Avans)")} selected={localStorage.getItem("cumparaCurs")==="Curs Efecte Speciale" && "selected"}>
                    CURS EFECTE SPECIALE 1 ZI (AVANS)
                        </option>
                        <option  value="Curs Efecte Speciale 1 Zi (Integral)" onClick={()=>setCurs("Curs Efecte Speciale 1 Zi (Integral)")}  >
                    CURS EFECTE SPECIALE 1 ZI (INTEGRAL)
                        </option>
                </select>
            </div>
            <div className='flex flex-col my-[.5rem]'>
                <label>{indexSelectedCourse===-1 ? "Alege ziua in care vrei sa participi": "Perioada Cursului"}</label>
               
                <select name="tip_curs"   className={`border-[#0b2a24]  border-[1px] w-full lg:w-[15rem] h-[2rem] text-[14px] ${indexSelectedCourse===-1 && "hidden"}`}   >
                    {
                               
                              indexSelectedCourse>=0 && perioadeCurs[indexSelectedCourse].map((val)=>{
                                            return <><option>
                                                    {val}
                                                </option></>}
                                     )
                       
                    }
                   
                </select>
                <div onClick={()=>console.log(selectedDate)} className={` h-[35px] ${indexSelectedCourse !==-1 && "hidden"}`}>
                <DatePicker className={`border-[#0b2a24] p-2  border-[1px] w-full lg:w-[15rem] h-[2rem] text-[14px] `} selected={selectedDate} onChange={(date) => setSelectedDate(date)} formatDate="yyyy/MM/dd" minDate={new Date()} filterDate={date=>date.getDay() !=0} />
                </div>
            </div>
            <div className='flex flex-col w-full  my-[.5rem]'>
                <label>Mentiuni Speciale</label>
                <textarea name="mentiuni_speciale" type="text" className='border-[#0b2a24] border-[1px] p-2 w-full lg:w-[36rem] h-[10rem]'  />
            </div>
                    
       
        <div className='flex flex-col items-center w-full mt-[2rem]'>
                <h3 className=' text-[18px] lg:text-[24px] font-bold'>COMANDA TA:</h3>
                <div className='relative flex justify-between w-full font-bold text-[20px] mt-[2rem] '>
                    <h4>Produs</h4>
                    <h4 className='mb-[.5rem]'>Total</h4>
                    <span className='absolute bottom-0 bg-black opacity-[15%] w-full h-[1px]'/>
                </div>
                <div className='flex justify-between w-full font-bold mt-[.5rem]'>
                    <h4>Avans {curs}</h4>
                    <h4>300 lei</h4>
                </div>
                <h4>*Plata online prin card bancar</h4>
                <button  value="Send" type="submit" className='font-bold px-[3rem] py-[1rem] mt-[1rem] bg-[#0b2a24] rounded-[8px] text-white'>PLASEAZA COMANDA</button>
        </div>
        <input name="data_vip" type="text" value={selectedDate} className='hidden' />
        </form>
        </div>
    </div>
  )
}

export default Buy