import React, { useEffect, useState } from "react";
import LoadingSpinner from "../../components/LoadingSpinner";

const AllInstructors = () => {
  const [instructorsData, setInstructorsData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/alldata")
      .then((res) => res.json())
      .then((data) => setInstructorsData(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="pt-40 px-10">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className=" my-container grid grid-cols-3 gap-8">
          {instructorsData.map((data) => (
            <div key={data._id} className="flex bg-base-100 shadow-xl">
              <div>
                <img
                  className="h-64 w-44 rounded-lg"
                  src={data.instructorImage}
                  alt="Instructor"
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
      )}
    </div>
  );
};

export default AllInstructors;
