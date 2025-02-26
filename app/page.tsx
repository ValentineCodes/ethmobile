"use client";

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
    </main>
  );
}
