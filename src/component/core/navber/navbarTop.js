import Button from "@/component/ui/button";
import { Icon } from "@iconify/react";
import Image from "next/image";
import googleLogo from "@/assets/google-logo.png";
import useAuthContext from "@/hook/useAuthContext";
import { useRouter } from "next/navigation";
import CartCount from "./cartCount";
import { toast } from "react-hot-toast";

const NavbarTop = ({ setIsLogoutShow, isLogoutShow }) => {
  // hooks
  const { user, logout, userLoading, googleUser, setDashboardTitle } =
    useAuthContext();
  const { replace } = useRouter();

  // google login handler
  const googleLoginHandler = () => {
    googleUser()
      .then((data) => {
        const loggedUser = {
          name: data?.user?.displayName,
          email: data?.user?.email,
          image: data?.user?.photoURL,
          userId: data?.user?.uid,
          metadata: data?.user?.metadata,
        };
        // add user in mongodb
        fetch(`${process.env.NEXT_PUBLIC_api}api/users`, {
          method: "PUT",
          headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify(loggedUser),
        })
          .then((res) => res.json())
          .then(() => {
            toast.success("User signed in successfully");
            replace("/");
          })
          .catch((err) => {
            toast.error(err.message);
          });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  // logout handler
  const logoutHandler = () => {
    logout().then(() => {
      if (path.includes("/dashboard") || path.includes("/product")) {
        replace("/");
      }
      toast.success("logout successfully");
    });
  };

  // cart Item handler
  const cartItemHandler = () => {
    if (!user) {
      return toast.error("You need to login first");
    }
    replace("/dashboard");
    setDashboardTitle("cart items");
  };
  // profile button handler
  const profileBtnHandler = () => {
    if (!user) {
      return toast.error("You need to login first");
    }
    replace("/dashboard");
    setDashboardTitle("profile settings");
  };

  return (
    <div className={`bg-white`}>
      <div className="container py-4 flex justify-between items-center">
        <h4 className="text-[#516067] text-2xl md:text-3xl font-semibold">
          Kutir Shilpo
        </h4>
        <div className="flex justify-between items-center gap-2">
          <form className="w-[30vw] mr-20 flex items-center justify-between py-2 px-3 rounded-full border border-[#516067]">
            <input
              type="text"
              placeholder="Search for Categories"
              className="text-sm bg-transparent"
            />
            <button>
              <Icon
                className="text-[#516067]"
                icon="heroicons-outline:search"
              />
            </button>
          </form>
          <button onClick={cartItemHandler} className="flex items-center mr-4">
            <CartCount />
          </button>
          {/*user profile*/}
          {user ? (
            <div
              onClick={() => setIsLogoutShow(!isLogoutShow)}
              className="relative"
            >
              <Image
                width={40}
                height={40}
                className="rounded-full cursor-pointer"
                src={user?.photoURL}
                alt="user photo"
                title={user?.displayName}
              />
              <div
                className={`scale-0 ${
                  isLogoutShow && "scale-100"
                } absolute top-[115%] right-0 flex flex-col w-32 rounded border`}
              >
                <button
                  onClick={logoutHandler}
                  className="text-left flex items-center gap-1 px-3 pt-1 bg-slate-50 w-full hover:bg-white"
                >
                  <Icon icon="heroicons-outline:logout" />
                  Logout
                </button>
                <button
                  onClick={profileBtnHandler}
                  className="text-left flex items-center gap-1 px-3 pb-2 bg-slate-50 w-full hover:bg-white"
                >
                  <Icon
                    className="text-lg relative mt-1"
                    icon="heroicons-outline:user-circle"
                  />{" "}
                  profile
                </button>
              </div>
            </div>
          ) : (
            <>
              <div onClick={googleLoginHandler} className="cursor-pointer">
                {!userLoading ? (
                  <Button className="flex gap-1 items-center">
                    <Image
                      height={18}
                      width={18}
                      src={googleLogo}
                      alt="google logo"
                    />
                    Login
                  </Button>
                ) : (
                  <div className="h-6 w-6 mini-loader"></div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
