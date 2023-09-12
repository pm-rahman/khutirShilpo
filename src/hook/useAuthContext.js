"use client"
import { AuthContext } from "@/providers/AuthProvider";
import { useContext } from "react";

const useAuthContext = () => {
    return useContext(AuthContext);
};

export default useAuthContext;