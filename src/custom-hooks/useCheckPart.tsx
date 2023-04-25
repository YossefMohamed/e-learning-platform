import React from "react";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import { Rootstate } from "@/redux/store";
import { useSelector } from "react-redux";

const useCheckPart = () => {
  const { isAuthenticated, user } = useSelector(
    (state: Rootstate) => state.userState
  );

  const router = useRouter();

  React.useEffect(() => {
    if (
      user.course !== router.query.course &&
      user.year !== router.query.year &&
      !user.isAdmin
    ) {
      toast.error("You are not a participant in this course");
      router.push(`/years`);
    }
    if (!isAuthenticated) router.push("/login");
  }, [user, isAuthenticated, router.query]);
};

export default useCheckPart;
