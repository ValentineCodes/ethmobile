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
  const [activeCommandTab, setActiveCommandTab] = useState<"npx" | "git">(
    "npx",
  );
  const [starsCount, setStarsCount] = useState<string>("");
  const { isInFarcaster, user } = useFarcasterContext();

  const commandByTab = {
    npx: "npx eth-mobile",
    git: "git clone https://github.com/eth-mobile/eth-mobile",
  } as const;

  const copyCommand = async () => {
    try {
      // Copy text to clipboard
      await navigator.clipboard.writeText(commandByTab[activeCommandTab]);
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
          "https://api.github.com/repos/eth-mobile/eth-mobile",
        );
        setStarsCount(repo.stargazers_count);
      } catch (error) {
        console.log("Failed to get stargazers count: ", error);
      }
    })();
  }, []);

  const sectionReveal = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
  };

  const formattedStars = starsCount
    ? new Intl.NumberFormat("en-US", {
        notation: "compact",
        maximumFractionDigits: 1,
      }).format(Number(starsCount))
    : "...";

  return (
    <section className="bg-site mx-auto max-w-[1200px] px-6 pb-12 pt-6 transition-colors duration-300">
      {/* Farcaster Welcome Message */}
      {isInFarcaster && user && (
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-3 mb-2">
            <div className="relative w-8 h-8">
              <Image
                alt={user.displayName}
                fill
                src={user.pfpUrl || "/images/logo.png"}
                className="border-theme rounded-full border-2 object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/images/logo.png";
                }}
                unoptimized={true}
              />
            </div>
            <span className="text-muted text-lg">
              Welcome,{" "}
              <span className="font-bold text-black dark:text-white">
                {user.displayName}
              </span>
            </span>
          </div>
        </div>
      )}

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionReveal}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mt-8 flex flex-col items-center justify-between md:mt-12 md:flex-row md:items-end md:space-x-14"
      >
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.08, duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center md:items-start"
        >
          {/* Logo */}
          <h1 className="mb-6 text-center text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 md:text-left md:text-6xl">
            ETH Mobile
          </h1>

          {/* Main heading */}
          <p className="text-muted mx-auto mb-8 max-w-md text-center text-lg sm:text-xl md:text-left">
            Build native mobile dApps using{" "}
            <span className="text-slate-900 dark:text-slate-100">
              lightweight
            </span>
            ,{" "}
            <span className="text-slate-900 dark:text-slate-100">
              composable
            </span>
            , and{" "}
            <span className="text-slate-900 dark:text-slate-100">
              type-safe
            </span>{" "}
            modules that interface with Ethereum
          </p>

          {/* Action buttons */}
          <div className="mb-12 flex flex-wrap gap-3 md:mb-0">
            <Link
              href="https://docs.ethmobile.dev"
              className="whitespace-nowrap rounded-md bg-[#f97316] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#ea580c]"
            >
              Get Started
            </Link>
            <button
              onClick={() => setShowWhy(true)}
              className="bg-surface border-theme text-muted whitespace-nowrap rounded-md border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-surface-soft"
            >
              Why Us?
            </button>
            <Link
              href="https://t.me/ethmobile_io"
              className="bg-surface border-theme text-muted rounded-md border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-surface-soft"
            >
              Telegram
            </Link>
          </div>

          {/* Clean one-liner */}
          {isInFarcaster && user && (
            <div className="text-center mt-6">
              <p className="text-muted text-lg">
                Re-use your <span className="text-theme">miniapp</span> code
              </p>
            </div>
          )}
        </motion.div>

        {/* Package manager tabs */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.16, duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-[500px] flex flex-col items-center md:items-start"
        >
          <div className="bg-surface border-theme mx-auto w-full max-w-[500px] overflow-hidden rounded-lg border shadow-sm">
            <div className="bg-surface-soft border-theme flex border-b">
              <button
                onClick={() => setActiveCommandTab("npx")}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  activeCommandTab === "npx"
                    ? "border-b-2 border-[#f97316] text-theme"
                    : "text-muted hover:text-theme"
                }`}
              >
                npx
              </button>
              <button
                onClick={() => setActiveCommandTab("git")}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  activeCommandTab === "git"
                    ? "border-b-2 border-[#f97316] text-theme"
                    : "text-muted hover:text-theme"
                }`}
              >
                git
              </button>
            </div>
            <div className="bg-surface relative pr-20 text-left">
              <div className="scrollbar scrollbar-track-slate-200 scrollbar-thumb-slate-300 overflow-x-auto whitespace-nowrap py-5 pl-4 dark:scrollbar-track-slate-900 dark:scrollbar-thumb-slate-700">
                <code>
                  <span className="text-orange-500">{activeCommandTab} </span>
                  <span className="text-theme">
                    {commandByTab[activeCommandTab].replace(
                      `${activeCommandTab} `,
                      "",
                    )}
                  </span>
                </code>
              </div>

              <button
                onClick={copyCommand}
                className="text-muted border-theme absolute right-4 top-4 rounded-md border p-2 text-xl duration-200 hover:bg-surface-soft"
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
          <div className="mt-5 flex items-center gap-3 md:mt-8">
            <Link
              href="https://github.com/eth-mobile/eth-mobile/stargazers"
              target="_blank"
            >
              <div className="bg-surface-soft border-theme flex items-center gap-2 rounded-md border px-3 py-1 hover:brightness-95">
                <span className="bg-surface text-muted rounded px-2 text-sm font-medium">
                  stars
                </span>
                <span className="text-theme text-sm font-semibold">
                  {formattedStars}
                </span>
              </div>
            </Link>

            <Link
              href="https://github.com/eth-mobile/eth-mobile/blob/main/LICENCE"
              target="_blank"
            >
              <div className="bg-surface-soft border-theme flex items-center gap-2 rounded-md border px-3 py-1 hover:brightness-95">
                <span className="bg-surface text-muted rounded px-3 text-sm font-medium">
                  license
                </span>
                <span className="text-theme text-sm font-semibold">MIT</span>
              </div>
            </Link>
          </div>
        </motion.div>
      </motion.div>

      {/* Feature grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
      >
        <motion.div
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-surface border-theme rounded-lg border p-6"
        >
          <h3 className="text-theme mb-2 text-lg font-semibold">Modular</h3>
          <p className="text-muted">
            Composable modules to build applications with speed
          </p>
        </motion.div>
        <motion.div
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-surface border-theme rounded-lg border p-6"
        >
          <h3 className="text-theme mb-2 text-lg font-semibold">Lightweight</h3>
          <p className="text-muted">
            Tiny bundle size optimized for memory management
          </p>
        </motion.div>
        <motion.div
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-surface border-theme rounded-lg border p-6"
        >
          <h3 className="text-theme mb-2 text-lg font-semibold">Performant</h3>
          <p className="text-muted">
            Optimized architecture for seamless experience across a wide range
            of devices
          </p>
        </motion.div>
        <motion.div
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-surface border-theme rounded-lg border p-6"
        >
          <h3 className="text-theme mb-2 text-lg font-semibold">Typed Utils</h3>
          <p className="text-muted">
            Flexible programmatic utilities with extensive TypeScript typing
          </p>
        </motion.div>
      </motion.div>

      {/* Miniapp to Mobile section - moved up to fill whitespace */}
      {isInFarcaster && user && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <div className="flex justify-center items-center gap-2 mb-4">
              <span className="text-2xl">🚀</span>
              <h3 className="text-muted text-xl font-extralight">
                MINIAPP TO MOBILE
              </h3>
            </div>
            <h4 className="mb-4 text-2xl font-bold leading-tight dark:text-white md:text-3xl">
              From Farcaster Miniapp to{" "}
              <span className="text-black dark:text-white">
                Native Mobile App
              </span>
            </h4>
            <p className="text-muted mx-auto max-w-2xl text-md">
              ETH Mobile is perfectly positioned to help you scale your
              successful Farcaster miniapp into a full-featured native mobile
              application, reusing your existing React codebase.
            </p>
          </div>

          <div className="bg-surface-soft border-theme text-theme rounded-2xl border p-6 text-center">
            <div className="flex justify-center items-center gap-4 mb-4">
              <div className="bg-surface border-theme flex items-center gap-2 rounded-full border px-3 py-2">
                <span className="text-lg">🔮</span>
                <span className="font-medium text-sm">Farcaster Miniapp</span>
              </div>
              <span className="text-xl">→</span>
              <div className="bg-surface border-theme flex items-center gap-2 rounded-full border px-3 py-2">
                <span className="text-lg">📱</span>
                <span className="font-medium text-sm">Native Mobile App</span>
              </div>
            </div>
            <h5 className="text-lg font-bold mb-3">Ready to Make the Jump?</h5>
            <p className="text-sm mb-4 opacity-90">
              Join successful Farcaster projects that have scaled to native
              mobile apps.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#contact"
                className="rounded-lg bg-[#f97316] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#ea580c]"
              >
                Get Started Today
              </a>
              <a
                href="https://docs.ethmobile.dev"
                className="border-theme rounded-lg border px-4 py-2 text-sm font-medium transition-colors hover:bg-surface"
              >
                View Documentation
              </a>
            </div>
          </div>
        </motion.div>
      )}

      {showWhy && (
        <motion.div
          initial={{ opacity: 0, backgroundColor: "rgba(0,0,0,0)" }}
          animate={{ opacity: 1, backgroundColor: "rgba(0,0,0,0.3)" }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          onClick={() => setShowWhy(false)}
          className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center"
        >
          <div className="bg-surface text-muted border-theme flex max-h-[500px] w-[80%] max-w-[500px] flex-col gap-4 overflow-y-scroll rounded-lg border p-6 text-sm">
            <div className="flex items-center justify-between">
              <h1 className="text-lg text-black dark:text-white">THE VISION</h1>
              <IoCloseOutline
                className="text-3xl cursor-pointer"
                onClick={() => setShowWhy(false)}
              />
            </div>

            <p>
              We aim not only to build a template for React Native Developers to
              build native dApps, but to encourage mobile dApp development by
              facilitating the development and learning process.
            </p>

            <p>
              Since the beginning, web3 has tunnel visioned and left the mobile
              sector unattended; A sector with the potential to onboard a lot
              more users into web3 due to its affordability, accessibility, and
              portability
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
