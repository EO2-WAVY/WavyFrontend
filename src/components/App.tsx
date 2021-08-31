// for styled-components
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import GlobalStyle from "styles/global";

// for recoil
import { RecoilRoot } from "recoil";

import Router from "router";

function App() {
    return (
        <RecoilRoot>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Router />
            </ThemeProvider>
        </RecoilRoot>
    );
}

export default App;
