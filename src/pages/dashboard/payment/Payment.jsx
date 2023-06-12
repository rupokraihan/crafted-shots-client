import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import Checkout from './Checkout';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router-dom';
import useMyclass from '../../../hooks/useMYCLass';



const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  const { id } = useParams();
  const [myClasses] = useMyclass();
  const paymentClass = myClasses?.find((payClass) => payClass?._id === id);
  const courseFee = paymentClass?.courseFee;
  return (
    <div>
      <h1>Payment page</h1>
      <Elements stripe={stripePromise}>
        <Checkout courseFee={courseFee} paymentClass={paymentClass}></Checkout>
      </Elements>
    </div>
  );
};

export default Payment;