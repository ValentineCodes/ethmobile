import React from "react";

import { motion } from "framer-motion";

import { IoBugOutline } from "react-icons/io5";

import Image from "next/image";

type Props = {};

export default function ContractDebugger({}: Props) {
  return (
    <div className="px-6 py-14 max-w-[1200px] mx-auto flex flex-col md:flex-row-reverse items-center md:justify-between md:space-x-14">
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
          <IoBugOutline className="text-3xl font-extrabold" />
          <h1 className="text-xl font-extralight">CONTRACT DEBUGGER</h1>
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
            Adaptable Solidity playground
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
            Debug and refine your smart contracts with a live-updating frontend.
            You can read from, write to, and monitor the state of your deployed
            smart contracts
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
          className="w-full max-w-[500px] mt-12 md:mt-0 flex justify-center"
        >
          <div className="relative w-[200px] md:w-[300px] aspect-[9/12] rounded-xl shadow-[0px_0px_4px_0px_#ccc]">
            <Image
              alt="Wallet Metadata"
              src="/images/debug_contract_metadata.png"
              fill
              className="rounded-xl"
            />

            <div className="absolute top-[100px] left-[140px] md:top-[150px] md:left-[200px] w-[200px] aspect-[9/13] rounded-xl shadow-[0px_0px_4px_0px_#ccc]">
              <Image
                alt="Wallet Metadata"
                src="/images/debug_contract_methods.png"
                fill
                className="rounded-xl"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
