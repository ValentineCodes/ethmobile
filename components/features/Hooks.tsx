import React from "react";
import { motion } from "framer-motion";

import { GiHook } from "react-icons/gi";

export default function Hooks() {
  return (
    <motion.section
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
        className="container flex flex-1 flex-col items-center gap-6 md:items-start"
      >
        <div className="flex flex-col items-center md:items-start gap-2">
          <GiHook className="text-3xl font-extrabold dark:text-white" />
          <h1 className="text-xl font-extralight dark:text-white">
            HOOKS AND UTILS
          </h1>
        </div>

        <div>
          <p className="max-w-sm text-center text-2xl font-bold leading-tight dark:text-white md:text-left md:text-4xl">
            Custom &quot;Wagmi&quot; hooks and utils for common use cases
          </p>
        </div>

        <div>
          <p className="max-w-xs text-center text-md dark:text-slate-300 md:text-left">
            Designed to simplify interactions with your wallet and smart
            contracts
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.16, duration: 0.6, ease: "easeOut" }}
        className="bg-surface-soft border-theme mt-12 flex w-full max-w-[540px] flex-col gap-2 overflow-x-scroll rounded-2xl border p-6 font-mono text-xs shadow-[0_3px_10px_rgb(0,0,100,0.08)] scrollbar-hide md:mt-0"
      >
        <div className="flex gap-2 whitespace-nowrap">
          <span className="text-[#C586C0]">import</span>
          <span>
            {"{"} useScaffoldReadContract {"}"}
          </span>
          <span className="text-[#C586C0]">from</span>
          <span className="text-[#CE9178]">&quot;@/hooks/eth-mobile&quot;</span>
          <span className=" -ml-2">;</span>
        </div>

        <div className="flex gap-2 whitespace-nowrap">
          <span className="text-[#C586C0]">import</span>
          <span>
            {"{"} CopyableText {"}"}
          </span>
          <span className="text-[#C586C0]">from</span>
          <span className="text-[#CE9178]">
            &quot;@/components/eth-mobile&quot;
          </span>
          <span className=" -ml-2">;</span>
        </div>

        <div className="flex gap-2 whitespace-nowrap">
          <span className="text-[#C586C0]">import</span>
          <span>
            {"{"} truncateAddress {"}"}
          </span>
          <span className="text-[#C586C0]">from</span>
          <span className="text-[#CE9178]">&quot;@/utils/eth-mobile&quot;</span>
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
    </motion.section>
  );
}
