import { useRecoilValue } from "recoil";
import { currentTagState } from "store/Main";
import { currentUserState } from "store/Auth";

import Layout from "components/Common/Layout";
import TagSection from "components/Main/TagSection";
import RefVideoSection from "components/Main/RefVideoSection";
import MyTagSection from "components/Main/MyTagSection";
import AsyncBoundary from "components/Common/HandleAsync/AsyncBoundary";

import DefaultRejectedScreen from "components/Common/HandleAsync/DefaultRejectedScreen";
import MotionLoading from "components/Common/MotionLoading";

const Main = () => {
    const currentTag = useRecoilValue(currentTagState);
    const currentUser = useRecoilValue(currentUserState);

    return (
        <>
            <Layout>
                <TagSection />

                <AsyncBoundary
                    PendingFallback={<MotionLoading />}
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
