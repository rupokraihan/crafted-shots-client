import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import LoadingSpinner from "../../../components/LoadingSpinner";
import { Link } from "react-router-dom";

const MyClasses = () => {
  const { user } = useContext(AuthContext);

  const [classes, setClasses] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/alldata`)
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  const getClassStatusColor = (status) => {
    switch (status) {
      case "approved":
        return "bg-green-400 py-4 px-3";
      case "pending":
        return "bg-yellow-300 py-4 px-3";
      case "declined":
        return "bg-red-500 py-4 px-3";
      
    }
  };

  const myClasses = classes.filter((data) => data?.email === user?.email);

  return (
    <div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr className="text-lg font-semibold font-serif tracking-wider">
                  <th>#</th>
                  <th>Class Image</th>
                  <th>Class Name</th>
                  <th>Total Enrolled</th>
                  <th>Course Fee</th>
                  <th>Status</th>
                  <th>Action</th>
                  <th>Feedback</th>
                </tr>
              </thead>
              <tbody>
                {myClasses.map((classItem, index) => (
                  <tr
                    className="text-lg font-sans tracking-wider"
                    key={classItem._id}
                  >
                    <td>{index + 1}</td>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={classItem.classImage} alt="Class" />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="font-bold">{classItem.classTitle}</div>
                    </td>
                    <td>{classItem.availableSeats}</td>
                    <td>{classItem.courseFee} $</td>
                    <td>
                      <div
                        className={`badge badge-lg ${getClassStatusColor(
                          classItem.status
                        )}`}
                      >
                        <span className="p-2 font-bold">
                          {classItem.status}
                        </span>
                      </div>
                    </td>
                    <td>
                      <Link to={`updateclass/${classItem._id}`}>
                        <button className="badge badge-warning badge-lg">
                          <span className="p-2 font-bold">Update</span>
                        </button>
                      </Link>
                    </td>
                    <td>feedback</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyClasses;
