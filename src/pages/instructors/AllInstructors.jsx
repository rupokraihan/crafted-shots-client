import React, { useContext, useEffect, useState } from "react";
import LoadingSpinner from "../../components/LoadingSpinner";
import { AuthContext } from "../../providers/AuthProvider";
import avatar from "../../assets/avatar/PngItem_785792.png"

const AllInstructors = () => {
  const [instructorsData, setInstructorsData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { user} = useContext(AuthContext);


  useEffect(() => {
    fetch("http://localhost:5000/alldata")
      .then((res) => res.json())

      .then((data) => {
        const approvedInstructors = data.filter(
          (classes) => classes.status === "approved"
        );
        setInstructorsData(approvedInstructors);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <div className="pt-40 px-10">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <h2 className="text-4xl tracking-widest font-bold text-center">
            Our All Instructors
          </h2>
          <div className=" my-container lg:grid grid-cols-3 gap-8">
            {instructorsData.map((data) => (
              <div
                key={data._id}
                className="flex bg-amber-100 rounded-xl shadow-lg mb-4"
              >
                <div>
                  <img
                    className="h-64 w-44  rounded-xl"
                    src={data.instructorImage ? data.instructorImage : avatar}
                  />
                </div>
                <div className="ml-4 mt-8">
                  <h2 className="text-xl font-bold">{data.instructorName}</h2>
                  <h5 className="mb-4 font-lg text-gray-500">
                    {data.instructorTitle}
                  </h5>
                  <p>
                    Email: <span className="text-blue-500">{data.email}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AllInstructors;
