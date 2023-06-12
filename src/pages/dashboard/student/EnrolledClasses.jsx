import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const EnrolledClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const [enrolledClasses, setEnrolledClasses] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      axiosSecure.get(`payments?email=${user.email}`).then((res) => {
        setEnrolledClasses(res.data);
      });
    }
  }, [axiosSecure, user]);

  // date formate
  const formatEnrolledDate = (dateString) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <div>
      <h2 className="text-5xl text-center mb-12">Enrolled Classes</h2>

      <div className="overflow-x-auto">
        <table className="table">
          <thead className="text-lg font-semibold font-serif tracking-wider text-center">
            <tr>
              <th>#</th>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Instructor</th>
              <th>Enrolled Date</th>
            </tr>
          </thead>
          <tbody className="font-medium text-gray-700 text-center tracking-wider">
            {enrolledClasses.map((classItem, index) => (
              <tr key={classItem._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={classItem.image} alt="Class" />
                    </div>
                  </div>
                </td>
                <td>{classItem.className}</td>
                <td>{classItem.instructor}</td>
                <td>{formatEnrolledDate(classItem.date)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnrolledClasses;
