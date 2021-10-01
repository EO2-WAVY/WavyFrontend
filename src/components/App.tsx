// for styled-components
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import GlobalStyle from "styles/global";

// for recoil
import { RecoilRoot } from "recoil";

// for swr
import { SWRConfig } from "swr";
import swrConfig from "constants/swrConfig";

import Router from "router";
import Mobile from "pages/Mobile";
import useViewport from "hooks/useViewport";

function App() {
    const { width } = useViewport();

    return (
        <SWRConfig value={swrConfig}>
            <RecoilRoot>
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    {width > 700 ? <Router /> : <Mobile />}
                </ThemeProvider>
            </RecoilRoot>
        </SWRConfig>
    );
}

export default App;
