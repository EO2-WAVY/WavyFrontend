import { useParams } from "react-router-dom";

import NotFound from "pages/NotFound";
import Nav from "components/Common/Nav";
import Footer from "components/Common/Footer";
import Utilize from "components/Terms/Utilize";
import PersonalInformation from "components/Terms/PersonalInformation";

type TermsParams = {
    termName: string;
};

const Terms = () => {
    const { termName } = useParams<TermsParams>();

    if (termName !== "utilize" && termName !== "personal-information")
        return <NotFound />;

    return (
        <>
            <Nav />
            {termName === "utilize" && <Utilize />}
            {termName === "personal-information" && <PersonalInformation />}
            <Footer />
        </>
    );
};

export default Terms;
