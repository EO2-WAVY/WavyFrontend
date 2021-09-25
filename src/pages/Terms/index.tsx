import { useParams } from "react-router-dom";

import NotFound from "pages/NotFound";
import {UtilizePage} from "components/Terms/Utilize";
import {PersonalInformationPage} from "components/Terms/PersonalInformation";

type TermsParams = {
    termName: string;
};

const Terms = () => {
    const { termName } = useParams<TermsParams>();

    if (termName === "utilize") return <UtilizePage />;
    if (termName === "personal-information") return <PersonalInformationPage />;
    return <NotFound />;
};

export default Terms;
