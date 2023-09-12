import { useState } from "react";
import useAuthContext from "./useAuthContext";
import useCart from "./useCart";
import {toast} from "react-hot-toast";

const useAddToCart = () => {
    const {user}=useAuthContext();
    const [,,refetch]=useCart();
    const [addCartLoader,setAddCartLoader]=useState(false);
    const addToCart = (product) => {
        setAddCartLoader(true);
        if(!user?.email){
          setAddCartLoader(false);
          return toast.error("You need to login first");
        }
        const updateDoc = {
          email: user?.email,
          cartItem:{
            id:product?._id,
            name: product?.title,
            image:product?.image,
            price:product?.price
          }
        };
        fetch(`${process.env.NEXT_PUBLIC_api}api/users`, {
          method: "PATCH",
          headers: {
            "contain-type": "application/json",
          },
          body: JSON.stringify(updateDoc),
        })
          .then((res) => res.json())
          .then(() => {
            setAddCartLoader(false);
            refetch();
            toast.success("Added cart successfully")
          })
          .catch(() => {
            setAddCartLoader(false);
            toast.error("something is wrong")
          });
      };
    return [addToCart,addCartLoader];
};

export default useAddToCart;