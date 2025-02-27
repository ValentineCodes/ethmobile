"use client";

import ContractDebugger from "@/components/features/ContractDebugger";
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

      <section id="about" className="min-h-screen bg-no-repeat bg-cover">
        <PauxWallet />
      </section>

      <section id="about" className="min-h-screen bg-no-repeat bg-cover">
        <ContractDebugger />
      </section>
    </main>
  );
}
