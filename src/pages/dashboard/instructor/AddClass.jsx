import React, { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useForm } from "react-hook-form";

const AddClass = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>
  {
    console.log(data);
  }  
  console.log(errors);

  const { user } = useContext(AuthContext);
  return (
    <>
      <section className="my-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="max-w-screen-lg mx-auto bg-gray-400 p-10 rounded-lg">
            <h2 className="text-4xl tracking-widest font-bold text-center mb-10">
              Add a Class
            </h2>

            <div className="form-control w-full ">
              <select
                {...register("classTitle", { required: true })}
                className="select select-bordered w-full bg-amber-50  px-6  mb-4 font-bold font-mono text-xl rounded-md border border-white focus:outline-none focus:ring-blue-900 focus:border-blue-900 placeholder-gray-500"
                name="classTitle"
              >
                <option disabled selected>
                  Select a Class
                </option>
                <option>Wildlife and Nature Photography</option>
                <option>Camera Basics</option>
                <option>Lighting and Composition</option>
                <option>Landscape and Nature Photography</option>
                <option>Sports and Action Photography</option>
                <option>Street Photography</option>
              </select>
            </div>

            <input
              type="text"
              name="instructorName"
              className="w-full bg-amber-50  px-6 py-3 mb-4 font-bold font-mono text-xl rounded-md border border-white focus:outline-none focus:ring-blue-900 focus:border-blue-900 placeholder-gray-500"
              defaultValue={user?.displayName}
              placeholder="Instructor Name* "
              {...register("instructorName", { required: true, maxLength: 80 })}
            />

            <input
              type="email"
              name="email"
              className="w-full bg-amber-50  px-6 py-3 mb-4 font-bold font-mono text-xl rounded-md border border-white focus:outline-none focus:ring-blue-900 focus:border-blue-900 placeholder-gray-500"
              defaultValue={user?.email}
              placeholder="Instructor Email*"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />

            <div className="flex gap-8 mb-4">
              <input
                type="number"
                name="courseFee"
                className="w-full bg-amber-50  px-6 py-3 font-bold font-mono text-xl  rounded-md border border-white focus:outline-none focus:ring-blue-900 focus:border-blue-900 placeholder-gray-500"
                placeholder="$Course Fee*"
                {...register("courseFee", { required: true })}
              />
              <input
                type="Number"
                name="availableSeats"
                className="w-full bg-amber-50  px-6 py-3 font-bold font-mono text-xl rounded-md border border-white focus:outline-none focus:ring-blue-900 focus:border-blue-900 placeholder-gray-500"
                placeholder="Available seats*"
                {...register("availableSeats", { required: true })}
              />
            </div>

            <div className="mb-4">
              <div className="form-control w-full">
                <input
                  type="file"
                  className="file-input file-input-bordered w-full bg-amber-50 font-bold font-mono text-xl rounded-md border border-white focus:outline-none focus:ring-blue-900 focus:border-blue-900"
                  {...register("classImage", { required: true })}
                />
              </div>
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
