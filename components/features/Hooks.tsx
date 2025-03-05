import React from "react";

import { motion } from "framer-motion";
import { GiHook } from "react-icons/gi";

export default function Hooks() {
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
          <GiHook className="text-3xl font-extrabold" />
          <h1 className="text-xl font-extralight">HOOKS AND UTILS</h1>
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
            Custom &quot;Wagmi&quot; hooks and utils for common use cases
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
            Designed to simplify interactions with your wallet and smart
            contracts
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
        className="w-full max-w-[540px] mt-12 md:mt-0 flex flex-col border-[20px] border-white gap-2 bg-blue-50 p-6 rounded-2xl font-mono text-xs overflow-x-scroll shadow-[0_3px_10px_rgb(0,0,100,0.2)]"
      >
        <div className="flex gap-2 whitespace-nowrap">
          <span className="text-[#C586C0]">import</span>
          <span>
            {"{"} useScaffoldReadContract {"}"}
          </span>
          <span className="text-[#C586C0]">from</span>
          <span className="text-[#CE9178]">
            &quot;../hooks/eth-mobile&quot;
          </span>
          <span className=" -ml-2">;</span>
        </div>

        <div className="flex gap-2 whitespace-nowrap">
          <span className="text-[#C586C0]">import</span>
          <span>
            {"{"} CopyableText {"}"}
          </span>
          <span className="text-[#C586C0]">from</span>
          <span className="text-[#CE9178]">
            &quot;../components/eth-mobile&quot;
          </span>
          <span className=" -ml-2">;</span>
        </div>

        <div className="flex gap-2 whitespace-nowrap">
          <span className="text-[#C586C0]">import</span>
          <span>
            {"{"} truncateAddress {"}"}
          </span>
          <span className="text-[#C586C0]">from</span>
          <span className="text-[#CE9178]">
            &quot;../utils/eth-mobile&quot;
          </span>
          <span className="-ml-2">;</span>
        </div>

        <div className="mt-4 flex gap-2">
          <span className="text-[#C586C0]">const</span>
          <span className="whitespace-nowrap">
            {"{"} data: yourContractOwner {"} ="}
          </span>
          <span className="text-[#4EC9B0]">useScaffoldReadContract</span>
          <span className="-ml-2">
            {"("}
            {"{"}
          </span>
        </div>

        <div className="flex gap-2 ml-4">
          <span className="text-blue-400/75">contractName</span>
          <span className="-ml-2">:</span>
          <span className="text-[#CE9178]">&quot;YourContract&quot;</span>
          <span className="-ml-2">,</span>
        </div>

        <div className="flex gap-2 ml-4">
          <span className="text-blue-400/75">functionName</span>
          <span className="-ml-2">:</span>
          <span className="text-[#CE9178]">&quot;owner&quot;</span>
          <span className="-ml-2">,</span>
        </div>

        <div className="flex gap-2">
          <span>
            {"}"}
            {")"}
          </span>
        </div>

        <div className="mt-4 flex gap-2">
          <span className="text-[#808080]">{"<"}</span>
          <span className="text-[#4EC9B0] -ml-2">CopyableText</span>
        </div>
        <div className="ml-8 flex gap-2">
          <span className="text-blue-400/75">displayText</span>
          <span className="-mx-2 whitespace-nowrap">{"={"}</span>
          <span className="text-[#4EC9B0]">truncateAddress</span>
          <span className="-ml-2">(yourContractOwner){"}"}</span>
        </div>
        <div className="ml-8 flex gap-2">
          <span className="text-blue-400/75">value</span>
          <span className="-mx-2">
            {"={"}yourContractOwner{"}"}
          </span>
        </div>
        <div className="flex">
          <span className="text-[#808080]">/&gt;</span>
        </div>
      </motion.div>
    </section>
  );
}
