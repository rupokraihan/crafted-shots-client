import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import AuthProvider from "../providers/AuthProvider";

const useInstructor = () => {
  const { user, loading } = useContext(AuthProvider);
  const [axiosSecure] = useAxiosSe();

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
