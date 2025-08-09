// Helper functions for Farcaster profile operations

export interface FarcasterProfileData {
  fid: number;
  username: string;
  displayName: string;
  pfpUrl: string;
  bio?: string;
}

// Function to get actual FID from username using Farcaster fname registry
export async function getFidFromUsername(
  username: string,
): Promise<number | null> {
  try {
    // Use the official Farcaster fname registry API
    const response = await fetch(
      `https://fnames.farcaster.xyz/transfers/current?name=${username}`,
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Check if transfer exists (fname is registered)
    if (data.transfer && data.transfer.to) {
      return data.transfer.to; // This is the FID
    }

    // Fallback to known FIDs for our team members
    const knownUsers: Record<string, number> = {
      tantodefi: 368428, // Real FID from fname registry
      valentineorga: 396317, // Real FID from fname registry
      remycodes: 999999, // Placeholder until fname is registered
    };

    return knownUsers[username] || null;
  } catch (error) {
    console.error("Error fetching FID:", error);

    // Fallback to known FIDs
    const knownUsers: Record<string, number> = {
      tantodefi: 368428,
      valentineorga: 396317,
      remycodes: 999999,
    };

    return knownUsers[username] || null;
  }
}

// Function to get profile data from FID
export async function getProfileFromFid(
  fid: number,
): Promise<FarcasterProfileData | null> {
  try {
    // TODO: Implement actual API call to get profile data from FID
    // This would typically use Neynar API or Farcaster Hub
    // For now, return placeholder data
    return null;
  } catch (error) {
    console.error("Error fetching profile:", error);
    return null;
  }
}

// Real FIDs obtained from Farcaster fname registry API:
// tantodefi: 368428 (https://fnames.farcaster.xyz/transfers/current?name=tantodefi)
// valentineorga: 396317 (https://fnames.farcaster.xyz/transfers/current?name=valentineorga)
// remycodes: Not registered yet - using placeholder 999999

// How to get FIDs:
// 1. Use Farcaster fname registry: https://fnames.farcaster.xyz/transfers/current?name=USERNAME
// 2. For ENS names, use Postgres replicator or direct ENS resolution
// 3. Profile URLs: https://warpcast.com/USERNAME
// 4. API docs: https://docs.farcaster.xyz/developers/guides/accounts/find-by-name
