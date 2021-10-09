import { useRecoilValue } from "recoil";
import { currentTagState } from "store/Main";

import Layout from "components/Common/Layout";
import TagSection from "components/Main/TagSection";
import RefVideoSection from "components/Main/RefVideoSection";
import { currentUserState } from "store/Auth";
import MyTagSection from "components/Main/MyTagSection";
import AsyncBoundary from "components/Common/HandleAsync/AsyncBoundary";
import FullScreenLoading from "components/Common/HandleAsync/FullScreenLoading";
import DefaultRejectedScreen from "components/Common/HandleAsync/DefaultRejectedScreen";

const Main = () => {
    const currentTag = useRecoilValue(currentTagState);
    const currentUser = useRecoilValue(currentUserState);

    return (
        <>
            <Layout>
                <TagSection />

                <AsyncBoundary
                    PendingFallback={<FullScreenLoading />}
                    RejectedFallback={({ error, resetError }) => (
                        <DefaultRejectedScreen
                            error={error}
                            resetError={resetError}
                        />
                    )}
                >
                    {currentTag === currentUser?.mbrNickname ? (
                        <MyTagSection />
                    ) : (
                        <RefVideoSection />
                    )}
                </AsyncBoundary>
            </Layout>
        </>
    );
};

export default Main;
