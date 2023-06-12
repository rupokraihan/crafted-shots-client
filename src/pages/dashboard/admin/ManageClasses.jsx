import React, { useContext, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import LoadingSpinner from "../../../components/LoadingSpinner";
import { AuthContext } from "../../../providers/AuthProvider";

const ManageClasses = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [axiosSecure] = useAxiosSecure();
  const { isLoading } = useContext(AuthContext);
  const { data: classesData = [], refetch } = useQuery({
    queryKey: ["classesData"],
    queryFn: async () => {
      const res = await axiosSecure.get("alldata");
      return res.data;
    },
  });

  // handle approve instructor classes
  const handleApprove = (data) => {
    axiosSecure
      .patch(`/approvedclasses/${data?._id}`, {
        status: "approved",
      })
      .then((response) => {
        if (response.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: `Approved successfully`,
            showConfirmButton: false,
            timer: 1000,
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // handle deny instructor classes
  const handleDeny = (data) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, deny it!",
      input: "text", // Add an input field for the feedback
      inputPlaceholder: "Enter feedback (optional)",
      inputAttributes: {
        autocapitalize: "off",
      },
      showLoaderOnConfirm: true,
      preConfirm: (feedback) => {
        return axiosSecure
          .patch(`/denyclass/${data?._id}`, { feedback })
          .then((response) => {
            if (response.data.modifiedCount > 0) {
              refetch();
              Swal.fire("Denied!", "Your file has been denied.", "success");
            }
          })
          .catch((error) => {
            console.error(error);
          });
      },
      allowOutsideClick: () => !Swal.isLoading(),
    });
  };

  // Function to handle feedback submission
  

  

  return (
    <div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              <thead className="text-lg font-semibold font-serif tracking-wider text-center">
                <tr>
                  <th>#</th>
                  <th>Class Image</th>
                  <th>Class Name</th>
                  <th>Course Fee</th>
                  <th>Instructor Email</th>
                  <th>Available Seats</th>
                  <th>Status/Action</th>
                  <th>Feedback</th>
                </tr>
              </thead>
              <tbody className="font-medium text-gray-700 text-center tracking-wider">
                {classesData?.map((data, index) => (
                  <tr key={data._id}>
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
                    <td>{data.courseFee} $</td>
                    <td>{data.email}</td>
                    <td>{data.availableSeats}</td>
                    <td className="flex flex-col gap-3">
                      <button
                        onClick={() => handleApprove(data)}
                        className={`text-white px-4 bg-green-600 hover:bg-red-800 py-1 rounded-md ${
                          data?.status === "approved"
                            ? "opacity-30 cursor-not-allowed"
                            : ""
                        }`}
                        disabled={data?.status === "approved"}
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleDeny(data)}
                        className={`text-white px-4 bg-red-600 hover:bg-red-800 py-1 rounded-md ${
                          data?.status === "denied"
                            ? "opacity-30 cursor-not-allowed"
                            : ""
                        }`}
                        disabled={data?.status === "denied"}
                      >
                        Deny
                      </button>
                    </td>
                    <td>
                      {data.status === "denied" ? (
                        <span>{data.feedback}</span>
                      ) : (
                        ""
                      )}
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

export default ManageClasses;
