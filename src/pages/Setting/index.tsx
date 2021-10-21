import Layout from "components/Common/Layout";
import ButtonSection from "components/Setting/ButtonSection";
import ProfileImageSection from "components/Setting/ProfileImageSection";
import RequireInfoSection from "components/Setting/RequireInfoSection";
import useUpdateMember from "hooks/api/Setting/useUpdateMember";
import useCurrentUser from "hooks/Common/useCurrentUser";
import { useState } from "react";

const Setting = () => {
    const { currentUser } = useCurrentUser();

    const [previewImage, setPreviewImage] = useState<string>(
        currentUser?.profileImageUrl ? currentUser.profileImageUrl : ""
    );
    const [profileImage, setProfileImage] = useState<File | null>(null);

    const [nickname, setNickname] = useState<string>(
        currentUser?.mbrNickname ? currentUser.mbrNickname : ""
    );

    const { updateMember } = useUpdateMember();
    const onSubmit = () => {
        updateMember(nickname, profileImage);
    };

    return (
        <Layout>
            <ProfileImageSection
                previewImage={previewImage}
                setPreviewImage={setPreviewImage}
                setProfileImage={setProfileImage}
            />
            <RequireInfoSection nickname={nickname} setNickname={setNickname} />
            <ButtonSection onSubmit={onSubmit} />
        </Layout>
    );
};

export default Setting;
