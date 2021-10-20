export const fmDateToYyyyMmDdHhMmSs = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
};

export const calcStringDateWithCurrentDate = (strDate: string) => {
    const beforeTime = Date.parse(strDate);
    const date = new Date();
    const currentTime = date.getTime();
    const subDate = new Date(currentTime - beforeTime);
    const subMs = subDate.getTime() / 1000;

    const days = Math.floor(subMs / (3600 * 24));
    if (days > 0) return `${days}일 전`;

    const hours = Math.floor((subMs - days * (3600 * 24)) / 3600);
    if (hours > 0) return `${hours}시간 전`;

    const minutes = Math.floor(
        (subMs - days * (3600 * 24) - hours * 3600) / 60
    );
    if (minutes > 0) return `${minutes}분 전`;

    const seconds = Math.floor(
        subMs - days * (3600 * 24) - hours * 3600 - minutes * 60
    );
    return `${seconds}초 전`;
};
