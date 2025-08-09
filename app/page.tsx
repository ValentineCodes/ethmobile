"use client";

import { useEffect } from "react";
import { sdk } from "@farcaster/miniapp-sdk";
import ContractDebugger from "@/components/features/ContractDebugger";
import Hooks from "@/components/features/Hooks";

import PauxWallet from "@/components/features/PauxWallet";
import ContactUs from "@/components/ContactUs";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Popover } from "@headlessui/react";

export default function Home() {
  useEffect(() => {
    // Call ready() to hide the splash screen and display content
    const initializeApp = async () => {
      try {
        await sdk.actions.ready();
      } catch (error) {
        console.log("Error initializing miniapp:", error);
      }
    };

    initializeApp();
  }, []);

  return (
    <main className="text-black bg-white">
      <Popover className="relative min-h-screen w-full bg-white">
        <Header />
        <Hero />
      </Popover>

      <section id="wallet" className="bg-blue-50">
        <PauxWallet />
      </section>

      <section id="debugger" className="bg-white">
        <ContractDebugger />
      </section>

      <section id="hooks" className="bg-blue-50">
        <Hooks />
      </section>

      <ContactUs />
    </main>
  );
}
