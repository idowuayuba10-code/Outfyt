import React, { useEffect } from "react";
import { FaShopify } from "react-icons/fa";

export default function Onboarding() {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = "/login";
    }, 2000);
  }, []);
  return (
    <div className="bg-[#E48045] h-screen w-full flex justify-center items-center flex-col gap-5">
      <FaShopify className="text-8xl text-white animate-dropdown" />
      <h1 className="text-white text-3xl text-center mb-2.5 font-bold animate-slidein">
        Welcome to OUTFYT
      </h1>
    </div>
  );
}
