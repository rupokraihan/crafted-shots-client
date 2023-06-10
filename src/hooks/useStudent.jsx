import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useStudent = () => {
  const { user, loading } = useContext(AuthContext)
  const [axiosSecure] = useAxiosSecure();
  
  const { data: isStudent, isLoading: isStudentLoading } = useQuery(
    ["isStudent", user?.email],
    async () => {
      if (user && user?.email) {
        const res = await axiosSecure.get(`/users/student/${user?.email}`);
        return res?.data?.student;
      }
      return false;
    },
    {
      enabled: !loading,
    }
  );
  return[isStudent,isStudentLoading]
};

export default useStudent;