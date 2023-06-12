import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Swal from 'sweetalert2';

const ManageUsers = () => {
  const {data:users=[],refetch} = useQuery(['users'], async () => {
    const res = await fetch("http://localhost:5000/users")
    return res.json();
  })

  const handleMakeAdmin = user=> {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method:"PATCH"
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.modifiedCount) {
          refetch();
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${user.name} is Admin now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    })
  }

  const handleMakeInstructor = user => {
    fetch(`http://localhost:5000/users/instructor/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is Admin now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    
  }
  


  return (
    <div>
      <h4 className="text-4xl font-semibold font-serif tracking-wider">
        Total User: {users.length}{" "}
      </h4>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-lg font-semibold font-serif tracking-wider text-center">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="font-medium text-gray-700 text-center tracking-wider">
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role ? user.role : "Student"}</td>
                <td>
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className={`bg-amber-700 text-white w-1/2 mx-auto py-2 px-4 rounded-md font-semibold hover:bg-black border-b-4 border-amber-700 duration-300  ${
                        user.role === "admin"
                          ? "opacity-30 cursor-not-allowed"
                          : ""
                      }`}
                      disabled={user.role === "admin"}
                    >
                      Make Admin
                    </button>
                    <button
                      onClick={() => handleMakeInstructor(user)}
                      className={`bg-amber-700 text-white w-1/2 mx-auto py-2 px-4 rounded-md font-semibold hover:bg-black border-b-4 border-amber-700 duration-300 ${
                        user.role === "instructor" || user.role === "admin"
                          ? "opacity-30 cursor-not-allowed"
                          : ""
                      }`}
                      disabled={user.role === "admin"}
                    >
                      Make Instructor
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;