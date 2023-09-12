"use client";

import { useEffect, useState } from "react";
import useAuthContext from "./useAuthContext";
import { toast } from "react-hot-toast";

const useCart = () => {
  const { user } = useAuthContext();
  const [cartItems, setCartItems] = useState([]);
  const [cartLoading, setCartLoading] = useState(false);

  //   cart items set on loader
  useEffect(() => {
    setCartLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_api}api/users?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCartItems(data?.cartItem||[]);
        setCartLoading(false);
      })
      .catch(() => {
        toast.error("Cart item not found");
      });
  }, [user]);
  const refetch = () => {
    fetch(`${process.env.NEXT_PUBLIC_api}api/users?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCartItems(data?.cartItem);
        setCartLoading(false);
      })
      .catch(() => {
        toast.error("something was wrong")
      });
  };
  return [cartItems, cartLoading, refetch];
};

export default useCart;
