import styled from "styled-components";
import { motion } from "framer-motion";
import { defaultFadeInUpVariants, staggerOne } from "constants/motionUtils";

interface IHeader {
    kind: string;
}

const Header = ({ kind }: IHeader) => {
    const description: string =
        kind === "로그인"
            ? "WAVY에 로그인하시고 서비스를 이용하세요!"
            : "WAVY에 가입하고 춤신춤왕으로 거듭나세요!";

    return (
        <HeaderWrapper variants={staggerOne}>
            <Title variants={defaultFadeInUpVariants}>{kind}</Title>
            <Dsc variants={defaultFadeInUpVariants}>{description}</Dsc>
        </HeaderWrapper>
    );
};

export default Header;

const HeaderWrapper = styled(motion.header)`
    width: 100%;
    margin: 80px 0 40px 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Title = styled(motion.h1)`
    font-size: 32px;
    margin-bottom: 12px;
`;

const Dsc = styled(motion.span)`
    font-size: 14px;
    color: ${({ theme }) => theme.color.lightGray};
`;
