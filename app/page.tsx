"use client";

import PauxWallet from "@/components/features/PauxWallet";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Popover } from "@headlessui/react";

export default function Home() {
  return (
    <main className="text-white">
      <Popover className="relative min-h-screen w-full bg-[#292f37]">
        <Header />
        <Hero />
      </Popover>

      <section
        id="about"
        className="bg-[#292f37] min-h-screen bg-no-repeat bg-cover"
      >
        <PauxWallet />
      </section>
    </main>
  );
}
