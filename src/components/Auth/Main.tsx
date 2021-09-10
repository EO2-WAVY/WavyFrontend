import React from "react";
import styled from "styled-components";

interface IMain {
    kind: string;
    setKind: React.Dispatch<React.SetStateAction<"회원가입" | "로그인">>;
}

const Main = ({ kind, setKind }: IMain) => {
    const notice: string =
        kind === "로그인" ? "계정이 없으신가요?" : "계정이 있으신가요?";
    const noticeLink: string = kind === "로그인" ? "회원가입" : "로그인";

    const onClickLink = () => {
        setKind(kind === "로그인" ? "회원가입" : "로그인");
    };

    return (
        <MainWrapper>
            <TESTBTN></TESTBTN>
            <TESTBTN></TESTBTN>
            <TESTBTN></TESTBTN>
            <TESTBTN></TESTBTN>
            <Span>
                {notice} 
                <span onClick={onClickLink}> {noticeLink}</span>
            </Span>
        </MainWrapper>
    );
};

export default Main;

const MainWrapper = styled.main`
    width: 100%;
    padding: 20px 12px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
`;

const TESTBTN = styled.div`
    width: 300px;
    height: 60px;
    background-color: gray;
`;

const Span = styled.span`
    & > span {
        cursor: pointer;
    }
`;
