"use client";
import useAuthContext from "@/hook/useAuthContext";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

const PrivateRouter = ({ children }) => {
  const { user } = useAuthContext();
  const { replace } = useRouter();
  if (!user) {
    toast.error("You need to login first");
    replace("/");
    return null
  }
  return <>{children}</>;
};

export default PrivateRouter;
