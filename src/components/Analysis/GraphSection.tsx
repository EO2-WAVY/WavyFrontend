import styled from "styled-components";
import { motion } from "framer-motion";

import {
    LineChart,
    XAxis,
    Line,
    Tooltip,
    ResponsiveContainer,
    // CartesianGrid,
    // YAxis,
} from "recharts";
import useIsGraphShowing from "hooks/Dance/Controller/useIsGraphShowing";

const GraphSection = () => {
    const { isGraphShowing } = useIsGraphShowing();

    return (
        <Wrapper isGraphShowing={isGraphShowing}>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={dummy} margin={{ left: 8, right: 8 }}>
                    <XAxis dataKey="time" />
                    {/* <YAxis /> */}
                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                    <Tooltip />
                    <Line type="monotone" dataKey="accuracy" stroke="#882BFF" />
                </LineChart>
            </ResponsiveContainer>
        </Wrapper>
    );
};

export default GraphSection;

const Wrapper = styled(motion.section)<{ isGraphShowing: boolean }>`
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
    ); /* FF3.6-15 */
    background: -webkit-linear-gradient(
        top,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 1) 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 1) 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#ffffff',GradientType=0 ); /* IE6-9 */
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
    {
        time: "00:16",
        accuracy: 10,
    },
    {
        time: "00:17",
        accuracy: 50,
    },
];
