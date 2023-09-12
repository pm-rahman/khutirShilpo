"use client";
import auth, { googleProvider } from "@/firebase.config/firebaseAuth";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userLoading, setUserLoading] = useState(true);
  // dashboard item state
  const [dashboardTitle, setDashboardTitle] = useState("profile settings");

  //   google user
  const googleUser = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //   user check
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUserLoading(false);
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const logout = ()=>{
    return signOut(auth);
  }

  const userInfo = {
    user,
    userLoading,
    googleUser,
    logout,
    dashboardTitle,
    setDashboardTitle,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
