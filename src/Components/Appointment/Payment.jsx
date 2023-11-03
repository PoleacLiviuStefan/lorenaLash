import {useEffect, useState} from 'react'
import {loadStripe} from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from './CheckoutForm'
function Payment({setPaymentStatusSecond}){
    const SERVER_IP = "http://localhost:5005";
    const [stripePromise,setStripePromise]=useState(null);
    const [clientSecret,setClientSecret]=useState("");
    const [successfull,setSuccessfull]=useState(false);

    useEffect(()=>{
            fetch(SERVER_IP + "/api/config").then(async (r)=>{
                const {publishableKey} = await r.json();
                
                setStripePromise(loadStripe(publishableKey));
            })
    },[])

    useEffect(()=>{
            fetch(SERVER_IP + "/api/create-payment-intent",{
                method: "POST",
                body: JSON.stringify({})
            }).then(async (r)=>{
                var { clientSecret } = await r.json();
                setClientSecret(clientSecret);

            })
    },[])

    const setPaymentStatus= (valueStatus)=>{
        setSuccessfull(valueStatus);
        setPaymentStatusSecond(valueStatus);
    }

    return (
        <>
        { successfull ? <p className='font-bold'>Plata a fost realizata cu success</p> 
            :
            <>
            <h1 className=' w-[20rem] leading-5 '>Plateste avansul de 100 lei acum si ne vedem la programare la ora selectata</h1>
            {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm setPaymentStatus={setPaymentStatus} />
        </Elements>
     
      )}
      </>
            }
        </>
    )
}

export default Payment;