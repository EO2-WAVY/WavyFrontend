import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { staggerHalf, staggerOne } from "constants/motions";
import { useState } from "react";
import useGetAnalysesSearch from "hooks/api/Review/useGetAnalysesSearch";
import AnalysisVideoCard from "components/Common/VideoCard/AnalysisVideoCard";
import MotionLoading from "components/Common/MotionLoading";
import AnalysesEmpty from "components/Common/AnalysesEmpty";

type orderByType = "latest" | "oldest" | "highest-score" | "lowest-score";

const AnalysesSection = () => {
    const [query, setQuery] = useState<string>("");
    const [orderBy, setOrderBy] = useState<orderByType>("latest");

    const { analyses, loadMore, isEmpty, isLoadingInitialData } =
        useGetAnalysesSearch({
            query,
            orderBy,
        });

    return (
        <Wrapper
            variants={staggerOne}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <Header>
                <h1>나의 댄스영상</h1>

                <SettingWrapper>
                    <SearchInput type="text" placeholder="검색" required />
                    <select>
                        <option value="asdf" />
                        <option value="asdf" />
                        <option value="asdf" />
                    </select>
                </SettingWrapper>
            </Header>

            <AnimatePresence exitBeforeEnter>
                {isLoadingInitialData ? (
                    <MotionLoading key="review analyses loading" />
                ) : (
                    <AnalysesVideoWrapper
                        key="review analyses wrapper"
                        variants={staggerHalf}
                    >
                        {isEmpty ? (
                            <AnalysesEmpty />
                        ) : (
                            analyses.map((analysis, index) => (
                                <AnalysisVideoCard
                                    analysis={analysis}
                                    key={index}
                                />
                            ))
                        )}
                    </AnalysesVideoWrapper>
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
`;

const Header = styled(motion.div)`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;

    & > h1 {
        font-weight: normal;
    }
`;

const SettingWrapper = styled(motion.div)`
    display: flex;
    gap: 1rem;
`;

const SearchInput = styled(motion.input)`
    width: 350px;
    height: 50px;
    padding-left: 1.25rem;
    border: solid 1px ${({ theme }) => theme.color.lightGray};
    border-radius: 50px;
    background-color: ${({ theme }) => theme.color.white};
    transition: border 0.3s;

    &:focus,
    &:valid {
        border-color: ${({ theme }) => theme.color.purple};
    }
`;

const AnalysesVideoWrapper = styled(motion.div)`
    width: 100%;
    margin-bottom: 50px;

    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-items: center;
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
