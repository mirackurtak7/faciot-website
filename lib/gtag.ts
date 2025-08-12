// GA4 helper utilities

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag:
      | ((command: 'js', date: Date) => void)
      | ((command: 'config', targetId: string, config?: Record<string, unknown>) => void)
      | ((command: 'event', eventName: string, params?: Record<string, unknown>) => void);
  }
}

export const GA_MEASUREMENT_ID: string = process.env.NEXT_PUBLIC_GA_ID ?? '';

export function isGaEnabled(): boolean {
  return typeof window !== 'undefined' && typeof window.gtag === 'function' && GA_MEASUREMENT_ID.length > 0;
}

export function pageview(url: string): void {
  if (!isGaEnabled()) return;
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
}

export function gaEvent(eventName: string, params?: Record<string, unknown>): void {
  if (!isGaEnabled()) return;
  window.gtag('event', eventName, params);
}


