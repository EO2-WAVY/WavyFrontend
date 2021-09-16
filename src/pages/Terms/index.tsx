import { useParams } from "react-router-dom";

import NotFound from "pages/NotFound";
import Utilize from "components/Terms/Utilize";
import PersonalInformation from "components/Terms/PersonalInformation";

type TermsParams = {
    termName: string;
};

const Terms = () => {
    const { termName } = useParams<TermsParams>();

    if (termName === "utilize") return <Utilize />;
    if (termName === "personal-information") return <PersonalInformation />;
    return <NotFound />;
};

export default Terms;
