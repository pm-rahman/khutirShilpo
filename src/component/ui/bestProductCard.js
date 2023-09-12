"use client";
import useAuthContext from "@/hook/useAuthContext";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import {toast} from "react-hot-toast";

const BestProductCard = ({ product, id }) => {
  const {user}=useAuthContext();

  const { replace } = useRouter();
  const viewDetailsHandler=(id)=>{
    if (!user) {
      return toast.error("You need to login first");
    }
    replace(`/`)
  }
  return (
    <div
      onClick={()=>viewDetailsHandler(id)}
      className="bestProductCard relative flex flex-col border rounded-t rounded-b-lg overflow-hidden cursor-pointer"
    >
      <Image
        height={400}
        width={200}
        className={`${!product?.image&&"max-h-48"} h-full w-full`}
        src={product?.image}
        alt="product image"
      />
      <div className="px-2 py-1 w-full">
        <h4 className="text-sm font-semibold uppercase">{product?.title}</h4>
        <p className="text-sm rounded-sm inline-block text-[#516067] font-semibold">
          {product?.sells} sells
        </p>
      </div>
      <div className="bestProductHoverItem absolute z-20 -bottom-[100%] left-0 h-full w-full flex gap-1 items-center justify-center text-white bg-[#8298a2]">
        <p className="text-sm">View Details</p>
        <Icon className="text-base" icon="heroicons-outline:arrow-right" />
      </div>
    </div>
  );
};

export default BestProductCard;
