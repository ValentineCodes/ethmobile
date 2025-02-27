import React from "react";

import { motion } from "framer-motion";
import { GiHook } from "react-icons/gi";

type Props = {};

export default function Hooks({}: Props) {
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
          <GiHook className="text-5xl font-extrabold" />
          <h1 className="text-2xl font-extralight">"WAGMI" HOOKS AND UTILS</h1>
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
            Custom "Wagmi" hooks and utils for common use cases
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
            Designed to simplify interactions with your wallet and smart
            contracts
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
          className="w-full mt-12 md:mt-0 flex flex-col gap-6"
        >
          <div className="bg-[#1E1E1E] p-6 rounded-xl font-mono text-sm w-full max-w-[580px] overflow-x-scroll">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 whitespace-nowrap">
                <span className="text-[#C586C0]">import</span>
                <span className="text-white">{"{"}</span>
                <span className="text-white">useScaffoldReadContract</span>
                <span className="text-white">{"}"}</span>
                <span className="text-[#C586C0]">from</span>
                <span className="text-[#CE9178]">"../hooks/scaffold-eth"</span>
                <span className="text-white -ml-2">;</span>
              </div>

              <div className="flex gap-2 whitespace-nowrap">
                <span className="text-[#C586C0]">import</span>
                <span className="text-white">{"{"}</span>
                <span className="text-white">CopyableText</span>
                <span className="text-white">{"}"}</span>
                <span className="text-[#C586C0]">from</span>
                <span className="text-[#CE9178]">
                  "../components/scaffold-eth"
                </span>
                <span className="text-white -ml-2">;</span>
              </div>

              <div className="flex gap-2 whitespace-nowrap">
                <span className="text-[#C586C0]">import</span>
                <span className="text-white">{"{"}</span>
                <span className="text-white">truncateAddress</span>
                <span className="text-white">{"}"}</span>
                <span className="text-[#C586C0]">from</span>
                <span className="text-[#CE9178]">"../utils/scaffold-eth"</span>
                <span className="text-white -ml-2">;</span>
              </div>

              <div className="mt-4 flex gap-2">
                <span className="text-[#C586C0]">const</span>
                <span className="text-white">{"{"}</span>
                <span className="text-white">data: yourContractOwner</span>
                <span className="text-white">{"}"}</span>
                <span className="text-white">=</span>
                <span className="text-[#4EC9B0]">useScaffoldReadContract</span>
                <span className="text-white -ml-2">
                  {"("}
                  {"{"}
                </span>
              </div>

              <div className="flex gap-2 ml-4">
                <span className="text-[#9CDCFE]">contractName</span>
                <span className="text-white -ml-2">:</span>
                <span className="text-[#CE9178]">"YourContract"</span>
                <span className="text-white -ml-2">,</span>
              </div>

              <div className="flex gap-2 ml-4">
                <span className="text-[#9CDCFE]">functionName</span>
                <span className="text-white -ml-2">:</span>
                <span className="text-[#CE9178]">"owner"</span>
                <span className="text-white -ml-2">,</span>
              </div>

              <div className="flex gap-2">
                <span className="text-white">
                  {"}"}
                  {")"}
                </span>
              </div>

              <div className="mt-4 flex gap-2">
                <span className="text-[#808080]">{"<"}</span>
                <span className="text-[#4EC9B0] -ml-2">CopyableText</span>
              </div>
              <div className="ml-8 flex gap-2">
                <span className="text-[#9CDCFE]">displayText</span>
                <span className="text-white -mx-2">=</span>
                <span className="text-white -mr-2">{"{"}</span>
                <span className="text-[#4EC9B0]">truncateAddress</span>
                <span className="text-white -mx-2">(</span>
                <span className="text-white">yourContractOwner</span>
                <span className="text-white -ml-2">)</span>
                <span className="text-white -ml-2">{"}"}</span>
              </div>
              <div className="ml-8 flex gap-2">
                <span className="text-[#9CDCFE]">value</span>
                <span className="text-white -mx-2">=</span>
                <span className="text-white">{"{"}</span>
                <span className="text-white -mx-2">yourContractOwner</span>
                <span className="text-white">{"}"}</span>
              </div>
              <div className="flex gap-2">
                <span className="text-[#808080]">/&gt;</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
