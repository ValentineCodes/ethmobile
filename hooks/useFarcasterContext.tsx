'use client';

import { useEffect, useState } from 'react';
import { sdk } from '@farcaster/miniapp-sdk';

export interface FarcasterUser {
  fid: number;
  username: string;
  displayName: string;
  pfpUrl: string;
  bio?: string;
}

export interface FarcasterContext {
  isInFarcaster: boolean;
  user: FarcasterUser | null;
  isLoading: boolean;
}

declare global {
  interface Window {
    // Farcaster miniapp context
    farcaster?: {
      context?: {
        user?: FarcasterUser;
        client?: {
          isMiniApp?: boolean;
        };
      };
    };
    // MiniApp SDK context
    miniApp?: {
      context?: {
        user?: FarcasterUser;
      };
    };
  }
}

export function useFarcasterContext(): FarcasterContext {
  const [isInFarcaster, setIsInFarcaster] = useState(false);
  const [user, setUser] = useState<FarcasterUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const detectFarcasterContext = async () => {
      try {
        // Use the SDK to get context - for v0.1.8
        const context = await sdk.context;
        
        if (context && context.user) {
          setIsInFarcaster(true);
          setUser({
            fid: context.user.fid,
            username: context.user.username || 'farcaster-user',
            displayName: context.user.displayName || 'Farcaster User',
            pfpUrl: context.user.pfpUrl || '/images/logo.png',
          });
        } else {
          // Fallback detection methods
          const isInIframe = window.self !== window.top;
          const userAgent = navigator.userAgent;
          const isFarcasterApp = /farcaster/i.test(userAgent) || /warpcast/i.test(userAgent);
          const urlParams = new URLSearchParams(window.location.search);
          const hasFarcasterParams = urlParams.has('fc_fid') || urlParams.has('farcaster') || urlParams.has('miniapp');
          const referrer = document.referrer;
          const isFarcasterReferrer = /farcaster\.xyz|warpcast\.com/i.test(referrer);
          
          const inFarcaster = isInIframe || isFarcasterApp || hasFarcasterParams || isFarcasterReferrer;
          setIsInFarcaster(inFarcaster);
          
          // Try to get user info from URL params if available
          if (hasFarcasterParams && urlParams.get('fc_fid')) {
            const fid = parseInt(urlParams.get('fc_fid') || '0');
            const username = urlParams.get('fc_username') || 'farcaster-user';
            const displayName = urlParams.get('fc_display_name') || 'Farcaster User';
            const pfpUrl = urlParams.get('fc_pfp_url') || '/images/logo.png';
            
            if (fid > 0) {
              setUser({
                fid,
                username,
                displayName,
                pfpUrl,
              });
            }
          }
        }
      } catch (error) {
        console.log('Error detecting Farcaster context:', error);
        setIsInFarcaster(false);
      } finally {
        setIsLoading(false);
      }
    };

    // Initial detection
    detectFarcasterContext();

    // Listen for messages from parent window (for iframe context)
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === 'farcaster-context') {
        setUser(event.data.user);
        setIsInFarcaster(true);
        setIsLoading(false);
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [isLoading]);

  return {
    isInFarcaster,
    user,
    isLoading,
  };
}
