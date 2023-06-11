import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useMyclass = () => {
  const [axiosSecure] = useAxiosSecure();

    const { user } = useContext(AuthContext);

  const {
    data: myClasses = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["selectedmyclass", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/selectedmyclass?email=${user?.email}`
      );
      return res.data;
    },
  });
  return [myClasses, isLoading, refetch];
};

export default useMyclass;