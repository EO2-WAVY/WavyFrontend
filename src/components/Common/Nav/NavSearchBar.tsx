import { ChangeEvent, useState, useRef, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { debounce } from "lodash";
import ReactGA from "react-ga";
import { GA_CT_SEARCH } from "constants/gaCategory";

import styled from "styled-components";
import Icon from "components/Common/Icon";

const NavSearchBar = () => {
    const history = useHistory();
    const { pathname } = useLocation();

    const inputRef = useRef<HTMLInputElement>(null);
    const [query, setQuery] = useState<string>("");

    const debouncedPush = debounce((value) => {
        history.push(`/search?q=${value}`);
    }, 0);

    const clear = () => {
        history.push("/");
        setQuery("");
        if (!inputRef.current) return;
        inputRef.current.value = "";
    };

    const onChangeQuery = (e: ChangeEvent<HTMLInputElement>) => {
        const {
            target: { value },
        } = e;

        if (value === "") {
            clear();
            return;
        }
        ReactGA.event({ category: GA_CT_SEARCH, action: `value 검색` });
        setQuery(value);
        debouncedPush(value);
    };

    const onClickCancel = () => {
        clear();
    };

    useEffect(() => {
        if (pathname === "/search") return;
        if (!inputRef.current) return;
        inputRef.current.value = "";
        setQuery("");
    }, [pathname]);

    return (
        <Wrapper>
            <Input
                onChange={onChangeQuery}
                ref={inputRef}
                value={query}
                required
            />
            <ImgWrapper>
                <Cancel query={query}>
                    <Icon name="nav_cancel" />
                </Cancel>
                <Magnify query={query} onClick={onClickCancel}>
                    <Icon name="nav_magnify" />
                </Magnify>
            </ImgWrapper>
            <BackLine />
            <OverLine />
        </Wrapper>
    );
};

export default NavSearchBar;

const Wrapper = styled.div`
    position: relative;
    width: 278px;
    height: 40%;

    display: flex;
    justify-content: space-between;

    ${({ theme }) => theme.mediaQuery.mobile} {
        & {
            width: 140px;
        }
    }
`;

const Input = styled.input`
    width: 80%;
    height: 100%;
`;

const ImgWrapper = styled.div`
    position: relative;
    width: 20%;
    height: 100%;
`;

interface IInputWrapper {
    query: string;
}

const InputWrapper = styled.div<IInputWrapper>`
    position: absolute;
    top: 50%;
    right: 0;
    width: 20px;
    height: 20px;
    transform: translateY(-50%);
    cursor: pointer;

    & > svg {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const Magnify = styled(InputWrapper)`
    transition: transform 0.3s, opacity 0.3s;
    opacity: ${({ query }) => query.length > 0 && "0"};
    transform: ${({ query }) => query.length > 0 && "translateY(-6px)"};
`;

const Cancel = styled(InputWrapper)`
    transition: transform 0.3s, opacity 0.3s;
    opacity: ${({ query }) => query.length === 0 && "0"};
    transform: ${({ query }) => query.length === 0 && "translateY(-6px)"};
`;

const BackLine = styled.span`
    position: absolute;
    left: 0;
    bottom: 0;

    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.color.lightGray};
`;

const OverLine = styled.span`
    position: absolute;
    left: 0;
    bottom: 0;

    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.color.purple};

    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s;

    ${Input}:focus ~ &,
    ${Input}:valid ~ & {
        transform: scaleX(1);
    }
`;
