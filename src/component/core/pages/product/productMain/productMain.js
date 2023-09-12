"use client";
import Button from "@/component/ui/button";
import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";

const ProductMain = ({ product, loading }) => {
  const { image, title, price } = product;
  return (
    <div className="grid grid-cols-2 gap-4 p-6 bg-slate-50 rounded-l md:p-8">
      {!loading ? (
        <>
          {image && (
            <Image width={400} height={500} src={image} alt="product image" />
          )}
          <div>
            <div className="border-b pb-4">
              <h3 className="text-xl">{title}</h3>
              {/* rating star */}
              <span className="flex mt-1 text-sm text-[#8298a2]">
                <Icon icon="heroicons-outline:star" />
                <Icon icon="heroicons-outline:star" />
                <Icon icon="heroicons-outline:star" />
                <Icon icon="heroicons-outline:star" />
                <Icon icon="heroicons-outline:star" />
              </span>
            </div>
            <h4 className="text-2xl mt-4 text-[#516067]">৳ {price}</h4>
            <div className="mt-4">
              {/* quantity select from */}
              <form className="flex items-center gap-2 mb-4">
                <label>Quantity</label>
                <button className="bg-slate-200 text-slate-500 py-2 px-3 rounded">
                  <Icon icon="heroicons-outline:minus-sm" />
                </button>
                <input
                  className="w-10 text-center p-1"
                  type="number"
                  defaultValue={1}
                />
                <button className="bg-slate-200 text-slate-500 py-2 px-3 rounded">
                  <Icon icon="heroicons-outline:plus-sm" />
                </button>
              </form>
              <Button className="mr-3" variant="outline">
                Add To cart
              </Button>
              <Button>Buy now</Button>
            </div>
          </div>
        </>
      ) : (
        <div className="loader mt-6"></div>
      )}
    </div>
  );
};

export default ProductMain;
