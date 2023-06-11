import useMyclass from "../../../hooks/useMYCLass";
import { Link } from "react-router-dom";
import LoadingSpinner from "../../../components/LoadingSpinner";
import Swal from "sweetalert2";
import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MySelectedClass = () => {
  const [myClasses, isLoading, refetch] = useMyclass();
  const [axiosSecure] = useAxiosSecure();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`selectedmyclass/${id}`)
          .then((res) => {
            console.log(res.data);
            refetch()
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
             
            }
          })
          .catch((error) => console.error(error));
      }
    });
  };

  return (
    <div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr className="text-lg font-semibold font-serif tracking-wider text-center">
                  <th>#</th>
                  <th>Class Image</th>
                  <th>Class Name</th>
                  <th>Course Fee</th>
                  <th>instructor Name</th>
                  <th>availableSeats</th>
                  <th>Pay</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="font-medium text-gray-700 text-center tracking-wider">
                {myClasses.map((selectedClass, index) => (
                  <tr
                    className="text-lg font-sans tracking-wider"
                    key={selectedClass._id}
                  >
                    <td>{index + 1}</td>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={selectedClass.image} alt="Class" />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="font-bold">{selectedClass.title}</div>
                    </td>
                    <td>{selectedClass.courseFee} $</td>
                    <td>{selectedClass.instructor}</td>
                    <td>{selectedClass.availableSeats}</td>
                    <td>
                      <Link>
                        <button className="badge badge-warning badge-lg">
                          <span className="p-3 font-bold">Pay Now</span>
                        </button>
                      </Link>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(selectedClass._id)}
                        className="badge badge-error badge-lg"
                      >
                        <span className="p-3 font-bold">Delete</span>
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

export default MySelectedClass;
