import {useState,useEffect} from 'react'
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';

const CheckoutForm = () => {
    
    const [clientSecret, setClientSecret] = useState('');
    const stripePromise= loadStripe("pk_live_51MroBpCV1XqGrlRbJMZ8BZ6cFMqZjpa5yCxEknMWc2ioPxrO2V9VhGZm77CMOtYF1vo6hzw85kbC64bJwvIkg2OG00SxxOnm59")
    useEffect(() => {
      // Create a Checkout Session as soon as the page loads
      fetch("/checkout-session", {
        method: "POST",
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }, []);
  
    return (
      <div className="flex justify-center w-full">
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