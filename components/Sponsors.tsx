import React from "react";
import Image from "next/image";

export default function Sponsors() {
  return (
    <div className="px-6 py-14 max-w-[1200px] mx-auto">
      <h2 className="text-md md:text-lg text-center font-bold text-gray-800 mb-4">
        Sponsored By
      </h2>
      <div className="flex justify-center items-center h-16">
        <img
          src="/images/sponsors/gitcoin.png"
          alt="Gitcoin"
          className="object-contain w-64"
        />
      </div>
    </div>
  );
}
