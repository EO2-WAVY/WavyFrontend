import { useHistory } from "react-router";

import Spinner from "components/Common/Spinner";
import MotionLoading from "components/Common/MotionLoading";
import PracticeWrapper from "components/Practice/PracticeWrapper";
import AsyncBoundary from "components/Common/HandleAsync/AsyncBoundary";
import DefaultRejectedScreen from "components/Common/HandleAsync/DefaultRejectedScreen";

import { useRouterQuery } from "hooks/useRouterQuery";
import useGetRefVideo from "hooks/api/useGetRefVideo";
import { RQ_REF_VIDEO_ID } from "constants/routerQuery";

const Practice = () => {
    const history = useHistory();
    const rvSeq = useRouterQuery(RQ_REF_VIDEO_ID);
    const { data } = useGetRefVideo(rvSeq);

    if (!rvSeq) {
        history.push("/");
        return <></>;
    }

    return (
        <>
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
                <MotionLoading />
            )}
        </>
    );
};

export default Practice;
