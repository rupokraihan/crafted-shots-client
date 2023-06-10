import React, { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.classImage[0]);

    fetch(image_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const {
            classTitle,
            instructorName,
            email,
            courseFee,
            availableSeats,
          } = data;

          const addClass = {
            classTitle,
            instructorName,
            email,
            courseFee: parseInt(courseFee),
            availableSeats: parseInt(availableSeats),
            classImage: imgURL,
            status:"pending"
          };
          console.log(addClass);
          axiosSecure.post("/alldata",addClass)
            .then(data => {
              if (data.data.insertedId) {
                (reset)
              Swal.fire("Pending Approval", "Please wait...", "question");
            }
          })
        }
      });
  };
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
                defaultValue="Select a Class"
                {...register("classTitle", { required: true })}
                className="select select-bordered w-full bg-amber-50  px-6  mb-4 font-bold font-mono text-xl rounded-md border border-white focus:outline-none focus:ring-blue-900 focus:border-blue-900 placeholder-gray-500"
                name="classTitle"
              >
                <option disabled>Select a Class</option>
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
                  name="classImage"
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
