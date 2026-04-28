"use client";

import { useEffect } from "react";
import { sdk } from "@farcaster/miniapp-sdk";
import { motion } from "framer-motion";
import ContractDebugger from "@/components/features/ContractDebugger";
import Hooks from "@/components/features/Hooks";

import PauxWallet from "@/components/features/PauxWallet";
import ContactUs from "@/components/ContactUs";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Popover } from "@headlessui/react";
import { useFarcasterContext } from "@/hooks/useFarcasterContext";
import Sponsors from "@/components/Sponsors";

export default function Home() {
  const { isInFarcaster, user } = useFarcasterContext();

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
    <main className="bg-site text-theme transition-colors duration-300">
      <Popover className="relative min-h-screen w-full border-b border-theme bg-site transition-colors duration-300">
        <Header />
        <Hero />
      </Popover>

      <motion.section
        id="sponsors"
        className="bg-site transition-colors duration-300"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <Sponsors />
      </motion.section>

      <motion.section
        id="wallet"
        className="border-y border-theme bg-site transition-colors duration-300"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <PauxWallet />
      </motion.section>

      <motion.section
        id="debugger"
        className="bg-site transition-colors duration-300"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <ContractDebugger />
      </motion.section>

      <motion.section
        id="hooks"
        className="border-y border-theme bg-site transition-colors duration-300"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <Hooks />
      </motion.section>

      {isInFarcaster && user && <ContactUs />}
    </main>
  );
}
