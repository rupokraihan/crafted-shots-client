import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import AuthProvider from "../providers/AuthProvider";

const useAdmin = () => {
  const { user, loading } = useContext(AuthProvider);
  const [axiosSecure] = useAxiosSe();

  const { data: isAdmin, isLoading: isAdminLoading } = useQuery(
    ["isAdmin", user?.email],
    async () => {
      if (user && user?.email) {
        const res = await axiosSecure.get(`/users/admin/${user?.email}`);
        return res?.data?.admin;
      }
      return false;
    },
    {
      enabled: !loading,
    }
  );
  return[isAdmin,isAdminLoading]
};
