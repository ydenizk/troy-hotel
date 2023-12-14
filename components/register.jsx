"use client";

import React, { useState, useCallback, useContext } from "react";
import axios from "axios";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";
//import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";

import { GeneralContext } from "@/context/generalContext";

const RegisterComponent = () => {
  const { loginState, setLoginState ,logSideOpen,setLogSideOpen} = useContext(GeneralContext);
  /*   const [isLoading, setIsLoading] = useState(false); */

  /*   const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  }); */

  /*   
   const onSubmit = (data) => {
    setIsLoading(true);

    axios
      .post("/api/register", data)
      .then(() => {
        toast.success("Registered!");

      })
      .catch((error) => {
        toast.error(error);
      })
      .finally(() => {
        setIsLoading(false);

        setTimeout(() => {
          setLoginState(true);
        }, 1000);
      });
  }; 
 */

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const registerUser = async (e) => {
    e.preventDefault();
    const res = await fetch("api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data }),
    });
    const userInfo = await res.json();
    console.log(userInfo);
    if (res.ok) {
      setLoginState(true);
    }
  };

  return (
    <div  className="w-72 h-auto  font-light  "  
   >
      <div className=" w-72 h-auto  text-center bg-bgcolor p-4 py-2 ">
        <form
          className="   text-center bg-bgcolor"
          /*         onSubmit={handleSubmit(onSubmit)} */
          onSubmit={registerUser}
        >
          <div
           onClick={()=>setLogSideOpen(false)}
          className="text-neutral-800 w-full  flex justify-end ">
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
          <p className="uppercase my-1 text-lg font-semibold text-neutral-600">
            Register
          </p>

          <div className="border-b border-t border-neutral-300 py-2">
            <p className="text-sm text-neutral-500 text-left my-1">
              Create an Account
            </p>
            <div className="w-full my-1 ">
              <input
                //{...register("name" /* , { required: true }  */)}
                className="w-full p-1 text-neutral-500 border border-neutral-300 "
                placeholder="Name"
                type="text"
                id="name"
                name="name"
                label="Name"
                /*         disabled={isLoading} */
                value={data.name}
                onChange={(e) => {
                  setData({ ...data, name: e.target.value });
                }}
              />
            </div>
            <div className="w-full my-1">
              <input
                // {...register("email", { required: true })}
                className="w-full p-1 text-neutral-500 border border-neutral-300"
                placeholder="Email"
                type="email"
                id="email"
                label="Email"
                /*   disabled={isLoading} */
                value={data.email}
                onChange={(e) => {
                  setData({ ...data, email: e.target.value });
                }}
                required
              />
              {/*       {errors.email && (
                <p className="text-xs text-red-300 my-1">Email is required</p>
              )} */}
            </div>
            <div className="w-full my-1">
              <input
                //{...register("password", { required: true })}
                className="w-full p-1 text-neutral-500 border border-neutral-300"
                placeholder="Password"
                type="password"
                id="password"
                label="Password"
                /*         disabled={isLoading} */
                value={data.password}
                onChange={(e) => {
                  setData({ ...data, password: e.target.value });
                }}
                required
              />
              {/*             {errors.password && (
                <p className="text-xs text-red-300 my-1">
                  Password is required
                </p>
              )} */}
            </div>

            <button
              /*    className={`w-full mt-4  border  bg-lightbrown p-2   shadow-md ${
                isLoading ? "opacity-60" : "opacity-100"
              }      `} */
              className="w-full mt-4    bg-lightbrown p-1   shadow-md "
            >
              Register
            </button>
          </div>
        </form>
        <div className="text-xs text-neutral-400 flex justify-start pl-1 mt-1 items-center">
          <p className="">Already have an account?</p>
          <button
            onClick={() => setLoginState(true)}
            className=" pl-1 font-semibold "
          >
  Sign in
          </button>
        </div>
        <p className="text-center text-sm text-neutral-400 my-[2px]">or</p>
        <button
          onClick={() => signIn("google")}
          className="w-full flex bg-bgcolortext-sm  p-2 items-center mb-2 border border-neutral-200 shadow-md"
        >
          <FcGoogle className="text-lg" />
          <span className="w-full text-center text-neutral-500 text-sm">
            Continiue with Google
          </span>
        </button>
      </div>
    </div>
  );
};

export default RegisterComponent;
