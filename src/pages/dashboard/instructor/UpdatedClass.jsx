import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";

const UpdatedClass = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [updateData, setUpdateData] = useState({});

  useEffect(() => {
    fetch("https://crafted-shots-server.vercel.app/alldata/myclasses")
      .then((res) => res.json())
      .then((data) => {
        const update = data.filter((classData) => classData._id === id)[0];
        setUpdateData(update);
      });
  }, [id]);

  const handleUpdateClass = (event) => {
    event.preventDefault();
    const form = event.target;
    const classTitle = form.classTitle.value;
    const courseFee = form.courseFee.value;
    const classUpdateData = {
      classTitle,
      courseFee,
    };
    fetch(`https://crafted-shots-server.vercel.app/updateclass/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(classUpdateData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const handleUpdateData = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Update your data",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div>
      <section className="my-container">
        <form onSubmit={handleUpdateClass}>
          <div className="max-w-screen-lg mx-auto bg-gray-400 p-10 rounded-lg">
            <h2 className="text-4xl tracking-widest font-bold text-center mb-10">
              update Class Data
            </h2>

            {/* Name */}
            <div className="form-control w-full ">
              <select
                defaultValue="Select a Class"
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

            {/* Course Fee */}

            <input
              type="Number"
              name="courseFee"
              className="w-full bg-amber-50  px-6 py-3 mb-4 font-bold font-mono text-xl rounded-md border border-white focus:outline-none focus:ring-blue-900 focus:border-blue-900 placeholder-gray-500"
              placeholder="Update Course Fee"
            />
          </div>

          <div className="flex justify-center mt-6">
            <button onClick={handleUpdateData} className="my-btn">
              Update
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default UpdatedClass;
