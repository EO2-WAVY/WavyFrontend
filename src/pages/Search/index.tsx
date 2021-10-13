import { useRouterQuery } from "hooks/Common/useRouterQuery";
import Layout from "components/Common/Layout";
import AsyncBoundary from "components/Common/HandleAsync/AsyncBoundary";
import SearchResult from "components/Search/SearchResult";
import DefaultRejectedScreen from "components/Common/HandleAsync/DefaultRejectedScreen";
import MotionLoading from "components/Common/MotionLoading";

const Search = () => {
    const query = useRouterQuery("q");

    return (
        <Layout>
            <AsyncBoundary
                PendingFallback={<MotionLoading />}
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
