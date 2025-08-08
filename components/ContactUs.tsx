import React from "react";
import Link from "next/link";
import Image from "next/image";
import { sdk } from "@farcaster/miniapp-sdk";
import { useFarcasterContext } from "@/hooks/useFarcasterContext";

// Farcaster icon component
const FarcasterIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 1000 1000"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M257.778 155.556H742.222V844.444H671.111V528.889H670.414C662.554 441.677 589.258 373.333 500 373.333C410.742 373.333 337.446 441.677 329.586 528.889H328.889V844.444H257.778V155.556Z"/>
    <path d="M128.889 253.333L157.778 351.111H182.222V746.667C182.222 790.498 218.058 826.333 261.889 826.333H738.111C781.942 826.333 817.778 790.498 817.778 746.667V351.111H842.222L871.111 253.333H746.667V155.556C746.667 69.8016 676.865 0 591.111 0H408.889C323.135 0 253.333 69.8016 253.333 155.556V253.333H128.889ZM591.111 746.667H408.889V528.889C408.889 478.595 450.373 437.111 500.778 437.111C551.182 437.111 592.667 478.595 592.667 528.889V746.667H591.111Z"/>
  </svg>
);

export default function ContactUs() {
  const { isInFarcaster } = useFarcasterContext();

  const team = [
    {
      name: "Tanto DeFi",
      handle: "tantodefi",
      fid: 2, // TODO: Replace with actual FID from Farcaster profile
      bio: "Building the future of mobile DeFi experiences. Passionate about creating user-friendly Web3 applications that work seamlessly on mobile devices.",
      profileUrl: "https://warpcast.com/tantodefi",
      avatar: "/images/logo.png", // fallback avatar
    },
    {
      name: "Valentine Orga", 
      handle: "valentineorga",
      fid: 3, // TODO: Replace with actual FID from Farcaster profile  
      bio: "Mobile-first Web3 developer and architect. Specializing in React Native and Ethereum integrations for next-generation dApps.",
      profileUrl: "https://warpcast.com/valentineorga",
      avatar: "/images/logo.png", // fallback avatar
    },
    {
      name: "Remy Codes",
      handle: "remycodes",
      fid: 4, // TODO: Replace with actual FID from Farcaster profile
      bio: "Full-stack developer focused on Web3 infrastructure and mobile development. Expert in bridging traditional web technologies with blockchain innovations.",
      profileUrl: "https://warpcast.com/remycodes",
      avatar: "/images/logo.png", // fallback avatar
    },
  ];

  const handleViewProfile = async (fid: number, fallbackUrl: string) => {
    if (isInFarcaster) {
      try {
        // Use the SDK's viewProfile action for native profile preview
        await sdk.actions.viewProfile({ fid });
      } catch (error) {
        console.log('Error showing profile preview:', error);
        // Fallback to opening URL
        try {
          await sdk.actions.openUrl(fallbackUrl);
        } catch (urlError) {
          console.log('Error opening URL:', urlError);
          window.open(fallbackUrl, '_blank');
        }
      }
    } else {
      window.open(fallbackUrl, '_blank');
    }
  };

  return (
    <section id="contact" className="bg-gray-50 py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Build Your{" "}
            <span className="text-black">Mobile dApp</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Contact us to discuss how we can help you transform your existing Next.js code 
            into a powerful native mobile dApp. We specialize in helping Farcaster miniapps 
            scale to full mobile applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {team.map((member) => (
            <div
              key={member.handle}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="relative w-16 h-16">
                  <Image
                    alt={member.name}
                    fill
                    src={member.avatar}
                    className="rounded-full object-cover border-2 border-purple-200"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/logo.png';
                    }}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-gray-600 font-medium">@{member.handle}</p>
                </div>
                <button
                  onClick={() => handleViewProfile(member.fid, member.profileUrl)}
                  className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  <FarcasterIcon className="w-6 h-6 text-gray-600" />
                </button>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {member.bio}
              </p>
              <button
                onClick={() => handleViewProfile(member.fid, member.profileUrl)}
                className="inline-flex items-center space-x-2 text-gray-600 hover:text-black font-medium text-sm transition-colors"
              >
                <FarcasterIcon className="w-4 h-4" />
                <span>View on Farcaster</span>
              </button>
            </div>
          ))}
        </div>

        <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold mb-4">Let&apos;s Build Something Amazing Together</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Whether you&apos;re starting from scratch or scaling an existing Farcaster miniapp, 
            our team has the expertise to bring your mobile dApp vision to life. 
            We&apos;ll help you reuse your existing Next.js codebase and create a seamless mobile experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleViewProfile(team[0].fid, team[0].profileUrl)}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-orange-400 hover:bg-orange-500 text-gray-800 rounded-lg font-bold transition-colors"
            >
              <FarcasterIcon className="w-5 h-5" />
              <span>Message on Farcaster</span>
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
    </section>
  );
}
