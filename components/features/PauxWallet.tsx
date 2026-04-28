import React from "react";
import { motion } from "framer-motion";

import { IoWalletOutline } from "react-icons/io5";

export default function PauxWallet() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="mx-auto flex max-w-[1200px] flex-col items-center px-6 py-14 md:flex-row md:justify-between md:space-x-14"
    >
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.08, duration: 0.6, ease: "easeOut" }}
        className="container flex flex-col items-center gap-6 md:items-start"
      >
        <div className="flex flex-col items-center md:items-start gap-2">
          <IoWalletOutline className="text-3xl font-extrabold" />
          <h1 className="text-xl font-extralight">PAUX WALLET</h1>
        </div>

        <div>
          <p className="text-2xl md:text-4xl font-bold leading-tight max-w-sm text-center md:text-left">
            Lightweight, and Customizable{" "}
            <span className="whitespace-nowrap">in-app</span> wallet
          </p>
        </div>

        <div>
          <p className="text-md max-w-xs text-center md:text-left">
            Manage funds, sign transactions, and interact with EVM-compatible
            chains
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.16, duration: 0.6, ease: "easeOut" }}
        className="w-full"
      >
        <img
          alt="Wallet"
          src="https://dewdrip.github.io/eth-mobile/assets/wallet.png"
          className="object-cover -ml-12"
        />
      </motion.div>
    </motion.div>
  );
}
