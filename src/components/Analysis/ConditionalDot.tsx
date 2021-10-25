const ConditionalDot = (props: any) => {
    const { cx, cy, value } = props;

    const colorWithValue = (acc: number) => {
        if (acc < 70) return "#FF5354";
        if (acc < 80) return "#51F95D";
        if (acc < 90) return "#5696FF";
        return "#882BFF";
    };

    return (
        <circle
            r="5"
            type="monotone"
            stroke={colorWithValue(value)}
            strokeWidth="2px"
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
