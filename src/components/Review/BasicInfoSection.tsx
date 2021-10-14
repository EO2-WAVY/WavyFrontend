import styled from "styled-components";
import { motion } from "framer-motion";
import { staggerOne } from "constants/motions";
import useCurrentUser from "hooks/Common/useCurrentUser";

const BasicInfoSection = () => {
    const { currentUser } = useCurrentUser();

    return (
        <Wrapper
            variants={staggerOne}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <ProfileImageWrapper>
                <ProfileImage src={currentUser?.profileImageUrl} />
            </ProfileImageWrapper>

            <Nickname>{currentUser?.mbrNickname}</Nickname>
            <Email>{currentUser?.mbrEmail}</Email>
        </Wrapper>
    );
};

export default BasicInfoSection;

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
    overflow: hidden;
`;

const ProfileImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Nickname = styled(motion.h1)`
    margin-top: 1rem;
    font-size: 2rem;
`;

const Email = styled(motion.h2)`
    font-weight: normal;
    font-size: 1rem;
    margin-top: 10px;
`;
