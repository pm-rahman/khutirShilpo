import React, { useEffect } from "react";
import ActiveLink from "../activeLink/activeLink";
import useAuthContext from "@/hook/useAuthContext";

const NavbarBottom = ({setIsLogoutShow}) => {
    const { user } = useAuthContext();
    

  // is logged show
  useEffect(() => {
    setIsLogoutShow(false);
  }, [user,setIsLogoutShow]);
  return (
    <div className="bg-slate-100">
      <div className="container flex gap-4 justify-end text-sm font-semibold">
        <ActiveLink className="py-3 px-5 text-[#516067]" href="/">
          Home
        </ActiveLink>
        <ActiveLink className="py-3 px-5 text-[#516067]" href="/products">
          Products
        </ActiveLink>
        {user && (
          <ActiveLink className="py-3 px-5 text-[#516067]" href="/dashboard">
            Dashboard
          </ActiveLink>
        )}
      </div>
    </div>
  );
};

export default NavbarBottom;
