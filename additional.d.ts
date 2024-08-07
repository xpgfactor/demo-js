declare global {
    interface Window {
      dataLayer: Record<string, unknown>[];
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      embeddedservice_bootstrap: any;
    }
  }
  
  export {};
  