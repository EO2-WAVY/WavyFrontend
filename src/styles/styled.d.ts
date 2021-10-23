import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        color: {
            black: string;
            white: string;
            gray: string;
            lightGray: string;
            purple: string;
            lightPurple: string;
            red: string;
        };
        size: {
            maxWidth: string;
            layoutHorizonPadding: string;
        };
        shadow: {
            over: string;
        };
        mediaQuery: {
            mobile: string;
        };
    }
}
