export const fmToSeconds = (duration: string): number => {
    let value: number = 0;
    value += parseInt(duration.slice(0, 2)) * 60;
    value += parseInt(duration.slice(3, 5));
    value += parseInt(duration.slice(7, 9)) * 0.01;

    return value;
};

export const fmToMinAndSec = (duration: number): string => {
    const calcMinute = Math.floor(duration / 60);
    const calcSecond = Math.floor(duration - (calcMinute * 60));

    const strMinute = calcMinute >= 10 ? `${calcMinute}` : `0${calcMinute}`;
    const strSecond = calcSecond >= 10 ? `${calcSecond}` : `0${calcSecond}`;
    return `${strMinute}:${strSecond}`;
};
