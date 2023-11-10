import {useEffect, useState,useRef} from 'react'
import {loadStripe} from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from './CheckoutForm';
import emailjs from "@emailjs/browser";

function Payment({service,professional,selectedData,selectedHour,setPaymentStatusSecond,handleCustomerName,handlePhoneNumber}){
  const SERVER_IP = "https://backend-production-b11c.up.railway.app"; //de live


    const form = useRef();
    const isDigitOrBackspace = (input) => /^[0-9\b]$/.test(input);




  
    return (
        <>
        <div className="flex flex-col items-center  w-full">
            <div className='flex flex-col w-[17rem] lg:w-[23rem]'>
        <p className='w-full text-left leading-5'>Introduceti mai jos numarul de telefon si numele complet, apoi apasati pe confirm</p>
           <div className='flex flex-col gap-2'>
            <form
            ref={form}
              onSubmit={(e)=>handleForm(e)}
              className="mt-[.8rem] lg:mt-[1.3rem] flex flex-col gap-2 lg:gap-4 w-full "
            >
            
              
                <input
                type="text"
                name="phoneNumber"
                value={phoneNumber}
                className="hidden "
 
              />
               <input
                type="text"
                name="service"
                value={service}
                className="hidden "
 
              />
                 <input
                type="text"
                name="profesionist"
                value={professional}
                className="hidden "
 
              />
                  <input
                type="text"
                name="date"
                value={selectedData}
                className="hidden "
 
              />
                      <input
                type="text"
                name="hour"
                value={selectedHour}
                className="hidden "
 
              />
    
           <div className="flex flex-col items-start">
                <input
                  type="text"
                  minLength={8}
                  maxLength={15}
                  placeholder="Numar de telefon ex: +40712345689"
                  value={phoneNumber}
                  onChange={(e) => {
                    if (
                      isDigitOrBackspace(
                        e.target.value[e.target.value.length - 1]
                      ) ||
                      e.target.value === ""
                    )
                      setPhoneNumber(e.target.value);
                      handlePhoneNumber(e.target.value);
                  }}
                  className="mt-2 p-2 rounded-[8px] outline-green-500 border-[1px] border-gray-500 w-full"
                  required
                />
                <p className="mt-2 text-left">
                  Exemplu: +40712345678 (prefixul trebuie inclus obligatoriu)
                </p>
                
              </div>
           <input
        type="text"
        name="cardholder-name"
        placeholder="Nume si prenume"
        className="p-2 rounded-[8px] outline-green-500 border-[1px] border-gray-500 w-full"
        value={clientName}
        onChange={(e) => {setClientName(e.target.value); handleCustomerName(e.target.value)}}

      />
            <button
            type="submit"
                className={`mt-[.5rem] lg:mt-[1rem] font-montSerrat   text-[12px] lg:text-[16px] w-[5.5rem] lg:w-[8rem] h-[2rem] lg:h-[2.5rem] rounded-[8px] font-bold  ${appearPayment ? "bg-transparent text-green-500":"bg-green-500 hover:bg-green-600 transition ease-in-out duration-300 text-white"}`}
              >
               {appearPayment ? "Confirmat": "Confirm"}
              </button>
              </form>
              </div>
      </div>
      </div>
        { successfull ? <p className='font-bold'>Plata a fost realizata cu success</p> 
            :
            <>
            <h1 className='mt-4 w-[20rem] leading-5 '>Plateste avansul de 100 lei acum si ne vedem la programare la ora selectata</h1>
            
            {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>

          <CheckoutForm setPaymentStatus={setPaymentStatus}  />

        </Elements>
     
      )}
      </>
            }
        </>
    )
}

export default Payment;