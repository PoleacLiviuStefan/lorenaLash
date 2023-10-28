import {useEffect, useState} from 'react'
import {loadStripe} from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from './CheckoutForm'
function Payment(props){
    const SERVER_IP = "http://localhost:5005";
    const [stripePromise,setStripePromise]=useState(null);
    const [clientSecret,setClientSecret]=useState("");

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


    return (
        <>
            <h1>React Stripe and the Payment Element</h1>
            {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
        </>
    )
}

export default Payment;