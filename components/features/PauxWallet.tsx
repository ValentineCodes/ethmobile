import React from "react";

import { motion } from "framer-motion";
import { IoWalletOutline } from "react-icons/io5";

export default function PauxWallet() {
  return (
    <div className="px-6 py-14 max-w-[1200px] mx-auto flex flex-col md:flex-row items-center md:justify-between md:space-x-14">
      <div className="container flex flex-col items-center gap-6 md:items-start">
        <motion.div
          initial={{
            x: 100,
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 0.7, ease: "easeInOut", delay: 0.2 }}
          className="flex flex-col items-center md:items-start gap-2"
        >
          <IoWalletOutline className="text-3xl font-extrabold" />
          <h1 className="text-xl font-extralight">PAUX WALLET</h1>
        </motion.div>

        <motion.div
          initial={{
            x: 100,
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 0.7, ease: "easeInOut", delay: 0.35 }}
        >
          <p className="text-2xl md:text-4xl font-bold leading-tight max-w-sm text-center md:text-left">
            Lightweight, and Customizable{" "}
            <span className="whitespace-nowrap">in-app</span> wallet
          </p>
        </motion.div>

        <motion.div
          initial={{
            x: 100,
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 0.7, ease: "easeInOut", delay: 0.35 }}
        >
          <p className="text-md max-w-xs text-center md:text-left">
            Manage funds, sign transactions, and interact with EVM-compatible
            chains
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{
          x: -100,
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="w-full"
      >
        <img
          alt="Wallet"
          src="/images/wallet.png"
          className="object-cover -ml-12 md:-ml-32"
        />
      </motion.div>
    </div>
  );
}
