import React, { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../providers/AuthProvider";

const PaymentHistory = () => {
  const [axiosSecure] = useAxiosSecure();
  const [paymentHistory, setPaymentHistory] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      axiosSecure.get(`payments?email=${user.email}`).then((res) => {
        setPaymentHistory(res.data);
      });
    }
  }, [axiosSecure, user]);

  // Format the time
  const formatTime = (timeString) => {
    const options = {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    return new Date(timeString).toLocaleString(undefined, options);
  };

  return (
    <div>
      <h2 className="text-5xl text-center mb-12">Payment History</h2>

      {paymentHistory.map((payment) => (
        <div key={payment._id}>
          <div className="bg-amber-50 p-6 mb-4">
            <p className="text-lg font-semibold">
              Transaction ID:
              <span className="font-medium tracking-wider ml-4 text-red-600">
                {payment.transactionId}
              </span>
            </p>
            <p className="text-lg font-semibold">
              Email:
              <span className="font-medium tracking-wider ml-6">
                {payment.email}
              </span>
            </p>
            <p className="text-lg font-semibold">
              className:
              <span className="font-medium tracking-wider ml-6">
                {payment.className}
              </span>
            </p>
            <p className="text-lg font-semibold">
              Course Fee:
              <span className="font-medium tracking-wider ml-6">
                {payment.courseFee} $
              </span>
            </p>
            <p className="text-lg font-semibold">
              Instructor Name:
              <span className="font-medium tracking-wider ml-6">
                {payment.instructor}
              </span>
            </p>
            <p className="text-lg font-semibold">
              Payment Time:
              <span className=" tracking-wider ml-6 ">
                {formatTime(payment.date)}
              </span>
            </p>
            <p className="text-lg font-semibold">
              Payment Status:
              <span className=" tracking-wider ml-6 text-green-500 font-bold">
                {payment.enrolled}
              </span>
            </p>
          </div>
          <hr className="mb-4" />
        </div>
      ))}
    </div>
  );
};

export default PaymentHistory;
