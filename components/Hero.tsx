import Link from "next/link";
import React, { useState } from "react";

import { RxClipboardCopy } from "react-icons/rx";
import { TiTickOutline } from "react-icons/ti";

export default function Hero() {
  const [isCopied, setIsCopied] = useState(false);

  const copyCommand = async () => {
    try {
      // Copy text to clipboard
      await navigator.clipboard.writeText(
        "https://github.com/dewdrip/scaffold-eth-mobile.git",
      );
      setIsCopied(true); // Show "Copied!" effect

      // Remove "Copied!" text after 2 seconds
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  return (
    <section className="p-6 max-w-[1200px] mx-auto">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between md:justify-between md:space-x-14 md:mt-14">
        <div className="flex flex-col items-center md:items-start">
          {/* Logo */}
          <h1 className="text-3xl md:text-5xl text-center md:text-left font-bold tracking-tight mb-6">
            Scaffold-ETH Mobile
          </h1>

          {/* Main heading */}
          <p className="max-w-md mx-auto text-lg sm:text-xl text-center md:text-left text-gray-400 mb-8">
            Build native mobile dApps using{" "}
            <span className="text-black">lightweight</span>,{" "}
            <span className="text-black">composable</span>, and{" "}
            <span className="text-black">type-safe</span> modules that interface
            with Ethereum
          </p>

          {/* Action buttons */}
          <div className="flex gap-4 mb-12">
            <button className="px-4 py-2 bg-orange-400 hover:bg-orange-500 rounded-md font-bold transition-colors text-sm text-gray-600">
              Get started
            </button>
            <Link
              href="https://github.com/dewdrip/scaffold-eth-mobile"
              className="px-4 py-2 bg-gray-100 border hover:bg-gray-200 rounded-md font-bold transition-colors text-sm text-gray-600"
            >
              GitHub
            </Link>
          </div>
        </div>

        {/* Package manager tabs */}
        <div className="w-full max-w-[500px] flex flex-col items-center md:items-start">
          <div className="w-full max-w-[500px] mx-auto bg-gray-800/50 rounded-lg overflow-hidden backdrop-blur-sm border-2 border-gray-100">
            <div className="bg-white">
              <button className="px-4 py-2 border-b-2 border-orange-400 font-medium">
                git
              </button>
            </div>
            <div className="p-4 pb-4 pr-20 text-left bg-gray-100 relative">
              <code>
                <span className="text-purple-500">git</span>{" "}
                <span className="text-blue-900">
                  clone https://github.com/dewdrip/scaffold-eth-mobile
                </span>
              </code>

              <button
                onClick={copyCommand}
                className="text-xl text-gray-500 border border-gray-300 hover:bg-gray-200 duration-200 rounded-md p-2 absolute top-4 right-4"
              >
                {isCopied ? (
                  <TiTickOutline className="text-green-400" />
                ) : (
                  <RxClipboardCopy />
                )}
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-4 mt-4 md:mt-10">
            <Link
              href="https://github.com/dewdrip/scaffold-eth-mobile/stargazers"
              target="_blank"
            >
              <div className="flex items-center gap-2 bg-gray-100 border hover:bg-gray-200 px-3 py-[0.35rem] rounded-lg">
                <span className="text-sm text-gray-600 font-bold bg-white rounded-md px-2">
                  stars
                </span>
                <span className="text-sm font-bold">11</span>
              </div>
            </Link>

            <Link
              href="https://github.com/dewdrip/scaffold-eth-mobile/blob/main/LICENCE"
              target="_blank"
            >
              <div className="flex items-center gap-2 bg-gray-100 border hover:bg-gray-200 px-3 py-[0.35rem] rounded-lg">
                <span className="text-sm text-gray-600 font-bold bg-white rounded-md px-3">
                  license
                </span>
                <span className="text-sm font-bold">MIT</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Feature grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        <div className="p-6 bg-transparent border border-gray-200 rounded-lg backdrop-blur-sm">
          <h3 className="text-lg font-bold mb-2">Modular</h3>
          <p className="text-gray-400">
            Composable modules to build applications & libraries with speed
          </p>
        </div>
        <div className="p-6 bg-transparent border border-gray-200 rounded-lg backdrop-blur-sm">
          <h3 className="text-lg font-bold mb-2">Lightweight</h3>
          <p className="text-gray-400">
            Tiny bundle size optimized for tree-shaking
          </p>
        </div>
        <div className="p-6 bg-transparent border border-gray-200 rounded-lg backdrop-blur-sm">
          <h3 className="text-lg font-bold mb-2">Performant</h3>
          <p className="text-gray-400">
            Optimized architecture for seamless experience across a wide range
            of devices
          </p>
        </div>
        <div className="p-6 bg-transparent border border-gray-200 rounded-lg backdrop-blur-sm">
          <h3 className="text-lg font-bold mb-2">Typed Utils</h3>
          <p className="text-gray-400">
            Flexible programmatic Utils with extensive TypeScript typing
          </p>
        </div>
      </div>
    </section>
  );
}
