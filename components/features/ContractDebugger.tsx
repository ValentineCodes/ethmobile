import React from "react";

import { IoBugOutline } from "react-icons/io5";

export default function ContractDebugger() {
  return (
    <div className="px-6 py-14 max-w-[1200px] mx-auto flex flex-col md:flex-row-reverse items-center md:justify-between md:space-x-14">
      <div className="container flex flex-col items-center gap-6 md:items-start">
        <div className="flex flex-col items-center md:items-start gap-2">
          <IoBugOutline className="text-3xl font-extrabold" />
          <h1 className="text-xl font-extralight">CONTRACT DEBUGGER</h1>
        </div>

        <div>
          <p className="text-2xl md:text-4xl font-bold leading-tight max-w-sm text-center md:text-left">
            Adaptable Solidity playground
          </p>
        </div>

        <div>
          <p className="text-md max-w-xs text-center md:text-left">
            Debug and refine your smart contracts with a live-updating frontend.
            You can read from, write to, and monitor the state of your deployed
            smart contracts
          </p>
        </div>
      </div>

      <div className="w-full">
        <img
          alt="Contract Debugger"
          src="https://dewdrip.github.io/eth-mobile/assets/debugger.png"
          className="object-cover -ml-12 md:-ml-20"
        />
      </div>
    </div>
  );
}
