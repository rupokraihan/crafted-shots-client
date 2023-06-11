import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";

const AllClasses = () => {
  const [classesData, setClassesData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [selectedClasses, setSelectedClasses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/alldata")
      .then((res) => res.json())
      .then((data) => {
        const approvedClass = data.filter((classes) => classes.status === "approved");
        setClassesData(approvedClass);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const handleSelectClass = (classId) => {
    if (!user) {
      toast("You have to log in first to select a class");
      navigate("/login");
      return;
    }
    const isSelected = selectedClasses.includes(classId);

    if (isSelected) {
      const updatedClasses = selectedClasses.filter((id) => id !== classId);
      setSelectedClasses(updatedClasses);
    } else {
      setSelectedClasses([...selectedClasses, classId]);
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
          <div className="overflow-x-auto ">
            <table className="table">
              <thead>
                <tr className="text-lg font-semibold font-serif tracking-wider">
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
                    className="text-lg font-sans tracking-wider"
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
                      <button
                        className={`badge badge-lg ${
                          selectedClasses.includes(data._id)
                            ? "badge-success"
                            : "badge-warning"
                        }`}
                        onClick={() => handleSelectClass(data._id)}
                      >
                        <span className="p-2 font-bold">
                          {selectedClasses.includes(data._id)
                            ? "Selected"
                            : "Select"}
                        </span>
                      </button>
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
}

export default AllClasses;

