import React from "react";

import { motion } from "framer-motion";

import { IoBugOutline } from "react-icons/io5";

type Props = {};

export default function ContractDebugger({}: Props) {
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
          <IoBugOutline className="text-5xl font-extrabold" />
          <h1 className="text-2xl font-extralight">CONTRACT DEBUGGER</h1>
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
            Experiment with Solidity from an auto-updated frontend
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
            Consequat aute deserunt culpa officia esse aliquip tempor esse
            nostrud officia. Anim eu elit eiusmod consequat laboris veniam
            dolore.
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
          className="border border-white rounded-md shadow-[-3px_-3px_10px_2px_#15f7d6] w-full max-w-[500px] mt-12 md:mt-0"
        ></motion.div>
      </div>
    </section>
  );
}
