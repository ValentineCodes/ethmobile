import React from "react";

import { IoWalletOutline } from "react-icons/io5";

export default function PauxWallet() {
  return (
    <div className="px-6 py-14 max-w-[1200px] mx-auto flex flex-col md:flex-row items-center md:justify-between md:space-x-14">
      <div className="container flex flex-col items-center gap-6 md:items-start">
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
      </div>

      <div className="w-full">
        <img
          alt="Wallet"
          src="https://dewdrip.github.io/eth-mobile/assets/wallet.png"
          className="object-cover -ml-12"
        />
      </div>
    </div>
  );
}
