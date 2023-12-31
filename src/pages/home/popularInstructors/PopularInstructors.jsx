import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const PopularInstructors = () => {
  const [classesData, setClassesData] = useState([]);

  useEffect(() => {
    fetch("https://crafted-shots-server.vercel.app/alldata")
      .then((res) => res.json())
      .then((data) => setClassesData(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <section className="my-container">
        <h2 className="text-4xl tracking-widest font-bold text-center mb-6">
          Experienced Photography Instructors
        </h2>
        <p className="tracking-widest font-medium text-center mb-10 max-w-4xl mx-auto">
          Meet our esteemed and popular instructors who bring a wealth of
          knowledge and expertise to our photography classes. Our Popular
          Instructors section showcases the talented individuals who have earned
          acclaim for their skillful instruction and ability to inspire. Join a
          class led by these popular instructors and embark on a transformative
          learning journey in photography.
        </p>

        <div className="lg:grid gap-2 lg:grid-cols-3 mt-10 shadow-2xl">
          {classesData.slice(0, 6).map((data) => (
            <div key={data._id} className="w-full">
              <Fade>
                <div className="w-full lg:w-96  bg-base-100 mx-auto">
                  <div className="card-body">
                    <img
                      className="h-96 rounded-xl"
                      src={data.instructorImage}
                      alt=""
                    />
                    <h2 className="text-center text-2xl font-bold tracking-wider">
                      {data.instructorName}
                    </h2>
                    <p className="text-center tracking-wider">
                      {data.instructorTitle}
                    </p>
                  </div>
                </div>
              </Fade>
            </div>
          ))}
        </div>
        <Link to={"instructors"} className="flex justify-center mt-8">
          <button className="my-btn">All Instructors</button>
        </Link>
      </section>
    </div>
  );
};

export default PopularInstructors;
