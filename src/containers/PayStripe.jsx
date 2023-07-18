// import React, { useEffect, useRef, useState } from "react";
// import {Elements, PaymentElement} from '@stripe/react-stripe-js';
// import {loadStripe} from '@stripe/stripe-js';

// const stripePromise = loadStripe('pk_test_51NTe4BAJmCyk4wlWa06684Cs9Mq8JDeHZaanvjCaV1a6o0qrBi73TEqiwaEueORehl9VlWS8G0GRBBKtdacgxblt002bJJ3jEx');

// const PayStripe = () => {

//   const options = {
//     // passing the client secret obtained from the server
//     clientSecret: '{{CLIENT_SECRET}}',
//   };

//   return (
//     // <div className="PayStripe_div">
//     // </div>
//     <Elements stripe={stripePromise} options={options}>
//       <form>
//       <PaymentElement />
//       <button>Submit</button>
//     </form>
//     </Elements>
//   );
// };

// export default PayStripe;
