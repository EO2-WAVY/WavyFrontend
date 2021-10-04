const formattingDuration = (duration: string) => {
    let value: number = 0;
    value += parseInt(duration.slice(0, 2)) * 60;
    value += parseInt(duration.slice(3, 5));
    value += parseInt(duration.slice(7, 9)) * 0.01;

    return value;
};

export default formattingDuration;
