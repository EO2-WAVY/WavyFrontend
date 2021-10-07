import { useRouterQuery } from "hooks/useRouterQuery";
import Layout from "components/Common/Layout";
import AsyncBoundary from "components/Common/HandleAsync/AsyncBoundary";
import SearchResult from "components/Search/SearchResult";
import DefaultRejectedScreen from "components/Common/HandleAsync/DefaultRejectedScreen";
import FullScreenLoading from "components/Common/HandleAsync/FullScreenLoading";

const Search = () => {
    const query = useRouterQuery("q");

    return (
        <Layout>
            <AsyncBoundary
                PendingFallback={<FullScreenLoading />}
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
