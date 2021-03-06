import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
    color: {
        black: "#242129",
        white: "#ffffff",
        gray: "#616161",
        lightGray: "#c9c9c9",
        purple: "#882BFF",
        lightPurple: "#9E61FF",
        red: "#FF5858",
    },
    size: {
        maxWidth: "1200px",
        layoutHorizonPadding: "12px",
    },
    shadow: {
        over: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
    },
    mediaQuery: {
        mobile: "@media (max-width: 767px)",
    },
};

export default theme;
