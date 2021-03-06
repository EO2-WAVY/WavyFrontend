import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import {
    defaultFadeInUpStaggerHalfVariants,
    staggerOne,
} from "constants/motions";
import { useState } from "react";
import useGetAnalysesSearch from "hooks/api/Review/useGetAnalysesSearch";
import AnalysisVideoCard from "components/Common/VideoCard/AnalysisVideoCard";
import MotionLoading from "components/Common/MotionLoading";
import AnalysesEmpty from "components/Common/AnalysesEmpty";
import AnalysesHeader from "./AnalysesHeader";
import useIntersectionObserver from "hooks/Common/useIntersectionObserver";

export type orderByType =
    | "latest"
    | "oldest"
    | "highest-score"
    | "lowest-score";

export const isOrderByType = (s: string) =>
    ["latest", "oldest", "highest-score", "lowest-score"].includes(s);

const AnalysesSection = () => {
    const [query, setQuery] = useState<string>("");
    const [orderBy, setOrderBy] = useState<orderByType>("latest");

    const { analyses, isEmpty, isLoadingInitialData, loadMore, isLoadingMore } =
        useGetAnalysesSearch({
            query,
            orderBy,
        });

    const onIntersect: IntersectionObserverCallback = ([
        { isIntersecting },
    ]) => {
        if (!isIntersecting) return;
        loadMore();
    };

    const { setTarget } = useIntersectionObserver({
        onIntersect,
    });

    return (
        <Wrapper
            variants={staggerOne}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <AnalysesHeader
                query={query}
                setQuery={setQuery}
                orderBy={orderBy}
                setOrderBy={setOrderBy}
            />

            <AnimatePresence exitBeforeEnter>
                {isLoadingInitialData ? (
                    <MotionLoading key="review analyses loading" />
                ) : isEmpty ? (
                    <AnalysesEmpty key="reviw analyses empty" query={query} />
                ) : (
                    <>
                        <AnalysesVideoWrapper
                            key={`review analyses wrapper ${query} ${orderBy}`}
                            variants={defaultFadeInUpStaggerHalfVariants}
                        >
                            {analyses.map((analysis) => (
                                <AnalysisVideoCard
                                    analysis={analysis}
                                    key={analysis.anSeq}
                                />
                            ))}
                        </AnalysesVideoWrapper>
                        {!isLoadingMore && (
                            <div key="observerTarget" ref={setTarget} />
                        )}
                    </>
                )}
            </AnimatePresence>
        </Wrapper>
    );
};

export default AnalysesSection;

const Wrapper = styled(motion.section)`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const AnalysesVideoWrapper = styled(motion.div)`
    width: 90%;
    min-height: 400px;
    margin-bottom: 50px;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 32px;

    & > span {
        font-size: 1rem;
        color: ${({ theme }) => theme.color.gray};

        & > strong {
            font-weight: 500;
            color: ${({ theme }) => theme.color.purple};
        }
    }
`;
