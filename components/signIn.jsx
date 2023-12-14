"use client";

import React, { useState, useCallback, useContext } from "react";
import { signIn, useSession, signOut } from "next-auth/react";
import { toast } from "react-hot-toast";
//import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { useRouter } from "next/navigation";
import { GeneralContext } from "@/context/generalContext";
import { Toaster } from "react-hot-toast"

const SignInComponent = () => {
  const { loginState, setLoginState, logSideOpen, setLogSideOpen } =
    useContext(GeneralContext);
  /*   const [isLoading, setIsLoading] = useState(false); */
  const { status, data: session } = useSession();
  const router = useRouter();

  /*   const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  }); */
  /* 
  const onSubmit = (data) => {
    setIsLoading(true);

    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        toast.success("Succesfully Signed in");
        router.refresh();
        console.log("karkartallll......");
      }

      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };
 */

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      signIn("credentials", {
        ...data,
        redirect: false,
      }).then((result) => {
        if (result?.error) {
          toast.error(result.error);
        } else {
          toast.success("You login successfully");
          setLogSideOpen(false);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Login failed");
      })

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-72 h-full  font-light  ">
      <div className="w-72 h-auto p-4   pb-8  text-center bg-bgcolor">
        <form
          className=" text-center bg-bgcolor"
          //onSubmit={handleSubmit(onSubmit)}
          onSubmit={loginUser}
        >
          <div
            onClick={() => setLogSideOpen(false)}
            className="text-neutral-800 w-full  flex justify-end "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5   hover:text-brown transition"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <p className="uppercase my-2  text-lg font-semibold text-neutral-600">
            Sign In
          </p>

          <div className="border-b border-t border-neutral-300 py-2">
            <div className="w-full my-1">
              <input
                //{...register("email", { required: true })}
                className="w-full p-1 text-neutral-500 border border-neutral-300"
                placeholder="Email"
                id="email"
                type="email"
                label="Email"
                value={data.email}
                onChange={(e) => {
                  setData({ ...data, email: e.target.value });
                }}
                required
                // disabled={isLoading}
              />
              {/*      {errors.email && (
                <p className="text-xs text-red-300 my-1">Email is required</p>
              )} */}
            </div>
            <div className="w-full my-1">
              <input
                // {...register("password", { required: true })}
                className="w-full p-1 text-neutral-500 border border-neutral-300"
                placeholder="Password"
                type="password"
                id="password"
                label="Password"
                value={data.password}
                onChange={(e) => {
                  setData({ ...data, password: e.target.value });
                }}
                required
                //disabled={isLoading}
              />
              {/*    {errors.password && (
                <p className="text-xs text-red-300 my-1">
                  Password is required
                </p>
              )} */}
            </div>

            <button
              /*  className={`w-full mt-4  border  bg-lightbrown p-2   shadow-md ${
                isLoading ? "opacity-80" : "opacity-100"
              }      `} */
              className="w-full mt-4    bg-lightbrown p-1   shadow-md "
            >
              Sign in
            </button>
            <Toaster />
          </div>
        </form>

        <div className="text-xs text-neutral-400 flex justify-start pl-1 mt-1 items-center">
          <p className="">Do not have an account?</p>
          <button
            onClick={() => setLoginState(false)}
            className=" pl-1 font-semibold "
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignInComponent;
