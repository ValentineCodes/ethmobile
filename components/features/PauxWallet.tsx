import React from "react";

import { motion } from "framer-motion";
import { IoWalletOutline } from "react-icons/io5";
import Image from "next/image";

type Props = {};

export default function PauxWallet({}: Props) {
  return (
    <section className="px-6 py-14 max-w-[1200px] mx-auto flex flex-col md:flex-row items-center md:justify-between md:space-x-14">
      <div className="container flex-1 flex flex-col items-center gap-6 md:items-start">
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
          <IoWalletOutline className="text-5xl font-extrabold" />
          <h1 className="text-2xl font-extralight">PAUX WALLET</h1>
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
          <p className="text-4xl text-gray-400 max-w-sm text-center md:text-left">
            Customizable, and Lightweight{" "}
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
          <p className="text-lg text-gray-400 max-w-xs text-center md:text-left">
            Manage funds, sign transactions, and interact with EVM-compatible
            chains
          </p>
        </motion.div>
      </div>

      <div className="flex-1 flex flex-col gap-6">
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
          className="w-full max-w-[500px] mt-12 md:mt-0 flex justify-center ml-10 md:ml-0"
        >
          <div className="relative w-[200px] md:w-[300px] aspect-square rounded-xl shadow-[0px_0px_4px_0px_#15f7d6]">
            <Image
              alt="Wallet Metadata"
              src="/images/wallet_metadata.png"
              fill
              className="rounded-xl"
            />

            <div className="absolute top-[100px] right-[160px] md:top-[150px] md:right-[250px] w-[150px] md:w-[200px] aspect-square rounded-xl shadow-[0px_0px_4px_0px_#15f7d6]">
              <Image
                alt="Wallet Metadata"
                src="/images/wallet_features.png"
                fill
                className="rounded-xl"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
