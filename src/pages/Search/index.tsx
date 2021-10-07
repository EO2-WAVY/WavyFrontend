import { useRouterQuery } from "hooks/useRouterQuery";
import Layout from "components/Common/Layout";
import AsyncBoundary from "components/Common/HandleAsync/AsyncBoundary";
import SearchResult from "components/Search/SearchResult";
import Spinner from "components/Common/Spinner";
import DefaultRejectedScreen from "components/Common/HandleAsync/DefaultRejectedScreen";

const Search = () => {
    const query = useRouterQuery("q");

    return (
        <Layout>
            <AsyncBoundary
                PendingFallback={<Spinner widthPercent={20}/>}
                RejectedFallback={({ error, resetError }) => (
                    <DefaultRejectedScreen
                        error={error}
                        resetError={resetError}
                    />
                )}
            >
                <SearchResult query={query ? query : ""} />
            </AsyncBoundary>
        </Layout>
    );
};

export default Search;
