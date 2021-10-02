export const gcPrivacyConsent = (value: boolean) => (value ? "10001" : "10002");

export const gcMarketingConsent = (value: boolean) =>
    value ? "20001" : "20002";
