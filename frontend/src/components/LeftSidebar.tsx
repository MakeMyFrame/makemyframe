import React from "react";

const LeftSidebar = () => {
  return (
    <div className="p-4 w-[25%] min-w-[160px] max-w-[200px] h-screen bg-blue-200  shadow-lg rounded-e">
      <div className="flex gap-2 items-center">
        <img
          className="h-12 w-12 rounded-full"
          src="https://pbs.twimg.com/profile_images/1758730672922095616/LqsUCyWl_400x400.jpg"
          alt="profile pic"
        />
        <p className="font-semibold text-2xl">Shakti</p>
      </div>
      <div className="mt-6 text-lg divide-y divide-blue-600">
        <p className="p-2 text-center">Home</p>
        <p className="p-2 text-center">Frames</p>
        <p className="p-2 text-center">Templates</p>
      </div>
    </div>
  );
};

export default LeftSidebar;
