import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Swal from 'sweetalert2';

const AllUsers = () => {
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
          position: "top-end",
          icon: "success",
          title: `${user.name} is Admin now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    })
  }
  


  return (
    <div>
      <h4 className="text-4xl font-semibold font-serif tracking-wider">
        Total User: {users.length}{" "}
      </h4>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>Blue</td>
                <td>
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <button onClick={()=>handleMakeAdmin(user)} className="btn">Make Admin</button>
                  )}
                  {user.role === "instructor" ? (
                    "instructor"
                  ) : (
                    <button className="btn ml-2">Make Instructor</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;