import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthProvider from "../providers/AuthProvider";


const axiosSecure = axios.create({
  baseURL: `http://localhost:5000`,
});

// axios.get()
const useAxiosSecure = () => {
  const { logOut } = useContext(AuthProvider);
  const navigate = useNavigate();
  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("access-token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
    axiosSecure.interceptors.request.use(
    (response) => response,
    async (error) => {
      if (
        error.response &&
        (error.response.status === 401 || error.response.status === 403)
      ) {
        await logOut();
        navigate("/login");
      }
      return Promise.reject(error);
    })
    
  },[logOut,navigate])
  
  return axiosSecure;
};

export default useAxiosSecure;
