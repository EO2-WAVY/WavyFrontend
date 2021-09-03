// for styled-components
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import GlobalStyle from "styles/global";

// for recoil
import { RecoilRoot } from "recoil";

import Router from "router";
import Mobile from "pages/Mobile";
import useViewport from "hooks/useViewport";

function App() {
    const { width } = useViewport();

    return (
        <RecoilRoot>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                {width > 700 ? <Router /> : <Mobile />}
            </ThemeProvider>
        </RecoilRoot>
    );
}

export default App;
