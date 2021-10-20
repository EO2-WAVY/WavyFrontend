import styled from "styled-components";
import { motion } from "framer-motion";

import { LineChart, Line, Tooltip, ResponsiveContainer } from "recharts";
import useIsGraphShowing from "hooks/Dance/Controller/useIsGraphShowing";
import usePlayerInstance from "hooks/Dance/Controller/usePlayerInstance";
import { refVideoRefState, userVideoRefState } from "store/Dance/Controller";
import useGetAnalysis from "hooks/api/useGetAnalysis";
import { useEffect, useState } from "react";
import Spinner from "components/Common/Spinner";

interface ILineChartClickEvent {
    activeCoordinate: {
        x: number;
        y: number;
    };
    activeLabel: number;
    activeTooltipIndex: number;
    chartX: number;
    chartY: number;
}

interface GraphSectionProps {
    anSeq: string;
}

const GraphSection = ({ anSeq }: GraphSectionProps) => {
    const { isGraphShowing } = useIsGraphShowing();
    const { seekTo } = usePlayerInstance(refVideoRefState);
    const { seekTo: userSeekTo } = usePlayerInstance(userVideoRefState);

    const onClickGraph = (e: ILineChartClickEvent) => {
        if (!e) return;
        seekTo(e.activeLabel);
        userSeekTo(e.activeLabel);
    };

    const labelFormatter = (label: number) => {
        return dummy[label].time;
    };

    const valueFormatter = (value: string) => {
        return [value, "정확도"];
    };

    const { data } = useGetAnalysis(anSeq);
    const [isAnalysing, setIsAnalysing] = useState<boolean>(false);

    useEffect(() => {
        const tempIsAnalysing =
            typeof data?.simularityJson.analyzes === "undefined";
        setIsAnalysing(tempIsAnalysing);
    }, [data?.simularityJson.analyzes]);

    return (
        <Wrapper isGraphShowing={isGraphShowing} isAnalysing={isAnalysing}>
            {isAnalysing && (
                <LoadingOverlay>
                    <Spinner widthPercent={5} />
                </LoadingOverlay>
            )}
            <ResponsiveContainer width="100%" height="100%" className="graph">
                <LineChart
                    data={dummy}
                    // margin={{ left: 8, right: 8 }}
                    onClick={onClickGraph}
                >
                    <Tooltip
                        formatter={valueFormatter}
                        labelFormatter={labelFormatter}
                    />
                    <Line
                        type="monotone"
                        dataKey="accuracy"
                        stroke="#882BFF"
                        strokeWidth="2px"
                        dot={{ r: 5 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </Wrapper>
    );
};

export default GraphSection;

interface IWrapper {
    isGraphShowing: boolean;
    isAnalysing: boolean;
}

const Wrapper = styled(motion.section)<IWrapper>`
    position: fixed;
    bottom: 48px;

    width: 100%;
    height: 150px;
    z-index: 1;

    transition: transform 0.8s, opacity 0.3s, visibility 0.8s;
    transform: translate(
        0,
        ${({ isGraphShowing }) => (isGraphShowing ? "0" : "60px")}
    );
    opacity: ${({ isGraphShowing }) => (isGraphShowing ? 1 : 0)};
    visibility: ${({ isGraphShowing }) =>
        isGraphShowing ? "visible" : "hidden"};

    background: -moz-linear-gradient(
        top,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 1) 100%
    );
    background: -webkit-linear-gradient(
        top,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 1) 100%
    );
    background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 1) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#ffffff',GradientType=0 );

    & > .graph {
        opacity: ${({ isAnalysing }) => (isAnalysing ? 0.2 : 1)};
    }
`;

const LoadingOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
`;

const dummy = [
    {
        time: "00:00",
        accuracy: 30,
    },
    {
        time: "00:01",
        accuracy: 50,
    },
    {
        time: "00:02",
        accuracy: 45,
    },
    {
        time: "00:03",
        accuracy: 60,
    },
    {
        time: "00:04",
        accuracy: 65,
    },
    {
        time: "00:05",
        accuracy: 90,
    },
    {
        time: "00:06",
        accuracy: 80,
    },
    {
        time: "00:07",
        accuracy: 80,
    },
    {
        time: "00:08",
        accuracy: 75,
    },
    {
        time: "00:09",
        accuracy: 70,
    },
    {
        time: "00:10",
        accuracy: 60,
    },
    {
        time: "00:11",
        accuracy: 50,
    },
    {
        time: "00:12",
        accuracy: 50,
    },
    {
        time: "00:13",
        accuracy: 30,
    },
    {
        time: "00:14",
        accuracy: 50,
    },
    {
        time: "00:15",
        accuracy: 90,
    },
];
