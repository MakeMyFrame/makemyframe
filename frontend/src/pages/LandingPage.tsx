import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center flex-col">
      <p className="text-4xl font-bold mb-6">Make My Frame</p>
      <p className="">
        Magical no-code tool for creating interesting and engaging frames on
        farcaster.
      </p>
      <Link to="/home" className="border px-6 py-4 rounded-lg mt-16 text-xl">
        Launch App
      </Link>
    </div>
  );
};

export default LandingPage;
