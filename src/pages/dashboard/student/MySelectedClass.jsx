import React, { useContext, useEffect } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../providers/AuthProvider";
import useMyclass from "../../../hooks/useMYCLass";

const MySelectedClass = () => {
  const [myClasses, isLoading, refetch] = useMyclass();
  console.log(myClasses)


  return <div>
    <h1>hi</h1>
  </div>;
};

export default MySelectedClass;
