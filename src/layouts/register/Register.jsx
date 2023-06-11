import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";


const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { createUser, userInfo } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      userInfo(data.name, data.photoURL).then(() => {
        const saveUser = {
          name: data.name,
          email: data.email,
          photo: data.photoURL,
        };

        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              toast.success("Login successful!");
              navigate("/");
            }
          })

          .catch((error) => console.log(error));
      });
    });
  };

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  return (
    <div>
      <div className="hero bg-white">
        <div className="hero-content flex-col mt-36 mb-20  lg:w-1/4">
          <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
            <div className="ml-8">
              <h1 className="text-4xl font-semibold mt-10 mb-2">
                Create your account !
              </h1>
              <p className="text-gray-400 font-serif font-extrabold tracking-widest">
                by filling the form below.
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>

                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-700 mt-2">Name is required</span>
                )}

                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-700 mt-2">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  })}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-700 mt-2">
                    Password is required
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-700 mt-2">
                    Password must be 6 characters
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-700 mt-2">
                    Password must be less then 20 characters
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-700 mt-2">
                    Password must have One uppercase,one number and one special
                    character
                  </span>
                )}

                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  {...register("confirmPassword", {
                    required: true,
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  })}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="input input-bordered"
                />
                {errors.confirmPassword && (
                  <span className="text-red-700 mt-2">
                    {errors.confirmPassword.message}
                  </span>
                )}

                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register("photo", { required: true })}
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-700 mt-2">
                    Photo URL is required
                  </span>
                )}
                <label className="label">
                  <Link
                    to="/login"
                    className="label-text-alt link link-hover mt-4"
                  >
                    Already have an Account
                  </Link>
                </label>
              </div>
              <div className="form-control mt-4">
                <button className="btn bg-blue-600 text-white font-semibold tracking-widest border-0 hover:bg-gray-600">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
