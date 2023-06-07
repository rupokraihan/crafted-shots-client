import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { signIn, setUser, signInWithGoogle } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = async (data) => {
    try {
      await signIn(data.email, data.password);
      reset();
      toast.success("Login successful!");
    } catch (error) {
      setLoginError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div>
      <div className="hero bg-white">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-4xl font-semibold mt-20 mb-8">
              Login
              <span className="text-blue-600 font-serif font-extrabold ml-4 tracking-widest">
                toyHaven Ville
              </span>
            </h1>
          </div>

          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
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
                  {...register("password", { required: true })}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password && (
                  <span className="text-red-700 mt-2">
                    Password is required
                  </span>
                )}

                <label className="label">
                  <div className="label-text-alt link link-hover mt-4">
                    <Link to="/register">Create New Account</Link>
                  </div>
                </label>
              </div>
              <div className="form-control mt-4">
                <button className="btn bg-blue-600 text-white font-semibold border-0 tracking-widest hover:bg-gray-600">
                  Login
                </button>
              </div>
              {loginError && (
                <div className="text-center mt-4">
                  <span className="text-red-700">{loginError}</span>
                </div>
              )}
              <div className="form-control mt-4">
                <p className="text-lg text-center mb-4">or</p>
                <button  className="btn bg-blue-600 text-white font-semibold border-0 tracking-widest hover:bg-gray-600">
                  Sign in with Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
