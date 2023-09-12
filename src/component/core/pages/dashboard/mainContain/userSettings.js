"use client";

import useAuthContext from "@/hook/useAuthContext";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useEffect, useState } from "react";

const UserSettings = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [loading, setLoading] = useState(true);
  const { user } = useAuthContext();
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_api}api/users?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCurrentUser(data);
        setLoading(false);
      });
  }, [user]);
  return (
    <>
      {!loading ? (
        <div className="text-[#516067]">
          <div className="flex flex-col items-center pb-2 border-b border-slate-300">
            {currentUser?.image ? (
              <Image
                height={100}
                width={100}
                className="rounded-full"
                src={currentUser?.image||currentUser?.photoURL}
                alt="user image"
              />
            ) : (
              <Icon className="text-8xl" icon="heroicons-solid:user-circle" />
            )}
            <div className="flex items-center gap-1">
              <h4 className="text-lg font-normal mt-2">{currentUser?.name||user?.displayName}</h4>
              <Icon
                className="cursor-pointer relative top-1"
                icon="heroicons-outline:pencil"
              />
            </div>
          </div>
          <div className="flex items-center gap-1">
            <h4 className="font-normal text-lg mt-2">{currentUser?.email||user?.email}</h4>
            <Icon
              className="cursor-pointer relative top-1"
              icon="heroicons-outline:pencil"
            />
          </div>
          <div className="flex items-center gap-1">
            <h4 className="font-normal">{currentUser?.bio ? bio : "Bio"}</h4>
            <Icon
              className="cursor-pointer relative"
              icon="heroicons-outline:pencil"
            />
          </div>
          <h4 className="text-lg font-semibold mt-4">Additional Information</h4>
          <h4 className="font-normal mt-1">User Id: {currentUser?.userId||user?.uid}</h4>
          <h4 className="font-normal mt-1">
            Your account {JSON.stringify(new Date(Date.now(currentUser?.metadata?.createdAt)))||user?.metadata?.creationTime} to present.
          </h4>
          <h4 className="font-normal mt-1">
            Lest time you logged {JSON.stringify(new Date(Date.now(currentUser?.metadata?.lastLoginAt)))||user?.metadata?.lastSignInTime}.
          </h4>
        </div>
      ) : (
        <div className="loader mt-6"></div>
      )}
    </>
  );
};

export default UserSettings;
