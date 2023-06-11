import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { signIn, signInWithGoogle, setUser, user } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = async (data) => {
    try {
      const result = await signIn(data.email, data.password);
      setUser(result.user);
      reset();
      toast.success("Login successful!");
      navigate(from, { replace: true });
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        setErrorMessage("Invalid email or password. Please try again.");
      }
    }
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        const saveUser = { name: user.displayName, email: user.email };

        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then(() => {
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div>
      <div className="hero bg-white">
        <div className="hero-content flex-col mt-36 mb-20  lg:w-1/4">
          <div className="card flex-shrink-0 w-full max-w-6xl shadow-2xl bg-base-100">
            <div className="ml-8">
              <h1 className="text-4xl font-semibold mt-10 mb-2">
                Welcome Back !
              </h1>
                <p className="text-gray-400 font-serif font-extrabold tracking-widest">
                  Sign in to continue access
                </p>
            </div>
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
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    {...register("password", { required: true })}
                    name="password"
                    placeholder="password"
                    className="input input-bordered w-full"
                  />
                  <button
                    type="button"
                    className="absolute top-1/2 right-6 transform -translate-y-1/2 focus:outline-none"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <EyeSlashIcon className="h-5 w-5 text-gray-500" />
                    ) : (
                      <EyeIcon className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                </div>
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
              {errorMessage && (
                <div className="text-center my-1">
                  <span className="text-red-700">{errorMessage}</span>
                </div>
              )}
              <div className="form-control mt-4">
                <button className="btn bg-blue-600 text-white font-semibold border-0 tracking-widest hover:bg-gray-600">
                  Login
                </button>
              </div>

              <div className="form-control mt-4">
                <p className="text-lg text-center mb-4">or</p>
                <button
                  onClick={handleGoogleLogin}
                  className="btn bg-blue-600 text-white font-semibold border-0 tracking-widest hover:bg-gray-600"
                >
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
