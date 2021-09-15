import { useHistory } from "react-router-dom";
import styled from "styled-components";

const NavAuthBtn = () => {
    const history = useHistory();

    const onClickAuth = () => {
        history.push("/auth");
    };

    return (
        <Wrapper onClick={onClickAuth}>
            <img src="/images/Nav/sign_before.svg" alt="sign in" />
            <Noti>
                <img src="/images/Nav/hoverbg_before.svg" alt="bg" />
                <span>JOIN US</span>
            </Noti>
        </Wrapper>
    );
};

export default NavAuthBtn;

const Noti = styled.div`
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
        color: ${({ theme }) => theme.color.white};
    }
`;

const Wrapper = styled.div`
    position: relative;
    width: 54px;
    height: 54px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.color.lightGray};

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    &:hover > ${Noti} {
        visibility: visible;
        opacity: 1;
        transform: translateY(0);
    }
`;
