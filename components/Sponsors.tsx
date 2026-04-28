import React from "react";
import { motion } from "framer-motion";

export default function Sponsors() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="mx-auto max-w-[1200px] px-6 py-14"
    >
      <h2 className="text-muted mb-4 text-center text-md font-medium md:text-lg">
        Sponsored By
      </h2>
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ delay: 0.08, duration: 0.45, ease: "easeOut" }}
        className="bg-surface flex h-20 items-center justify-center rounded-xl shadow-sm"
      >
        <img
          src="/images/sponsors/gitcoin.png"
          alt="Gitcoin"
          className="w-64 object-contain"
        />
      </motion.div>
    </motion.div>
  );
}
