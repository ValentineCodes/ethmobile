import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { IoCloseOutline } from "react-icons/io5";
import ProfileCard from "./ProfileCard";

// Farcaster icon component
const FarcasterIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 1000 1000"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M257.778 155.556H742.222V844.444H671.111V528.889H670.414C662.554 441.677 589.258 373.333 500 373.333C410.742 373.333 337.446 441.677 329.586 528.889H328.889V844.444H257.778V155.556Z" />
    <path d="M128.889 253.333L157.778 351.111H182.222V746.667C182.222 790.498 218.058 826.333 261.889 826.333H738.111C781.942 826.333 817.778 790.498 817.778 746.667V351.111H842.222L871.111 253.333H746.667V155.556C746.667 69.8016 676.865 0 591.111 0H408.889C323.135 0 253.333 69.8016 253.333 155.556V253.333H128.889ZM591.111 746.667H408.889V528.889C408.889 478.595 450.373 437.111 500.778 437.111C551.182 437.111 592.667 478.595 592.667 528.889V746.667H591.111Z" />
  </svg>
);

export default function ContactUs() {
  const [showWhy, setShowWhy] = useState(false);

  const team = [
    {
      name: "Tanto DeFi",
      handle: "tantodefi",
      fid: 368428, // Real FID from Farcaster fname registry
      bio: "Building the future of mobile DeFi experiences. Passionate about creating user-friendly Web3 applications that work seamlessly on mobile devices.",
      profileUrl: "https://warpcast.com/tantodefi",
      avatar: "/images/logo.png", // Will be dynamically loaded from Farcaster
    },
    {
      name: "Valentine Orga",
      handle: "valentineorga",
      fid: 396317, // Real FID from Farcaster fname registry
      bio: "Mobile-first Web3 developer and architect. Specializing in React Native and Ethereum integrations for next-generation dApps.",
      profileUrl: "https://warpcast.com/valentineorga",
      avatar: "/images/logo.png", // Will be dynamically loaded from Farcaster
    },
    {
      name: "Remy Codes",
      handle: "remycodes",
      fid: 999999, // Placeholder FID - will update when fname is registered
      bio: "Full-stack developer focused on Web3 infrastructure and mobile development. Expert in bridging traditional web technologies with blockchain innovations.",
      profileUrl: "https://warpcast.com/remycodes",
      avatar: "/images/logo.png", // fallback avatar until real profile available
    },
  ];

  return (
    <section id="contact" className="bg-gray-50 py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Build Your <span className="text-black">Mobile dApp</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Contact us to discuss how we can help you transform your existing
            Next.js code into a powerful native mobile dApp. We specialize in
            helping Farcaster miniapps scale to full mobile applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {team.map((member) => (
            <ProfileCard
              key={member.handle}
              name={member.name}
              handle={member.handle}
              fid={member.fid}
              bio={member.bio}
              profileUrl={member.profileUrl}
            />
          ))}
        </div>

        <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold mb-4">
            Let&apos;s Build Something Amazing Together
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Whether you&apos;re starting from scratch or scaling an existing
            Farcaster miniapp, our team has the expertise to bring your mobile
            dApp vision to life. We&apos;ll help you reuse your existing Next.js
            codebase and create a seamless mobile experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={team[0].profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-orange-400 hover:bg-orange-500 text-gray-800 rounded-lg font-bold transition-colors"
            >
              <FarcasterIcon className="w-5 h-5" />
              <span>Message on Farcaster</span>
            </Link>
            <button
              onClick={() => setShowWhy(true)}
              className="px-6 py-3 border border-gray-300 text-gray-600 hover:bg-gray-50 rounded-lg font-bold transition-colors"
            >
              Why Us?
            </button>
            <Link
              href="https://docs.ethmobile.io"
              className="px-6 py-3 border border-gray-300 text-gray-600 hover:bg-gray-50 rounded-lg font-bold transition-colors"
            >
              Explore Documentation
            </Link>
          </div>
        </div>
      </div>

      {/* Why Us Modal */}
      {showWhy && (
        <motion.div
          initial={{ opacity: 0, backgroundColor: "rgba(0,0,0,0)" }}
          animate={{ opacity: 1, backgroundColor: "rgba(0,0,0,0.3)" }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          onClick={() => setShowWhy(false)}
          className="fixed w-full h-screen top-0 left-0 flex flex-col justify-center items-center z-50"
        >
          <div className="w-[80%] max-h-[500px] max-w-[500px] bg-white p-6 rounded-lg flex flex-col gap-4 text-gray-600 text-sm overflow-y-scroll">
            <div className="flex items-center justify-between">
              <h1 className="text-lg text-black">THE VISION</h1>
              <IoCloseOutline
                className="text-3xl cursor-pointer"
                onClick={() => setShowWhy(false)}
              />
            </div>

            <p>
              The goal IS NOT to build a template for React Native Developers to
              build native dApps... Well, NOT QUITE!
            </p>

            <p>
              Since the beginning, web3 has tunnel visioned and left the mobile
              sector unattended; A sector with the potential to onboard a lot
              more users into web3 due to its affordability, accessibility, and
              portability... Busta Rhymes!
            </p>

            <Link
              href="https://vwo.com/blog/10-reasons-mobile-apps-are-better/"
              target="_blank"
              className="text-purple-400 hover:text-purple-500 duration-200"
            >
              Why mobile apps are better
            </Link>

            <p>
              <strong className="font-extrabold">ETH Mobile</strong> will serve
              as the foundation of THE NEW WAVE of mobile dApps by creating the
              best experience for mobile users. We aim to inspire founders to
              scale, to provide job opportunities, and to grow the web3
              community through smooth transitioning.
            </p>

            <p>Let&apos;s make web3 the best space to be! 🚀</p>
          </div>
        </motion.div>
      )}
    </section>
  );
}
