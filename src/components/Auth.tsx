import React from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/custom-hooks/useAuth";
import { addUser } from "@/redux/slices/userSlices";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/redux/store";
const Auth = ({ children }: any) => {
  const router = useRouter();

  const { data, isLoading, mutate: Auth, isSuccess, isError } = useAuth();
  const dispatch = useDispatch<AppDispatch>();

  React.useEffect(() => {
    const token: string = localStorage.getItem("token") || "";
    !data && Auth(token);
    data && dispatch(addUser(data));
  }, [data]);
  return <>{children}</>;
};

export default Auth;
