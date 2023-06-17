import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../providers/AuthProvider";

const Checkout = ({ courseFee, paymentClass }) => {
  const [axiosSecure] = useAxiosSecure();
  const stripe = useStripe();
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const { user } = useContext(AuthContext);
  const elements = useElements();
  const [cardError, setCardError] = useState("");

  useEffect(() => {
    if (courseFee > 0) {
      axiosSecure.post("/create-payment-intent", { courseFee }).then((res) => {
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [axiosSecure, courseFee]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements || !clientSecret) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "unknown",
            email: user?.email || "unknown",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
    }

    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      const payment = {
        email: user?.email,
        date: new Date(),
        transactionId: paymentIntent.id,
        courseFee: paymentClass.courseFee,
        image: paymentClass.image,
        className: paymentClass.title,
        classId: paymentClass._id,
        selectedClassId: paymentClass.classId,
        instructor: paymentClass.instructor,
        enrolled: paymentIntent.status,
      };
      console.log(payment);

      
      axiosSecure.post("/payments", payment).then((res) => {
        if (res.data.insertedId) {
          console.log("Payment was successfully", res.data.insertedId);
        }
      });
    }
  };

  return (
    <>
      {transactionId && (
        <p className="text-center text-green-600 my-5">
          Transaction completed by ID : {transactionId}
        </p>
      )}
      {cardError && (
        <p className="text-center text-red-600 my-5">{cardError}</p>
      )}
      <form className="max-w-screen-sm mx-auto m-6" onSubmit={handleSubmit}>
        <CardElement
          className="border-2 border-gray-300 shadow-md p-4 bg-gray-50"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#272522",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="flex justify-center">
          <button
            className="bg-amber-600 px-4 mt-4 text-white font-semibold p-1 rounded-md border-b-4 border-amber-600 hover:bg-zinc-400 "
            type="submit"
            disabled={!stripe}
          >
            Pay
          </button>
        </div>
      </form>
      {cardError && <p className="text-red-700 text-center">{cardError}</p>}
    </>
  );
};

export default Checkout;
