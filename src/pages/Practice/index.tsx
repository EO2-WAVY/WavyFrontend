import { useHistory } from "react-router";
import { AnimatePresence } from "framer-motion";

import { RQ_REF_VIDEO_ID } from "constants/routerQuery";
import MotionLoading from "components/Common/MotionLoading";

import { useRouterQuery } from "hooks/useRouterQuery";
import useGetRefVideo from "hooks/api/useGetRefVideo";
import PracticeWrapper from "components/Practice/PracticeWrapper";
import AsyncBoundary from "components/Common/HandleAsync/AsyncBoundary";
import Spinner from "components/Common/Spinner";
import DefaultRejectedScreen from "components/Common/HandleAsync/DefaultRejectedScreen";

const Practice = () => {
    const history = useHistory();
    const rvSeq = useRouterQuery(RQ_REF_VIDEO_ID);
    const { data } = useGetRefVideo(rvSeq);

    if (!rvSeq) {
        history.push("/");
        return <></>;
    }

    return (
        <AnimatePresence exitBeforeEnter>
            {data ? (
                <AsyncBoundary
                    PendingFallback={<Spinner />}
                    RejectedFallback={({ error, resetError }) => (
                        <DefaultRejectedScreen
                            error={error}
                            resetError={resetError}
                        />
                    )}
                >
                    <PracticeWrapper rvSeq={rvSeq} />
                </AsyncBoundary>
            ) : (
                <MotionLoading key="motionLoading" />
            )}
        </AnimatePresence>
    );
};

export default Practice;
