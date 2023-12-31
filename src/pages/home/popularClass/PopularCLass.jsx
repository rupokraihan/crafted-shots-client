import React, { useEffect, useState } from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";


const PopularCLass = () => {
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
          Popular Photography Courses
        </h2>
        <p className="tracking-widest font-medium text-center mb-10 max-w-4xl mx-auto">
          "Discover our most popular photography classes that have captivated
          students and garnered rave reviews. Our Popular Classes section
          features a curated selection of courses designed to cater to diverse
          interests and skill levels. Explore our Popular Classes section to
          find the perfect course to unleash your creativity and elevate your
          photography skills to new heights."
        </p>

        <div className="lg:grid gap-8 lg:grid-cols-3 mt-10 ">
          {classesData.slice(0, 6).map((data) => (
            <div key={data._id}>
              <Fade>
                <div className="card w-full lg:w-96 h-96 mb-4 bg-base-100 shadow-xl image-full mx-auto">
                  <figure>
                    <img src={data.classImage} />
                  </figure>
                  <div className="card-body mt-10">
                    <h2 className="card-title text-amber-400 font-bold tracking-wider text-2xl">
                      {data.classTitle}
                    </h2>
                    <div className="mt-2">
                      {data.classDescription.slice(0, 130)}... <br />
                      <div className="mt-2 flex gap-3 text-amber-200 tracking-wider items-center font-bold">
                        Learn More
                        <ArrowLongRightIcon className="w-8" />
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          ))}
        </div>
        <Link to={"classes"} className="flex justify-center mt-4">
          <button className="my-btn">All Classes</button>
        </Link>
      </section>
    </div>
  );
};

export default PopularCLass;
