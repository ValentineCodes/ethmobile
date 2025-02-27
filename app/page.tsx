"use client";

import ContractDebugger from "@/components/features/ContractDebugger";
import Hooks from "@/components/features/Hooks";
import PauxWallet from "@/components/features/PauxWallet";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Popover } from "@headlessui/react";

export default function Home() {
  return (
    <main>
      <Popover className="relative min-h-screen w-full">
        <Header />
        <Hero />
      </Popover>

      <section id="wallet" className="min-h-screen bg-no-repeat bg-cover">
        <PauxWallet />
      </section>

      <section id="debugger" className="min-h-screen bg-no-repeat bg-cover">
        <ContractDebugger />
      </section>

      <section id="hooks" className="min-h-screen bg-no-repeat bg-cover">
        <Hooks />
      </section>
    </main>
  );
}
