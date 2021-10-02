import GlobalStyle from "styles/global";
import Router from "router";
import Mobile from "pages/Mobile";
import useViewport from "hooks/useViewport";
import useCheckCurrentMember from "hooks/api/useCheckCurrentMember";

function App() {
    const { width } = useViewport();
    useCheckCurrentMember();

    return (
        <>
            <GlobalStyle />
            {width > 700 ? <Router /> : <Mobile />}
        </>
    );
}

export default App;
