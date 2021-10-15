import styled from "styled-components";
import { motion } from "framer-motion";
import { defaultFadeInUpVariants, staggerOne } from "constants/motions";
import useCurrentUser from "hooks/Common/useCurrentUser";

const RequireInfoSection = () => {
    const { currentUser } = useCurrentUser();

    return (
        <Wrapper
            variants={staggerOne}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <Header variants={defaultFadeInUpVariants}>필수 정보</Header>

            <InputWrapper variants={defaultFadeInUpVariants}>
                <TextLabel>메일</TextLabel>
                <TextInput
                    type="text"
                    id="nickname"
                    required
                    value={currentUser?.mbrEmail}
                    disabled
                />
            </InputWrapper>

            <InputWrapper variants={defaultFadeInUpVariants}>
                <TextLabel>별명</TextLabel>
                <TextInput type="text" id="nickname" required />
            </InputWrapper>
        </Wrapper>
    );
};

export default RequireInfoSection;

const Wrapper = styled(motion.section)`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Header = styled(motion.h2)`
    font-weight: 500;
    font-size: 1.25rem;
    margin-bottom: 40px;
`;

const InputWrapper = styled(motion.div)`
    display: flex;
    align-items: center;
    margin-bottom: 16px;
`;

const TextLabel = styled.label`
    margin-right: 60px;
`;

const TextInput = styled.input`
    width: 350px;
    height: 46px;
    padding-left: 1rem;
    border-radius: 4px;
    border: solid 1px ${({ theme }) => theme.color.lightGray};

    &:disabled {
        background-color: rgba(229, 229, 229, 0.2);
    }
`;
