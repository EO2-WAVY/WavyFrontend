import styled, { CSSProperties } from "styled-components";
import { motion } from "framer-motion";
import useGetCurrentUserStatics from "hooks/api/Review/useGetCurrentUserStatics";
import { defaultFadeInUpVariants, staggerOne } from "constants/motions";
import {
    Bar,
    BarChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

const StaticSection = () => {
    const { data } = useGetCurrentUserStatics();

    if (!data) return null;

    const {
        statics: { dancesGoodAt, dancesOften },
    } = data;

    return (
        <Wrapper
            variants={staggerOne}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <Column variants={defaultFadeInUpVariants}>
                <Category>총 연습시간</Category>
                <Data>{data.statics.totalPracticeTime}</Data>
            </Column>
            <Column variants={defaultFadeInUpVariants}>
                <Category>선호하는 댄서</Category>
                <Data>{data.statics.favorateDancer}</Data>
            </Column>
            <Column variants={defaultFadeInUpVariants}>
                <Category>높은 점수를 받은 댄스</Category>
                <GraphWrapper>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            layout="vertical"
                            data={dancesGoodAt}
                            width={600}
                            height={100}
                        >
                            <Bar
                                dataKey="bestScore"
                                barSize={20}
                                fill="#882BFF"
                            />

                            <XAxis
                                type="number"
                                style={XAxisStyle}
                                domain={[0, 100]}
                            />
                            <YAxis
                                type="category"
                                dataKey="name"
                                style={XAxisStyle}
                                hide
                            />

                            <Tooltip
                                cursor={false}
                                labelStyle={{ fontSize: "12px" }}
                                contentStyle={{ fontSize: "16px" }}
                                formatter={(value: string) => [
                                    `${value}점`,
                                    null,
                                ]}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </GraphWrapper>
            </Column>
            <Column variants={defaultFadeInUpVariants}>
                <Category>많이 춘 댄스</Category>
                <GraphWrapper>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            key="often"
                            data={dancesOften}
                            width={600}
                            height={100}
                        >
                            <Bar dataKey="times" barSize={26} fill="#DDC1FF" />
                            <XAxis
                                dataKey="name"
                                style={XAxisStyle}
                                interval={0}
                                angle={0}
                            />
                            <Tooltip
                                cursor={false}
                                labelStyle={{ fontSize: "12px" }}
                                contentStyle={{ fontSize: "16px" }}
                                formatter={(value: string) => [
                                    `${value}회`,
                                    null,
                                ]}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </GraphWrapper>
            </Column>
        </Wrapper>
    );
};

export default StaticSection;

const Wrapper = styled(motion.section)`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Column = styled(motion.article)`
    width: 60%;
    display: flex;
    justify-content: center;
    margin-bottom: 60px;
    font-size: 1.25rem;
`;

const Category = styled.span`
    width: 50%;
    height: 100%;
    font-weight: 500;
`;

const Data = styled.span`
    width: 50%;
    height: 100%;
`;

const GraphWrapper = styled.div`
    width: 500px;
    height: 200px;
`;

const XAxisStyle: CSSProperties = {
    fontSize: "12px",
    width: "30px",
    overflow: "scroll",
};
