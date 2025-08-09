import React from "react";
import Image from "next/image";
import { sdk } from "@farcaster/miniapp-sdk";
import { useFarcasterContext } from "@/hooks/useFarcasterContext";
import { useProfileData } from "@/hooks/useProfileData";

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

interface ProfileCardProps {
  name: string;
  handle: string;
  fid: number;
  bio: string;
  profileUrl: string;
}

export default function ProfileCard({
  name,
  handle,
  fid,
  bio,
  profileUrl,
}: ProfileCardProps) {
  const { isInFarcaster } = useFarcasterContext();
  const { profile, isLoading } = useProfileData(fid, {
    username: handle,
    displayName: name,
    bio,
  });

  const handleViewProfile = async () => {
    if (isInFarcaster) {
      try {
        // First try the built-in viewProfile action with FID
        if (sdk.actions.viewProfile && fid !== 999999) {
          await sdk.actions.viewProfile({ fid });
          return;
        }

        // Fallback to opening URL if viewProfile not available or placeholder FID
        if (sdk.actions.openUrl) {
          await sdk.actions.openUrl(profileUrl);
        } else {
          window.open(profileUrl, "_blank");
        }
      } catch (error) {
        console.log("Error showing profile:", error);
        // Final fallback
        window.open(profileUrl, "_blank");
      }
    } else {
      window.open(profileUrl, "_blank");
    }
  };

  if (isLoading || !profile) {
    return (
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 animate-pulse">
        <div className="flex items-start space-x-4 mb-4">
          <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
          <div className="flex-1">
            <div className="h-6 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-24"></div>
          </div>
          <div className="w-10 h-10 bg-gray-200 rounded-lg"></div>
        </div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
      <div className="flex items-start space-x-4 mb-4">
        <div className="relative w-16 h-16">
          <Image
            alt={profile.displayName}
            fill
            src={profile.pfpUrl || "/images/logo.png"}
            className="rounded-full object-cover border-2 border-gray-200"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/images/logo.png";
            }}
            unoptimized={true}
          />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900">
            {profile.displayName}
          </h3>
          <p className="text-gray-600 font-medium">@{profile.username}</p>
        </div>
        <button
          onClick={handleViewProfile}
          className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
        >
          <FarcasterIcon className="w-6 h-6 text-gray-600" />
        </button>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        {profile.bio || bio}
      </p>
      <button
        onClick={handleViewProfile}
        className="inline-flex items-center space-x-2 text-gray-600 hover:text-black font-medium text-sm transition-colors"
      >
        <FarcasterIcon className="w-4 h-4" />
        <span>View on Farcaster</span>
      </button>
    </div>
  );
}
