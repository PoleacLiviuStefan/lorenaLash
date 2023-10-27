import {useState,useEffect} from 'react'
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  const SERVER_IP = "http://localhost:5005";
    const [clientSecret, setClientSecret] = useState('');
    const stripePromise= loadStripe("pk_live_51MroBpCV1XqGrlRbJMZ8BZ6cFMqZjpa5yCxEknMWc2ioPxrO2V9VhGZm77CMOtYF1vo6hzw85kbC64bJwvIkg2OG00SxxOnm59")
    useEffect(() => {
      // Create a Checkout Session as soon as the page loads
      fetch(SERVER_IP + '/api/checkout-session', {
        method: "POST",
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }, []);
  
    return (
      <div className="flex justify-center w-[20rem] h-[20rem]">
        {clientSecret && (
          <EmbeddedCheckoutProvider
            stripe={stripePromise}
            options={{clientSecret}}
          >
            <EmbeddedCheckout />
          </EmbeddedCheckoutProvider>
        )}
      </div>
    )
  }

  export default CheckoutForm;