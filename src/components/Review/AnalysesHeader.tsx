import { ChangeEvent, Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { defaultFadeInUpVariants, staggerHalf } from "constants/motions";

interface AnalysesHeaderProps {
    query: string;
    setQuery: Dispatch<SetStateAction<string>>;
}

const AnalysesHeader = ({ query, setQuery }: AnalysesHeaderProps) => {
    const onChangeQuery = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setQuery(value);
    };

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
                <select>
                    <option value="asdf" />
                    <option value="asdf" />
                    <option value="asdf" />
                </select>
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
