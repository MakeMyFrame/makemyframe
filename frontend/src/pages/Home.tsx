import React from "react";
import LeftSidebar from "../components/LeftSidebar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-w-screen min-h-screen flex">
      <LeftSidebar />
      <section className="w-full min-h-screen p-4">
        <div className="h-[7em] w-[12em] flex rounded-2xl shadow-lg items-center justify-center bg-yellow-300 text-2xl font-semibold">
          Create +
        </div>
        <p className="text-2xl font-semibold my-6 ml-4">Trending Frames</p>

        <div className="flex flex-wrap gap-6">
          <div className="w-fit">
            <div className="h-[7em] w-[12em] flex rounded-2xl shadow-lg items-center justify-center bg-green-300 text-2xl font-semibold">
              Create +
            </div>
            <p className="text-center mt-2">DAO Voting Frame</p>
          </div>
          <div className="w-fit">
            <div className="h-[7em] w-[12em] flex rounded-2xl shadow-lg items-center justify-center bg-yellow-300 text-2xl font-semibold">
              Create +
            </div>
            <p className="text-center mt-2">NFT minter</p>
          </div>
          <div className="w-fit">
            <div className="h-[7em] w-[12em] flex rounded-2xl shadow-lg items-center justify-center bg-red-300 text-2xl font-semibold">
              Create +
            </div>
            <p className="text-center mt-2">Advertisement</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
