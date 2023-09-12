"use client";
import { useState } from "react";
import NavbarTop from "./navbarTop";
import NavbarBottom from "./navbarBottom";

const NavBer = () => {
  const [isLogoutShow, setIsLogoutShow] = useState(false);

  return (
    <>
      <NavbarTop setIsLogoutShow={setIsLogoutShow} isLogoutShow={isLogoutShow}/>
      {/* navber bottom side */}
      <NavbarBottom setIsLogoutShow={setIsLogoutShow}/>
    </>
  );
};

export default NavBer;
