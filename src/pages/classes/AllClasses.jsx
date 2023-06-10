import React, { useEffect, useState } from "react";
import LoadingSpinner from "../../components/LoadingSpinner";

const AllClasses = () => {
  const [classesData, setClassesData] = useState([]);
  const [isLoading, setLoading] = useState(true);

   
   

  useEffect(() => {
    fetch("http://localhost:5000/alldata")
      .then((res) => res.json())
      
      .then((data) => {const approvedClass = data.filter(
      (classes) => classes.status === "approved"
      )
        setClassesData(approvedClass)
      }
      
    )
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);



  return (
    <div className="pt-40 px-10">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div>
          <div className="overflow-x-auto">
            <table className="table ">
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
                      <button className="badge badge-warning badge-lg">
                        <span className="p-2 font-bold">Enroll</span>
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
};

export default AllClasses;
