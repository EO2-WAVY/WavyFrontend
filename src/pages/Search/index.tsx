import { useRouterQuery } from "hooks/useRouterQuery";

const Search = () => {
    const query = useRouterQuery("q");

    return <div>나는{query}</div>;
};

export default Search;
