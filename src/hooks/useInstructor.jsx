import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../providers/AuthProvider";

const useInstructor = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const { data: isInstructor, isLoading: isInstructorLoading } = useQuery(
    ["isInstructor", user?.email],
    async () => {
      if (user && user?.email) {
        const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
        return res?.data?.instructor;
      }
      return false;
    },
    {
      enabled: !loading,
    }
  );
  return [isInstructor,isInstructorLoading];
};

export default useInstructor;
