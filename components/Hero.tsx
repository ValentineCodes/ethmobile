import axios from "axios";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import Image from "next/image";

import { RxClipboardCopy } from "react-icons/rx";
import { TiTickOutline } from "react-icons/ti";
import { useFarcasterContext } from "@/hooks/useFarcasterContext";

export default function Hero() {
  const [isCopied, setIsCopied] = useState(false);
  const [showWhy, setShowWhy] = useState(false);
  const [starsCount, setStarsCount] = useState("");
  const { isInFarcaster, user } = useFarcasterContext();

  const copyCommand = async () => {
    try {
      // Copy text to clipboard
      await navigator.clipboard.writeText(
        "https://github.com/dewdrip/eth-mobile.git",
      );
      setIsCopied(true); // Show "Copied!" effect

      // Remove "Copied!" text after 2 seconds
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const { data: repo } = await axios.get(
          "https://api.github.com/repos/dewdrip/eth-mobile",
        );
        setStarsCount(repo.stargazers_count);
      } catch (error) {
        console.log("Failed to get stargazers count: ", error);
      }
    })();
  }, []);

  return (
    <section className="p-6 max-w-[1200px] mx-auto bg-white">
      {/* Farcaster Welcome Message */}
      {isInFarcaster && user && (
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-3 mb-2">
            <div className="relative w-8 h-8">
              <Image
                alt={user.displayName}
                fill
                src={user.pfpUrl || "/images/logo.png"}
                className="rounded-full object-cover border-2 border-gray-200"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/images/logo.png";
                }}
                unoptimized={true}
              />
            </div>
            <span className="text-lg text-gray-600">
              Welcome,{" "}
              <span className="font-bold text-black">{user.displayName}</span>
            </span>
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row items-center md:items-end justify-between md:justify-between md:space-x-14 md:mt-14">
        <div className="flex flex-col items-center md:items-start">
          {/* Logo */}
          <h1 className="text-3xl md:text-5xl text-center md:text-left font-bold tracking-tight mb-6">
            ETH Mobile
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
          <div className="flex gap-4 mb-12 md:mb-0">
            <Link
              href="https://docs.ethmobile.io"
              className="px-4 py-2 bg-orange-400 hover:bg-orange-500 rounded-md font-bold transition-colors text-sm text-gray-800 whitespace-nowrap"
            >
              Docs
            </Link>
            <a
              href="#contact"
              className="px-4 py-2 bg-gray-100 border hover:bg-gray-200 rounded-md font-bold transition-colors text-sm text-gray-600 whitespace-nowrap"
            >
              Why Us?
            </a>
            <Link
              href="https://t.me/ethmobile_io"
              className="px-4 py-2 bg-gray-100 border hover:bg-gray-200 rounded-md font-bold transition-colors text-sm text-gray-600"
            >
              Join Telegram
            </Link>
          </div>

          {/* Clean one-liner */}
          <div className="text-center mt-6">
            <p className="text-lg text-gray-400">
              Re-use your <span className="text-black">miniapp</span> code
            </p>
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
            <div className="pr-20 text-left bg-gray-100 relative">
              <div className="overflow-x-auto whitespace-nowrap py-4 pl-4">
                <code>
                  <span className="text-purple-500">
                    git{" "}
                    <span className="text-blue-900">
                      clone https://github.com/dewdrip/eth-mobile
                    </span>
                  </span>{" "}
                </code>
              </div>

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
          <div className="flex items-center gap-4 mt-4 md:mt-10">
            <Link
              href="https://github.com/dewdrip/eth-mobile/stargazers"
              target="_blank"
            >
              <div className="flex items-center gap-2 bg-gray-100 border hover:bg-gray-200 px-3 py-[0.35rem] rounded-lg">
                <span className="text-sm text-gray-600 font-bold bg-white rounded-md px-2">
                  stars
                </span>
                <span className="text-sm font-bold">{starsCount}</span>
              </div>
            </Link>

            <Link
              href="https://github.com/dewdrip/eth-mobile/blob/main/LICENCE"
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
            Composable modules to build applications with speed
          </p>
        </div>
        <div className="p-6 bg-transparent border border-gray-200 rounded-lg backdrop-blur-sm">
          <h3 className="text-lg font-bold mb-2">Lightweight</h3>
          <p className="text-gray-400">
            Tiny bundle size optimized for memory management
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
            Flexible programmatic utilities with extensive TypeScript typing
          </p>
        </div>
      </div>

      {/* Miniapp to Mobile section - moved up to fill whitespace */}
      <div className="mt-16">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-2 mb-4">
            <span className="text-2xl">🚀</span>
            <h3 className="text-xl font-extralight text-gray-600">
              MINIAPP TO MOBILE
            </h3>
          </div>
          <h4 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
            From Farcaster Miniapp to{" "}
            <span className="text-black">Native Mobile App</span>
          </h4>
          <p className="text-md text-gray-400 max-w-2xl mx-auto">
            ETH Mobile is perfectly positioned to help you scale your successful
            Farcaster miniapp into a full-featured native mobile application,
            reusing your existing React codebase.
          </p>
        </div>

        <div className="bg-gradient-to-r from-gray-800 to-gray-100 rounded-2xl p-6 text-white text-center">
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="flex items-center gap-2 bg-black/30 rounded-full px-3 py-2">
              <span className="text-lg">🔮</span>
              <span className="font-medium text-sm">Farcaster Miniapp</span>
            </div>
            <span className="text-xl">→</span>
            <div className="flex items-center gap-2 bg-black/30 rounded-full px-3 py-2">
              <span className="text-lg">📱</span>
              <span className="font-medium text-sm">Native Mobile App</span>
            </div>
          </div>
          <h5 className="text-lg font-bold mb-3">Ready to Make the Jump?</h5>
          <p className="text-sm mb-4 opacity-90">
            Join successful Farcaster projects that have scaled to native mobile
            apps.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#contact"
              className="px-4 py-2 bg-orange-400 hover:bg-orange-500 text-gray-800 rounded-lg font-bold transition-colors text-sm"
            >
              Get Started Today
            </a>
            <a
              href="https://docs.ethmobile.io"
              className="px-4 py-2 border border-white/30 rounded-lg font-bold hover:bg-white/10 transition-colors text-sm"
            >
              View Documentation
            </a>
          </div>
        </div>
      </div>

      {showWhy && (
        <motion.div
          initial={{ opacity: 0, backgroundColor: "rgba(0,0,0,0)" }}
          animate={{ opacity: 1, backgroundColor: "rgba(0,0,0,0.3)" }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          onClick={() => setShowWhy(false)}
          className="absolute w-full h-screen top-0 left-0 flex flex-col justify-center items-center"
        >
          <div className="w-[80%] max-h-[500px] max-w-[500px] bg-white p-6 rounded-lg flex flex-col gap-4 text-gray-600 text-sm overflow-y-scroll">
            <div className="flex items-center justify-between">
              <h1 className="text-lg text-black">THE VISION</h1>
              <IoCloseOutline
                className="text-3xl cursor-pointer"
                onClick={() => setShowWhy(false)}
              />
            </div>

            <p>
              The goal IS NOT to build a template for React Native Developers to
              build native dApps... Well, NOT QUITE!
            </p>

            <p>
              Since the beginning, web3 has tunnel visioned and left the mobile
              sector unattended; A sector with the potential to onboard a lot
              more users into web3 due to its affordability, accessibility, and
              portability... Busta Rhymes!
            </p>

            <Link
              href="https://vwo.com/blog/10-reasons-mobile-apps-are-better/"
              target="_blank"
              className="text-purple-400 hover:text-purple-500 duration-200"
            >
              Why mobile apps are better
            </Link>

            <p>
              <strong className="font-extrabold">ETH Mobile</strong> will serve
              as the foundation of THE NEW WAVE of mobile dApps by creating the
              best experience for mobile users. We aim to inspire founders to
              scale, to provide job opportunities, and to grow the web3
              community through smooth transitioning.
            </p>

            <p>Let&apos;s make web3 the best space to be! 🚀</p>
          </div>
        </motion.div>
      )}
    </section>
  );
}
