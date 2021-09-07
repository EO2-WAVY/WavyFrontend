import { useParams } from "react-router-dom";

type TermsParams = {
    termName: string;
};

const Terms = () => {
    const { termName } = useParams<TermsParams>();

    return <div> {termName} </div>;
};

export default Terms;
