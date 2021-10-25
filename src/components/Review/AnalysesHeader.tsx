import {
    ChangeEvent,
    Dispatch,
    SetStateAction,
    MouseEvent,
    useMemo,
} from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { defaultFadeInUpVariants, staggerHalf } from "constants/motions";
import { orderByType, isOrderByType } from "./AnalysesSection";
import useToggle from "hooks/Common/useToggle";

interface AnalysesHeaderProps {
    query: string;
    setQuery: Dispatch<SetStateAction<string>>;
    orderBy: orderByType;
    setOrderBy: Dispatch<SetStateAction<orderByType>>;
}

const AnalysesHeader = ({
    query,
    setQuery,
    orderBy,
    setOrderBy,
}: AnalysesHeaderProps) => {
    const onChangeQuery = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setQuery(value);
    };

    const [isSelectOpen, toggleIsSelectOpen] = useToggle(false);

    const onClickSelect = (e: MouseEvent<HTMLDivElement>) => {
        const { id } = e.target as HTMLElement;
        if (id === "option") return;
        toggleIsSelectOpen();
    };

    const onClickOption = (e: MouseEvent<HTMLSpanElement>) => {
        const {
            dataset: { orderby },
        } = e.target as HTMLSpanElement;
        if (typeof orderby !== "string") return;

        if (isOrderByType(orderby)) {
            setOrderBy(orderby as orderByType);
        }
    };

    const koreanOrderBy = useMemo(() => {
        switch (orderBy) {
            case "latest":
                return "최근순";
            case "oldest":
                return "과거순";
            case "highest-score":
                return "높은 점수순";
            case "lowest-score":
                return "낮은 점수순";
            default:
                return "";
        }
    }, [orderBy]);

    return (
        <Header
            variants={staggerHalf}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <Title variants={defaultFadeInUpVariants}>나의 댄스영상</Title>

            <SettingWrapper variants={staggerHalf}>
                <SearchInput
                    variants={defaultFadeInUpVariants}
                    type="text"
                    placeholder="검색"
                    value={query}
                    onChange={onChangeQuery}
                    required
                />

                <SelectWrapper
                    variants={defaultFadeInUpVariants}
                    onClick={onClickSelect}
                >
                    <span>{koreanOrderBy}</span>

                    <AnimatePresence exitBeforeEnter>
                        {isSelectOpen && (
                            <OptionWrapper
                                variants={defaultFadeInUpVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                            >
                                <Option
                                    id="option"
                                    data-orderby="latest"
                                    onClick={onClickOption}
                                >
                                    최근순
                                </Option>
                                <Option
                                    id="option"
                                    data-orderby="oldest"
                                    onClick={onClickOption}
                                >
                                    과거순
                                </Option>
                                <Option
                                    id="option"
                                    data-orderby="highest-score"
                                    onClick={onClickOption}
                                >
                                    높은 점수순
                                </Option>
                                <Option
                                    id="option"
                                    data-orderby="lowest-score"
                                    onClick={onClickOption}
                                >
                                    낮은 점수순
                                </Option>
                            </OptionWrapper>
                        )}
                    </AnimatePresence>
                </SelectWrapper>
            </SettingWrapper>
        </Header>
    );
};

export default AnalysesHeader;

const Header = styled(motion.div)`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
`;

const Title = styled(motion.h1)`
    font-weight: normal;
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

const SelectWrapper = styled(motion.div)`
    position: relative;
    width: 120px;
    height: 50px;
    padding-left: 1rem;
    display: flex;
    align-items: center;

    border-radius: 40px;
    border: solid 2px ${({ theme }) => theme.color.purple};
    cursor: pointer;
    z-index: 1;
`;

const OptionWrapper = styled(motion.div)`
    position: absolute;
    top: calc(100% + 12px);
    left: 0;
    width: 100%;
    height: 200px;
    padding-left: 1rem;
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 40px;
    border: solid 2px ${({ theme }) => theme.color.purple};

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

const Option = styled.span`
    color: ${({ theme }) => theme.color.gray};
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
        color: ${({ theme }) => theme.color.purple};
    }
`;
