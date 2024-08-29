import React from "react";
import Image from "next/image";
import Pizza from "../../public/pizza.png";

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="text-center">
        <div className="mb-4 relative w-24 h-24 mx-auto">
          <Image src={Pizza} alt="Pizza Logo" fill className="animate-bounce" />
        </div>
        <p className="text-white text-xl font-semibold">
          Loading slice of heaven...
        </p>
      </div>
    </div>
  );
};

export default Loading;
