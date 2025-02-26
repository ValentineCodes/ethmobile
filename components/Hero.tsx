import React from "react";

import { motion } from "framer-motion";
import { Button } from "@headlessui/react";

type Props = {};

export default function Hero({}: Props) {
  return (
    <section className="px-6 py-14 max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between md:justify-between md:space-x-14 md:mt-16">
      <div className="container flex flex-col gap-6 items-center md:items-start">
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
        >
          <h1 className="text-5xl font-extrabold">Scaffold-ETH Mobile</h1>
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
          <p className="text-2xl text-gray-400 max-w-lg text-center md:text-left">
            Become the founder of a native mobile dApp with your OWN
            customizable in-app wallet using lightweight, composable, and
            type-safe modules for seamless Ethereum integrations
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
          transition={{ duration: 0.7, ease: "easeInOut", delay: 0.5 }}
          className="flex gap-4"
        >
          <Button className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
            Get Started
          </Button>
          <Button className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
            Why SEM?
          </Button>
          <Button className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
            GitHub
          </Button>
        </motion.div>
      </div>

      <div className="flex flex-col gap-6">
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
        >
          <div className="px-6 pt-4 pb-2 bg-gray-700">
            <ul className="text-xl flex justify-start">
              <li className="border-b-2 border-b-orange-300 pb-2 px-4">git</li>
            </ul>
          </div>

          <div className="px-6 py-4 bg-gray-800 h-[150px]">
            <code>
              git clone https://github.com/dewdrip/scaffold-eth-mobile
            </code>
          </div>
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
          transition={{ duration: 0.7, ease: "easeInOut", delay: 0.5 }}
          className="flex justify-between"
        >
          <Button className="inline-flex w-[30%] items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
            Get Started
          </Button>
          <Button className="inline-flex w-[30%] items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
            Why SEM?
          </Button>
          <Button className="inline-flex w-[30%] items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
            GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
