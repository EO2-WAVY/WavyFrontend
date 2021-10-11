import styled from "styled-components";
import { motion } from "framer-motion";
import useIsUserSignedIn from "hooks/Common/useIsUserSignedIn";

const RouteLeavingModalUserSection = () => {
    const { currentUser } = useIsUserSignedIn();

    return (
        <UserSection>
            <UserImageWrapper>
                <img src={currentUser?.profileImageUrl} alt="profile" />
            </UserImageWrapper>
            <UserTextWrapper>
                <UserNickname>{currentUser?.mbrNickname}</UserNickname>
            </UserTextWrapper>
        </UserSection>
    );
};

export default RouteLeavingModalUserSection;

const UserSection = styled(motion.section)`
    width: 100%;
    height: 52%;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

const UserImageWrapper = styled.div`
    position: relative;
    width: 220px;
    height: 220px;
    border-radius: 50%;
    overflow: hidden;
    border: 16px solid #f6f6f6;

    & > img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`;

const UserTextWrapper = styled.div`
    width: 30%;
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

const UserNickname = styled.span`
    font-size: 1.5rem;
`;
