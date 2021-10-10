import { useHistory } from "react-router";
import { AnimatePresence } from "framer-motion";

import MotionLoading from "components/Common/MotionLoading";

import useGetRefVideo from "hooks/api/useGetRefVideo";
import { useRouterQuery } from "hooks/useRouterQuery";
import { RQ_REF_VIDEO_ID } from "constants/routerQuery";
import ChallengeWrapper from "components/Challenge/ChallengeWrapper";
import AsyncBoundary from "components/Common/HandleAsync/AsyncBoundary";
import Spinner from "components/Common/Spinner";
import DefaultRejectedScreen from "components/Common/HandleAsync/DefaultRejectedScreen";
import useIsUserSignedIn from "hooks/useIsUserSignedIn";

const Challenge = () => {
    const history = useHistory();
    const rvSeq = useRouterQuery(RQ_REF_VIDEO_ID);
    const { data } = useGetRefVideo(rvSeq);

    // Router에서 핸들링 시 Prompt 작동 시 refresh되기 때문에 해당 위치 배치
    const { isUserSignedIn } = useIsUserSignedIn();

    if (!rvSeq || !isUserSignedIn) {
        history.push("/");
        return <></>;
    }

    return (
        <AnimatePresence exitBeforeEnter>
            {data ? (
                <AsyncBoundary
                    RejectedFallback={({ error, resetError }) => (
                        <DefaultRejectedScreen
                            error={error}
                            resetError={resetError}
                        />
                    )}
                    PendingFallback={<Spinner />}
                >
                    <ChallengeWrapper rvSeq={rvSeq} />
                </AsyncBoundary>
            ) : (
                <MotionLoading key="motionLoading" />
            )}
        </AnimatePresence>
    );
};

export default Challenge;
