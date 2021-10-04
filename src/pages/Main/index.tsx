import { useRecoilValue } from "recoil";
import { currentTagState } from "store/Main";

import Layout from "components/Common/Layout";
import TagSection from "components/Main/TagSection";
import RefVideoSection from "components/Main/RefVideoSection";
import { currentUserState } from "store/Auth";
import MyTagSection from "components/Main/MyTagSection";

const Main = () => {
    const currentTag = useRecoilValue(currentTagState);
    const currentUser = useRecoilValue(currentUserState);

    return (
        <Layout>
            <TagSection />

            {currentTag === currentUser?.mbrNickname ? (
                <MyTagSection />
            ) : (
                <RefVideoSection />
            )}
        </Layout>
    );
};

export default Main;
