import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { defaultFadeInUpVariants, staggerHalf } from "constants/motionUtils";

interface IMain {
    kind: string;
}

const Main = ({ kind }: IMain) => {
    const notice: string =
        kind === "로그인" ? "계정이 없으신가요?" : "계정이 있으신가요?";
    const noticeLink: string = kind === "로그인" ? "회원가입" : "로그인";

    const getLinkPath = () => {
        return kind === "회원가입" ? "/login" : "/signup";
    };

    return (
        <MainWrapper variants={staggerHalf}>
            <TESTBTN variants={defaultFadeInUpVariants}></TESTBTN>
            <TESTBTN variants={defaultFadeInUpVariants}></TESTBTN>
            <TESTBTN variants={defaultFadeInUpVariants}></TESTBTN>
            <TESTBTN variants={defaultFadeInUpVariants}></TESTBTN>
            <Noti variants={defaultFadeInUpVariants}>
                {notice}
                <Link to={getLinkPath}> {noticeLink}</Link>
            </Noti>
        </MainWrapper>
    );
};

export default Main;

const MainWrapper = styled(motion.main)`
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const TESTBTN = styled(motion.button)`
    width: 320px;
    height: 56px;
    border: 1px solid ${({ theme }) => theme.color.lightGray};
    margin-bottom: 16px;
`;

const Noti = styled(motion.span)`
    font-size: 14px;
    margin: 8px 0 120px 0;
    color: ${({ theme }) => theme.color.lightGray};

    & > a {
        cursor: pointer;
        text-decoration: underline;
    }
`;
