import { ChangeEvent, FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

import { defaultFadeInUpVariants } from "constants/motions";

const LinkInput = () => {
    const history = useHistory();
    const [value, setValue] = useState<string>("");
    const youtubeRegex =
        /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!value.match(youtubeRegex)) {
            alert("YouTube URL이 아님");
            return;
        }

        const youtubeCode: string[] = [];
        for (let word of value.split("").reverse()) {
            if (word === "=") break;
            youtubeCode.unshift(word);
        }

        history.push(`/link?y=${youtubeCode.join("")}`)
    };

    return (
        <InputWrapper variants={defaultFadeInUpVariants} onSubmit={onSubmit}>
            <Input required value={value} onChange={onChange} />
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
