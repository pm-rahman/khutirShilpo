"use client";
import Button from "@/component/ui/button";
import Link from "next/link";

import React from "react";

const NotFound = () => {
  return (
    <div className="mt-10 text-center">
      <h2 className="text-lg">{"This Router Doesn't exist"}</h2>
      <Link href="/" className="mt-5 mb-2 inline-block">
        <Button className="">Back to Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
