import styled from "styled-components";

import { useHistory } from "react-router-dom";

import Icon from "components/Common/Icon";
import useIsUserSignedIn from "hooks/useIsUserSignedIn";

const NavAuthBtn = () => {
    const history = useHistory();
    const isUserSignedIn = useIsUserSignedIn();

    const onClickIcon = () => {
        history.push(isUserSignedIn ? "/info" : "/login");
    };

    const onClickPopBtn = () => {};

    return (
        <Wrapper isUserSignedIn={isUserSignedIn}>
            <Icon
                name={`${
                    isUserSignedIn ? "nav_sign_after" : "nav_sign_before"
                }`}
                onClick={onClickIcon}
            />
            <PopBtn isUserSignedIn={isUserSignedIn} onClick={onClickPopBtn}>
                <Icon
                    name={`${
                        isUserSignedIn
                            ? "nav_hoverbg_after"
                            : "nav_hoverbg_before"
                    }`}
                />
                <span>{isUserSignedIn ? "Log Out" : "JOIN US"}</span>
            </PopBtn>
        </Wrapper>
    );
};

export default NavAuthBtn;

interface NavAuthState {
    isUserSignedIn: boolean;
}

const PopBtn = styled.div<NavAuthState>`
    position: absolute;
    bottom: -100%;

    visibility: hidden;
    opacity: 0;
    transform: translateY(8px);
    transition: all 0.3s;

    & > span {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        text-align: center;
        transform: translate(-50%, -50%);

        font-size: 0.875rem;
        color: ${({ isUserSignedIn, theme }) =>
            isUserSignedIn ? theme.color.black : theme.color.white};
    }
`;

const Wrapper = styled.div<NavAuthState>`
    position: relative;
    width: 54px;
    height: 54px;
    border-radius: 50%;

    background-color: ${({ isUserSignedIn, theme }) =>
        isUserSignedIn ? theme.color.purple : theme.color.white};
    border: 1px solid
        ${({ isUserSignedIn, theme }) =>
            isUserSignedIn ? theme.color.white : theme.color.lightGray};

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    &:hover > ${PopBtn} {
        visibility: visible;
        opacity: 1;
        transform: translateY(0);
    }
`;
