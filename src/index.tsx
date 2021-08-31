import ReactDOM from "react-dom";
import App from "components/App";

// for styled-components
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import GlobalStyle from "styles/global";

// for recoil
import { RecoilRoot } from "recoil";

ReactDOM.render(
    <RecoilRoot>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <App />
        </ThemeProvider>
    </RecoilRoot>,
    document.getElementById("root")
);
