import styled from "styled-components";
import { motion } from "framer-motion";
import { defaultFadeInUpVariants, staggerOne } from "constants/motions";
import Icon from "components/Common/Icon";

const ProfileImageSection = () => {
    return (
        <Wrapper
            variants={staggerOne}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <ProfileImageWrapper variants={defaultFadeInUpVariants}>
                <ProfileImage />
                <ProfileImageInputLabel htmlFor="profileImageInput">
                    <Icon name="setting_edit" />
                </ProfileImageInputLabel>
                <ProfileImageInput
                    id="profileImageInput"
                    type="file"
                    accept="image/*"
                />
            </ProfileImageWrapper>
            <DeleteBtn variants={defaultFadeInUpVariants}>삭제</DeleteBtn>
        </Wrapper>
    );
};

export default ProfileImageSection;

const Wrapper = styled(motion.section)`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 40px 0;
`;

const ProfileImageWrapper = styled(motion.div)`
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: green;
`;

const ProfileImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
`;

const ProfileImageInputLabel = styled.label`
    position: absolute;
    bottom: 6px;
    right: 6px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.lightGray};
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s;

    & > svg {
        width: 22px;
    }

    &:hover {
        transform: scale(1.05);
    }
    &:active {
        transform: scale(1);
    }
`;

const ProfileImageInput = styled.input`
    display: none;
`;

const DeleteBtn = styled(motion.button)`
    color: ${({ theme }) => theme.color.lightGray};
    border: solid 1px ${({ theme }) => theme.color.lightGray};
    font-size: 0.825rem;
    margin-top: 20px;
    padding: 6px 18px;

    transition: color 0.3s, border 0.3s;
    &:hover {
        color: ${({ theme }) => theme.color.gray};
        border-color: ${({ theme }) => theme.color.gray};
    }
`;
