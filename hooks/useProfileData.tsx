'use client';

import { useEffect, useState } from 'react';

export interface ProfileData {
  fid: number;
  username: string;
  displayName: string;
  pfpUrl: string;
  bio?: string;
}

// Simple cache to avoid repeated API calls
const profileCache = new Map<number, ProfileData>();

export function useProfileData(fid: number, fallbackData?: Partial<ProfileData>) {
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      // Skip for invalid FIDs
      if (!fid || fid <= 0) {
        setIsLoading(false);
        return;
      }

      // Skip API call for placeholder FIDs (like remycodes) and use fallback data only
      if (fid === 999999) {
        const fallbackProfile: ProfileData = {
          fid,
          username: fallbackData?.username || `user${fid}`,
          displayName: fallbackData?.displayName || fallbackData?.username || `User ${fid}`,
          pfpUrl: fallbackData?.pfpUrl || '/images/logo.png',
          bio: fallbackData?.bio,
        };
        setProfile(fallbackProfile);
        setIsLoading(false);
        return;
      }

      // Check cache first
      if (profileCache.has(fid)) {
        setProfile(profileCache.get(fid)!);
        setIsLoading(false);
        return;
      }

      try {
        // Use the public Farcaster API to get profile data
        const response = await fetch(`https://api.farcaster.xyz/v2/user?fid=${fid}`);
        
        if (response.ok) {
          const apiResponse = await response.json();
          const userData = apiResponse.result?.user;
          
          if (userData) {
            const profileData: ProfileData = {
              fid,
              username: userData.username || fallbackData?.username || `user${fid}`,
              displayName: userData.displayName || userData.username || fallbackData?.displayName || `User ${fid}`,
              pfpUrl: userData.pfp?.url || fallbackData?.pfpUrl || '/images/logo.png',
              bio: userData.profile?.bio?.text || fallbackData?.bio,
            };
            
            // Successfully fetched profile data

            // Cache the result
            profileCache.set(fid, profileData);
            setProfile(profileData);
          } else {
            throw new Error('No user data in API response');
          }
        } else {
          throw new Error(`API response not ok: ${response.status}`);
        }
      } catch (error) {
        // API fetch failed, using fallback data
        
        // Use fallback data if API fails
        const fallbackProfile: ProfileData = {
          fid,
          username: fallbackData?.username || `user${fid}`,
          displayName: fallbackData?.displayName || fallbackData?.username || `User ${fid}`,
          pfpUrl: fallbackData?.pfpUrl || '/images/logo.png',
          bio: fallbackData?.bio,
        };
        
        setProfile(fallbackProfile);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, [fid]); // Only depend on fid, not fallbackData

  return { profile, isLoading };
}
