import { useHistory } from "react-router";

import MotionLoading from "components/Common/MotionLoading";
import ChallengeWrapper from "components/Challenge/ChallengeWrapper";
import AsyncBoundary from "components/Common/HandleAsync/AsyncBoundary";
import Spinner from "components/Common/Spinner";
import DefaultRejectedScreen from "components/Common/HandleAsync/DefaultRejectedScreen";

import useGetRefVideo from "hooks/api/useGetRefVideo";
import { useRouterQuery } from "hooks/useRouterQuery";
import useIsUserSignedIn from "hooks/useIsUserSignedIn";
import { RQ_REF_VIDEO_ID } from "constants/routerQuery";

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
        <>
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
                    <ChallengeWrapper rvSeq={rvSeq} key="challengeWrapper" />
                </AsyncBoundary>
            ) : (
                <MotionLoading key="motionLoading" />
            )}
        </>
    );
};

export default Challenge;
