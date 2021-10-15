import Layout from "components/Common/Layout";
import ButtonSection from "components/Setting/ButtonSection";
import ProfileImageSection from "components/Setting/ProfileImageSection";
import RequireInfoSection from "components/Setting/RequireInfoSection";

const Setting = () => {
    return (
        <Layout>
            <ProfileImageSection />
            <RequireInfoSection />
            <ButtonSection />
        </Layout>
    );
};

export default Setting;
