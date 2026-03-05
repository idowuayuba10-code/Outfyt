import React from "react";
import { FaApple, FaEyeSlash, FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";

export default function SignUp() {
  return (
    <div className="h-screen py-10 px-5 max-w-md mx-auto">
      <div className="mb-6">
        <h1 className="text-white text-3xl text-center mb-2.5 font-bold">
          Create Account
        </h1>
        <p className="text-white text-center text-lg">
          Join OUTFYT and start shopping smarter today.
        </p>
      </div>
      <form action="" className="mb-10">
        <div className="mb-6">
          <div>
            <label htmlFor="name" className="text-white mb-1.5 block">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="bg-[#9E9D9D] p-2 rounded w-full outline-none mb-2.5"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-white mb-1.5 block">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-[#9E9D9D] p-2 rounded w-full outline-none mb-2.5"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-white mb-1.5 block">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                className="bg-[#9E9D9D] p-2 rounded w-full outline-none"
              />
              <FaEyeSlash className="absolute top-1/2 -translate-y-1/2 right-3 z-10 text-[#000000]" />
            </div>
          </div>
          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              name=""
              id=""
              className="bg-[#E48045] mr-2"
            />
            <label htmlFor="" className="text-white ">
              Agree with <u> Terms & Conditions</u>
            </label>
          </div>
        </div>
        <button className="bg-[#E48045] text-white py-2 px-4 rounded-2xl w-full  hover:bg-[#E64A19]">
          Sign Up
        </button>
      </form>
      <div className="relative my-5 ">
        <span className="w-full h-px bg-[#626262] block"></span>
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#212121] px-3 text-[#626262] block">
          or with
        </span>
      </div>
      <div className=" flex justify-center gap-9">
        <div className="border w-10 h-10 border-white rounded-full flex justify-center items-center">
          <FaApple size={20} />
        </div>
        <div className="border w-10 h-10 border-white rounded-full flex justify-center items-center">
          <FcGoogle size={20} />
        </div>
        <div className="border w-10 h-10 border-white rounded-full flex justify-center items-center">
          <FaFacebookF size={20} color="#1877F2"/>
        </div>
      </div>
      <p className="text-white text-center mt-5">
        Already have an account? <u className="cursor-pointer text-[#E48045]">Sign In</u>
      </p>
    </div>
  );
}
