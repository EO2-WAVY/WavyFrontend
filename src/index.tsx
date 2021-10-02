import ReactDOM from "react-dom";
import App from "components/App";
import { SWRConfig } from "swr";
import swrConfig from "constants/swrConfig";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";

ReactDOM.render(
    <SWRConfig value={swrConfig}>
        <RecoilRoot>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </RecoilRoot>
    </SWRConfig>,
    document.getElementById("root")
);
