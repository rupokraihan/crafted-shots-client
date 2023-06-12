import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";

const AllClasses = () => {
  const [classesData, setClassesData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [axiosSecure] = useAxiosSecure();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  useEffect(() => {
    fetch("https://crafted-shots-server.vercel.app/alldata")
      .then((res) => res.json())
      .then((data) => {
        const approvedClass = data.filter(
          (classes) => classes.status === "approved"
        );
        setClassesData(approvedClass);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const handleSelectClass = (classData) => {
    if (user && user.email) {
      classData.selectedClass = "selected";
      const selectItem = {
        image: classData.classImage,
        email: user.email,
        classId: classData._id,
        title: classData.classTitle,
        instructor: classData.instructorName,
        availableSeats: classData.availableSeats,
        courseFee: classData.courseFee,
        selectedClass: classData.selectedClass,
      };

      axiosSecure.post("/selectedclass", selectItem).then((classData) => {
        if (classData.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Class selected successfully",
            showConfirmButton: false,
            timer: 700,
          });
        }
      });
    } else {
      Swal.fire({
        position: "center",
        icon: "question",
        title: "You have to log in first to select a class",
        showConfirmButton: false,
        timer: 1000,
      }).then(() => {
        navigate("/login");
      });
    }
  };

  return (
    <div className="pt-40 px-10">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div>
          <h2 className="text-4xl tracking-widest font-bold text-center mb-16">
            Our All Courses
          </h2>
          <div className="overflow-x-auto mb-16">
            <table className="table">
              <thead>
                <tr className="text-lg font-semibold font-serif tracking-wider text-center">
                  <th>#</th>
                  <th>Class Image</th>
                  <th>Class Name</th>
                  <th>Available seats</th>
                  <th>Instructor Name</th>
                  <th>Course Fee</th>
                  <th>Enroll</th>
                </tr>
              </thead>
              <tbody>
                {classesData.map((data, index) => (
                  <tr
                    className={`text-lg font-sans tracking-wider text-center ${
                      data.availableSeats === 0 ? "bg-red-200" : ""
                    }`}
                    key={data._id}
                  >
                    <td>{index + 1}</td>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={data.classImage} alt="Class" />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="font-bold">{data.classTitle}</div>
                    </td>
                    <td>{data.availableSeats}</td>
                    <td className="font-semibold">
                      {data.instructorName} <br />
                      <span className="text-sm font-thin">
                        {data.instructorTitle}
                      </span>
                    </td>
                    <td>{data.courseFee} $</td>
                    <td>
                      {data.availableSeats === 0 || isAdmin || isInstructor ? (
                        <button
                          disabled
                          className="badge badge-lg bg-red-500 text-gray-300"
                        >
                          Select
                        </button>
                      ) : (
                        <button
                          onClick={() => handleSelectClass(data)}
                          className="badge badge-lg bg-green-500"
                        >
                          Select
                        </button>
                      )}
                    </td>
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

export default AllClasses;
