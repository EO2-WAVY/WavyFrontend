import { ChangeEvent, FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import ReactGA from "react-ga";

import { defaultFadeInUpVariants } from "constants/motions";
import { fmYouTubeURLToCode } from "utils/formatting/formattingYoutubeCode";
import useNotification from "hooks/Common/useNotification";
import { GA_CT_LINK } from "constants/gaCategory";

const youtubeRegex =
    /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;

const LinkInput = () => {
    const history = useHistory();
    const [value, setValue] = useState<string>("");
    const { addNotification } = useNotification();

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!value.match(youtubeRegex)) {
            addNotification({
                title: "올바른 URL이 아닙니다",
                description: "YouTube URL을 입력해주세요",
                autoHideDuration: 5,
            });
            return;
        }
        const youtubeCode = fmYouTubeURLToCode(value);
        ReactGA.event({
            category: GA_CT_LINK,
            action: `youtube link ${youtubeCode}`,
        });
        history.push(`/link?y=${youtubeCode}`);
    };

    return (
        <InputWrapper variants={defaultFadeInUpVariants} onSubmit={onSubmit}>
            <Input
                required
                value={value}
                onChange={onChange}
                placeholder="https://www.youtube.com/watch?v=wavyisbest"
            />
            <Submit
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1 }}
            >
                연습하기
            </Submit>
        </InputWrapper>
    );
};

export default LinkInput;

const InputWrapper = styled(motion.form)`
    display: flex;
    gap: 12px;
`;

const Input = styled(motion.input)`
    position: relative;
    width: 500px;
    height: 60px;
    padding-left: 30px;
    border: solid 1px ${({ theme }) => theme.color.lightGray};
    border-radius: 50px;
    background-color: ${({ theme }) => theme.color.white};
    transition: border 0.3s;

    &:focus,
    &:valid {
        border-color: ${({ theme }) => theme.color.purple};
    }
`;

const Submit = styled(motion.button)`
    width: 140px;
    height: 60px;
    text-align: center;
    font-size: 18px;
    font-weight: bold;

    color: ${({ theme }) => theme.color.white};
    border-radius: 50px;
    background-color: ${({ theme }) => theme.color.purple};
`;
