import { motion } from "framer-motion";
import styled from "styled-components";
import { useHistory } from "react-router";
import ReactGA from "react-ga";

import Icon from "components/Common/Icon";
import { gcRefVideoDifficulty } from "utils/groupCode";

import {
    cardNavUpVariants,
    defaultFadeInUpVariants,
    staggerOne,
} from "constants/motions";
import { RQ_REF_VIDEO_ID } from "constants/routerQuery";
import useIsUserSignedIn from "hooks/Common/useIsUserSignedIn";
import useNotification from "hooks/Common/useNotification";
import useToggleBookmark from "hooks/api/Storage/useToggleBookmark";
import { GA_CT_CHALLENGE, GA_CT_PRACTICE } from "constants/gaCategory";

interface CardInfoProps {
    rvSeq: string;
    rvDuration: number;
    rvDifficultyCd: string;
    rvSongName: string;
}

const CardInfo = ({
    rvSeq,
    rvDuration,
    rvDifficultyCd,
    rvSongName,
}: CardInfoProps) => {
    const { isUserSignedIn } = useIsUserSignedIn();
    const { addNotification } = useNotification();
    const { isStoraged, toggleBookmark } = useToggleBookmark(rvSeq);

    const history = useHistory();

    const onClickStorage = () => {
        if (!isUserSignedIn) {
            addNotification({
                title: "로그인 후 사용가능 합니다",
                description: "",
            });
            return;
        }

        toggleBookmark();
    };

    const onClickPractice = () => {
        ReactGA.event({
            category: GA_CT_PRACTICE,
            action: `연습 버튼 클릭 : ${rvSongName}`,
        });
        history.push(`/practice?${RQ_REF_VIDEO_ID}=${rvSeq}`);
    };

    const onClickChallenge = () => {
        if (isUserSignedIn) {
            ReactGA.event({
                category: GA_CT_CHALLENGE,
                action: `회원 도전하기 클릭 : ${rvSongName}`,
            });
            history.push(`/challenge?${RQ_REF_VIDEO_ID}=${rvSeq}`);
            return;
        }

        ReactGA.event({
            category: GA_CT_CHALLENGE,
            action: `비회원 도전하기 클릭 : ${rvSongName}`,
        });
        addNotification({
            title: "로그인 후 사용가능 합니다",
            description:
                "도전하기는 AI 분석을 통해 부족한 점을 짚어주는 서비스입니다. 로그인 후 사용해보세요 !",
            autoHideDuration: 6,
        });
    };

    return (
        <Wrapper
            variants={staggerOne}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <LevelSpan variants={defaultFadeInUpVariants}>
                {gcRefVideoDifficulty(rvDifficultyCd)}
            </LevelSpan>
            <OverrallSpan variants={defaultFadeInUpVariants}>
                {rvDuration}s
            </OverrallSpan>
            <NavWrapper variants={cardNavUpVariants}>
                <NavElem onClick={onClickStorage}>
                    <Icon
                        name={isStoraged ? "common_storaged" : "common_storage"}
                        className={isStoraged ? "storaged" : ""}
                    />
                    <span>보관</span>
                </NavElem>
                <NavElem onClick={onClickPractice}>
                    <Icon name="common_practice" />
                    <span>연습</span>
                </NavElem>
                <NavElem onClick={onClickChallenge}>
                    <Icon name="common_challenge" />
                    <span>도전</span>
                </NavElem>
            </NavWrapper>
        </Wrapper>
    );
};

export default CardInfo;

const Wrapper = styled(motion.div)`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const LevelSpan = styled(motion.span)`
    position: absolute;
    bottom: calc(80px + 3%);
    left: 5%;

    padding: 6px 25px;
    background: rgba(194, 146, 255, 0.3);
    border: 1px solid #c292ff;
    border-radius: 32px;
    color: ${({ theme }) => theme.color.white};
    z-index: 2;
`;

const OverrallSpan = styled(motion.span)`
    position: absolute;
    bottom: calc(80px + 3%);
    right: 5%;

    padding: 11px;
    background: rgba(194, 146, 255, 0.3);
    border: 1px solid #c292ff;
    border-radius: 50%;
    color: ${({ theme }) => theme.color.white};
    z-index: 2;
`;

const NavWrapper = styled(motion.div)`
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 80px;
    background-color: ${({ theme }) => theme.color.purple};

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    z-index: 2;
`;

const NavElem = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: ${({ theme }) => theme.color.white};
    font-size: 14px;
    cursor: pointer;

    & > span {
        transition: color 0.3s;
    }

    & > svg {
        width: 20px;
        height: 20px;
        margin-bottom: 6px;
        transition: transform 0.3s;

        &.storaged {
            & > * {
                fill: #21ff94;
            }
            & ~ span {
                color: #21ff94;
            }
        }
    }

    &:hover > svg {
        transform: scale(1.1);
    }

    &:active > svg {
        transform: scale(0.9);
    }
`;
