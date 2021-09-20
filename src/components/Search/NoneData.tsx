import styled from "styled-components";
import { motion } from "framer-motion";

import Hr from "components/Common/Hr";
import { defaultFadeInUpVariants, staggerOne } from "constants/motions";

interface INoneData {
    query: string | null;
}

const NoneData = ({ query }: INoneData) => {
    return (
        <Wrapper variants={staggerOne}>
            <Hr margin="80px 0 180px 0" />
            <InfoSpan variants={defaultFadeInUpVariants}>
                입력하신 검색어 <strong>"{query}"</strong> (와)과 일치하는
                결과가 없습니다.
            </InfoSpan>
            <Hr margin="180px 0 80px 0" />
            <NotiSection variants={defaultFadeInUpVariants}>
                <dl>
                    <Dt>추천 검색어 : </Dt>
                    <dd>
                        <Ul>
                            <li>다른 키워드를 입력해보세요.</li>
                            <li>아티스트 또는 곡명으로 검색해보세요.</li>
                            <li>Youtube url을 직접 입력해보세요.</li>
                        </Ul>
                    </dd>
                </dl>
            </NotiSection>
        </Wrapper>
    );
};

export default NoneData;

const Wrapper = styled(motion.div)`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const InfoSpan = styled(motion.h1)`
    font-weight: normal;
    font-size: 24px;
    color: ${({ theme }) => theme.color.black};
`;

const NotiSection = styled(motion.section)`
    margin-bottom: 80px;
`;

const Dt = styled.dt`
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 8px;
`;

const Ul = styled.ul`
    margin-left: 24px;
    font-size: 18px;
    line-height: 30px;
`;
