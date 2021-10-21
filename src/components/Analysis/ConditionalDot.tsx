const ConditionalDot = (props: any) => {
    const { cx, cy, value } = props;

    const colorWithValue = (acc: number) => {
        if (acc < 60) return "#FF5354";
        if (acc < 75) return "#51F95D";
        if (acc < 85) return "#5696FF";
        // if (acc < 69) return "#FF5858";
        // if (acc < 85) return "#21FF94";
        return "#882BFF";
    };

    return (
        <circle
            r="5"
            type="monotone"
            stroke={colorWithValue(value)}
            stroke-width="2px"
            fill="#fff"
            width="776"
            height="140"
            cx={cx}
            cy={cy}
            className="recharts-dot recharts-line-dot"
        ></circle>
    );
};

export default ConditionalDot;
