import { useParams } from "react-router-dom";

import NotFound from "pages/NotFound";
import Nav from "components/Common/Nav";
import Footer from "components/Common/Footer";
import Utilize from "components/Terms/Utilize";
import Template from "components/Terms/Template";
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
            {termName === "utilize" && (
                <Template title="이용약관" rule={<Utilize />} />
            )}
            {termName === "personal-information" && (
                <Template
                    title="개인정보처리방침"
                    rule={<PersonalInformation />}
                />
            )}
            <Footer />
        </>
    );
};

export default Terms;
