import React, { useEffect, useRef, useState } from "react";
import {Elements, PaymentElement, useStripe, useElements, PaymentRequestButtonElement} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51NTe4BAJmCyk4wlWa06684Cs9Mq8JDeHZaanvjCaV1a6o0qrBi73TEqiwaEueORehl9VlWS8G0GRBBKtdacgxblt002bJJ3jEx');

const PayStripe = () => {

//   const options = {
//     // passing the client secret obtained from the server
//     // clientSecret: 'pi_1GszmX2eZvKYlo2C4nWcoFgP_secret_8V7D8lXJEtc0T8fxYmAoL9jDg',
//   };

  const options = {
    mode: 'payment',
    amount: 1099,
    currency: 'usd',
    layout: {
        type: 'tabs',
        defaultCollapsed: false,
      },
    // Fully customizable with appearance API.
    appearance: {
      /*...*/
      theme: 'night',
      labels: 'floating',
      variables: {
        spacingGridRow : "20px"
      }
    },
  };

  return (
    <div className="PayStripe_div">
        <Elements stripe={stripePromise} options={options}>
            <CheckoutForm />
        </Elements>
    </div>
  );
};

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
  
    const [errorMessage, setErrorMessage] = useState(null);
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      if (elements == null) {
        return;
      }
  
      // Trigger form validation and wallet collection
      const {submitError} = await elements.submit();
      if (submitError) {
        // Show error to your customer
        setErrorMessage(submitError.message);
        return;
      }
  
      // Create the PaymentIntent and obtain clientSecret from your server endpoint
      const res = await fetch('/create-intent', {
        method: 'POST',
      });
  
      const {client_secret: clientSecret} = await res.json();
  
      const {error} = await stripe.confirmPayment({
        //`Elements` instance that was used to create the Payment Element
        elements,
        clientSecret,
        confirmParams: {
          return_url: 'https://example.com/order/123/complete',
        },
      });
  
      if (error) {
        // This point will only be reached if there is an immediate error when
        // confirming the payment. Show error to your customer (for example, payment
        // details incomplete)
        setErrorMessage(error.message);
      } else {
        // Your customer will be redirected to your `return_url`. For some payment
        // methods like iDEAL, your customer will be redirected to an intermediate
        // site first to authorize the payment, then redirected to the `return_url`.
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        {/* <AddressElement /> */}
        <PaymentElement />
        <button className="pay_button" type="submit" disabled={!stripe || !elements}>
          Pay
        </button>
        {/* <PaymentRequestButtonElement /> */}
        {/* Show error message to your customers */}
        {errorMessage && <div>{errorMessage}</div>}
      </form>
    );
  };

export default PayStripe;
