// GA4 helper utilities

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Prefer environment variable, but fall back to the known Measurement ID if not provided
// Note: Measurement ID is not a secret and can be public
export const GA_MEASUREMENT_ID: string = process.env.NEXT_PUBLIC_GA_ID ?? 'G-WPSXGT6G4X';

export function isGaEnabled(): boolean {
  return (
    typeof window !== 'undefined' &&
    GA_MEASUREMENT_ID.length > 0 &&
    typeof window.gtag === 'function'
  );
}

export function pageview(url: string): void {
  if (!isGaEnabled()) return;
  window.gtag('event', 'page_view', {
    page_path: url,
    page_title: typeof document !== 'undefined' ? document.title : undefined,
    page_location: typeof window !== 'undefined' ? window.location.href : undefined,
    debug_mode: process.env.NODE_ENV !== 'production',
  });
}

export function gaEvent(eventName: string, params?: Record<string, unknown>): void {
  if (!isGaEnabled()) return;
  window.gtag('event', eventName, params);
}


