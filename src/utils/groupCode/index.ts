export const gcPrivacyConsent = (value: boolean) => (value ? "10001" : "10002");

export const gcMarketingConsent = (value: boolean) =>
    value ? "20001" : "20002";

export const gcRefVideoDifficulty = (value: string) => {
    switch (value) {
        case "110001":
            return "EASY";
        case "110002":
            return "NORMAL";
        case "110003":
            return "HARD";
        default:
            return "ERROR";
    }
};
