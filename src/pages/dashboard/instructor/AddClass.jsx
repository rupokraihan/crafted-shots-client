import React, { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const AddClass = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <section className="my-container">
        <form>
          <div className="max-w-screen-lg mx-auto bg-gray-400 p-10 rounded-lg">
            <h2 className="text-4xl tracking-widest font-bold text-center mb-10">
              Add a Class
            </h2>

            <input
              type="text"
              name="classTitle"
              className="w-full bg-amber-50  px-6 py-3 mb-4 font-bold font-mono text-xl rounded-md border border-white focus:outline-none focus:ring-blue-900 focus:border-blue-900 placeholder-gray-500 "
              placeholder="Class Name"
            />
            <input
              type="text"
              name="instructorName"
              className="w-full bg-amber-50  px-6 py-3 mb-4 font-bold font-mono text-xl rounded-md border border-white focus:outline-none focus:ring-blue-900 focus:border-blue-900 placeholder-gray-500"
              defaultValue={user?.displayName}
              placeholder="Instructor name"
            />

            <input
              type="email"
              name="email"
              className="w-full bg-amber-50  px-6 py-3 mb-4 font-bold font-mono text-xl rounded-md border border-white focus:outline-none focus:ring-blue-900 focus:border-blue-900 placeholder-gray-500"
              defaultValue={user?.email}
              placeholder="Instructor email"
            />

            <div className="flex gap-8 mb-4">
              <input
                type="number"
                name="courseFee"
                className="w-full bg-amber-50  px-6 py-3 font-bold font-mono text-xl  rounded-md border border-white focus:outline-none focus:ring-blue-900 focus:border-blue-900 placeholder-gray-500"
                placeholder="$Course Fee"
              />
              <input
                type="Number"
                name="availableSeats"
                className="w-full bg-amber-50  px-6 py-3 font-bold font-mono text-xl rounded-md border border-white focus:outline-none focus:ring-blue-900 focus:border-blue-900 placeholder-gray-500"
                placeholder="Available seats"
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                name="image"
                className="w-full bg-amber-50  px-6 py-3 font-bold font-mono text-xl rounded-md border border-white focus:outline-none focus:ring-blue-900 focus:border-blue-900 placeholder-gray-500"
                defaultValue={"https://i.ibb.co/jh1pgnK/img-20.jpg"}
                placeholder="Class Image"
              />
            </div>
            <div className="flex justify-center mt-6">
              <button className="my-btn">Add Class</button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default AddClass;
